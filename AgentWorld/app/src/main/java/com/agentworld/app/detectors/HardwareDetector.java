package com.agentworld.app.detectors;

import android.content.Context;
import android.os.Build;
import android.os.Debug;

public class HardwareDetector {
    public static class HardwareInfo {
        public int cores;
        public long totalRamMb;
        public long availableRamMb;
        public String architecture;
        public String soc;
        public int apiLevel;
        public boolean hasNpu;
        public boolean hasGpu;

        public HardwareInfo(int cores, long totalRamMb, long availableRamMb,
                           String architecture, String soc, int apiLevel,
                           boolean hasNpu, boolean hasGpu) {
            this.cores = cores;
            this.totalRamMb = totalRamMb;
            this.availableRamMb = availableRamMb;
            this.architecture = architecture;
            this.soc = soc;
            this.apiLevel = apiLevel;
            this.hasNpu = hasNpu;
            this.hasGpu = hasGpu;
        }
    }

    public static HardwareInfo detectHardware(Context context) {
        int cores = Runtime.getRuntime().availableProcessors();
        long totalRam = getTotalRam(context);
        long availableRam = getAvailableRam(context);
        String arch = getArchitecture();
        String soc = getSoC();
        int apiLevel = Build.VERSION.SDK_INT;
        boolean hasNpu = detectNpu();
        boolean hasGpu = detectGpu();

        return new HardwareInfo(cores, totalRam, availableRam, arch, soc, apiLevel, hasNpu, hasGpu);
    }

    private static long getTotalRam(Context context) {
        android.app.ActivityManager manager = (android.app.ActivityManager) context
            .getApplicationContext().getActivityManager();
        android.app.ActivityManager.MemoryInfo info = new android.app.ActivityManager.MemoryInfo();
        manager.getMemoryInfo(info);
        return info.totalMem / (1024 * 1024);
    }

    private static long getAvailableRam(Context context) {
        android.app.ActivityManager manager = (android.app.ActivityManager) context
            .getApplicationContext().getActivityManager();
        android.app.ActivityManager.MemoryInfo info = new android.app.ActivityManager.MemoryInfo();
        manager.getMemoryInfo(info);
        return info.availMem / (1024 * 1024);
    }

    private static String getArchitecture() {
        String[] abis = Build.SUPPORTED_ABIS;
        if (abis.length > 0) return abis[0];
        return "unknown";
    }

    private static String getSoC() {
        String manufacturer = Build.MANUFACTURER.toLowerCase();
        String model = Build.MODEL.toLowerCase();

        if (manufacturer.contains("qualcomm") || model.contains("snapdragon")) return "snapdragon";
        if (manufacturer.contains("mediatek") || model.contains("dimensity")) return "dimensity";
        if (manufacturer.contains("samsung") || model.contains("exynos")) return "exynos";
        if (manufacturer.contains("google") || model.contains("tensor")) return "tensor";
        if (manufacturer.contains("apple") || model.contains("a") || model.contains("b") || model.contains("chip")) return "apple_silicon";

        return "unknown";
    }

    private static boolean detectNpu() {
        // Check for NPUs via supported ABIs and hardware features
        String[] abis = Build.SUPPORTED_ABIs;
        for (String abi : abis) {
            if (abi.contains("apu") || abi.contains("npu") || abi.contains("ai")) return true;
        }
        // Check for specific SoCs known to have NPUs
        String soc = getSoC();
        return soc.equals("snapdragon") || soc.equals("dimensity") ||
               soc.equals("exynos") || soc.equals("tensor");
    }

    private static boolean detectGpu() {
        String[] abis = Build.SUPPORTED_ABIs;
        for (String abi : abis) {
            if (abi.contains("gpu") || abi.contains("vulkan") || abi.contains("opengl")) return true;
        }
        return true; // Most modern Android devices have GPUs
    }

    public static boolean canRunModel(HardwareInfo info, int minRamMb, int minCores) {
        return info.availableRamMb >= minRamMb && info.cores >= minCores;
    }
}