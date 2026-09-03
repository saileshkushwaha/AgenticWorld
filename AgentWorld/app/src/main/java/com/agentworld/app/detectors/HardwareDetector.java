package com.agentworld.app.detectors;

import android.app.ActivityManager;
import android.content.Context;
import android.os.Build;

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
        ActivityManager manager = (ActivityManager) context
            .getApplicationContext().getSystemService(Context.ACTIVITY_SERVICE);
        ActivityManager.MemoryInfo info = new ActivityManager.MemoryInfo();
        manager.getMemoryInfo(info);
        return info.totalMem / (1024 * 1024);
    }

    private static long getAvailableRam(Context context) {
        ActivityManager manager = (ActivityManager) context
            .getApplicationContext().getSystemService(Context.ACTIVITY_SERVICE);
        ActivityManager.MemoryInfo info = new ActivityManager.MemoryInfo();
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

        return "unknown";
    }

    private static boolean detectNpu() {
        String[] abis = Build.SUPPORTED_ABIS;
        for (String abi : abis) {
            if (abi.contains("apu") || abi.contains("npu") || abi.contains("ai")) return true;
        }
        String soc = getSoC();
        return soc.equals("snapdragon") || soc.equals("dimensity") ||
               soc.equals("exynos") || soc.equals("tensor");
    }

    private static boolean detectGpu() {
        return true;
    }

    public static boolean canRunModel(HardwareInfo info, int minRamMb, int minCores) {
        return info.availableRamMb >= minRamMb && info.cores >= minCores;
    }
}
