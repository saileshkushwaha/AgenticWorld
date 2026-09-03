package com.agentworld.app.models;

import java.util.List;

public class DetectionResult {
    public HardwareInfo hardware;
    public NetworkInfo network;
    public ApiKeyInfo apiKeys;
    public List<ModelInfo> availableFreeModels;
    public String recommendedModel;
    public long timestamp;

    public DetectionResult(HardwareInfo hardware, NetworkInfo network,
                          ApiKeyInfo apiKeys, List<ModelInfo> availableFreeModels,
                          String recommendedModel) {
        this.hardware = hardware;
        this.network = network;
        this.apiKeys = apiKeys;
        this.availableFreeModels = availableFreeModels;
        this.recommendedModel = recommendedModel;
        this.timestamp = System.currentTimeMillis();
    }

    public static class HardwareInfo {
        public int cores;
        public long totalRamMb;
        public long availableRamMb;
        public String architecture;
        public String soc;
        public boolean hasNpu;
        public boolean hasGpu;

        public HardwareInfo(int cores, long totalRamMb, long availableRamMb,
                           String architecture, String soc, boolean hasNpu, boolean hasGpu) {
            this.cores = cores;
            this.totalRamMb = totalRamMb;
            this.availableRamMb = availableRamMb;
            this.architecture = architecture;
            this.soc = soc;
            this.hasNpu = hasNpu;
            this.hasGpu = hasGpu;
        }
    }

    public static class NetworkInfo {
        public boolean isWifi;
        public boolean isMobile;
        public boolean hasInternet;
        public String networkType;
        public int latencyMs;

        public NetworkInfo(boolean isWifi, boolean isMobile, boolean hasInternet,
                          String networkType, int latencyMs) {
            this.isWifi = isWifi;
            this.isMobile = isMobile;
            this.hasInternet = hasInternet;
            this.networkType = networkType;
            this.latencyMs = latencyMs;
        }
    }

    public static class ApiKeyInfo {
        public boolean hasOpenAI;
        public boolean hasAnthropic;
        public boolean hasHuggingFace;
        public boolean hasGroq;
        public boolean hasTogetherAI;
        public String detectedProvider;

        public ApiKeyInfo(boolean hasOpenAI, boolean hasAnthropic, boolean hasHuggingFace,
                         boolean hasGroq, boolean hasTogetherAI, String detectedProvider) {
            this.hasOpenAI = hasOpenAI;
            this.hasAnthropic = hasAnthropic;
            this.hasHuggingFace = hasHuggingFace;
            this.hasGroq = hasGroq;
            this.hasTogetherAI = hasTogetherAI;
            this.detectedProvider = detectedProvider;
        }
    }
}