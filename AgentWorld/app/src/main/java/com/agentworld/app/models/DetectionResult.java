package com.agentworld.app.models;

import com.agentworld.app.detectors.ApiKeyDetector;
import com.agentworld.app.detectors.HardwareDetector;
import com.agentworld.app.detectors.NetworkDetector;

import java.util.List;

public class DetectionResult {
    public HardwareDetector.HardwareInfo hardware;
    public NetworkDetector.NetworkInfo network;
    public ApiKeyDetector.ApiKeyInfo apiKeys;
    public List<ModelInfo> availableFreeModels;
    public String recommendedModel;
    public long timestamp;

    public DetectionResult(HardwareDetector.HardwareInfo hardware,
                           NetworkDetector.NetworkInfo network,
                           ApiKeyDetector.ApiKeyInfo apiKeys,
                           List<ModelInfo> availableFreeModels,
                           String recommendedModel) {
        this.hardware = hardware;
        this.network = network;
        this.apiKeys = apiKeys;
        this.availableFreeModels = availableFreeModels;
        this.recommendedModel = recommendedModel;
        this.timestamp = System.currentTimeMillis();
    }
}
