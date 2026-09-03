package com.agentworld.app.utils;

public class Utils {
    public static String formatRam(long mb) {
        if (mb >= 1024) {
            return String.format("%.1f GB", mb / 1024.0);
        }
        return mb + " MB";
    }

    public static String formatCores(int cores) {
        if (cores >= 8) {
            return cores + " cores (high)";
        } else if (cores >= 4) {
            return cores + " cores (medium)";
        } else if (cores >= 2) {
            return cores + " cores (low)";
        }
        return cores + " cores (minimal)";
    }

    public static boolean isLowEndDevice(int cores, long ramMb) {
        return cores < 4 || ramMb < 4096;
    }

    public static boolean isMidRangeDevice(int cores, long ramMb) {
        return cores >= 4 && cores < 8 && ramMb >= 4096 && ramMb < 8192;
    }

    public static boolean isHighEndDevice(int cores, long ramMb) {
        return cores >= 8 || ramMb >= 8192;
    }
}