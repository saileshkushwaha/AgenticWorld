package com.agentworld.app.free_models;

import com.agentworld.app.models.DetectionResult;
import com.agentworld.app.models.ModelConfig;
import com.agentworld.app.models.ModelInfo;

import java.util.ArrayList;
import java.util.List;

public class FreeModelManager {
    public static List<ModelInfo> getAvailableFreeModels(DetectionResult result) {
        List<ModelInfo> available = new ArrayList<>();

        // Check local models
        for (ModelInfo model : ModelConfig.AVAILABLE_MODELS) {
            if (model.free && model.type.equals("local")) {
                if (canRunLocalModel(result.hardware, model)) {
                    available.add(model);
                }
            }
        }

        // Check cloud free tier models
        if (result.network.hasInternet && result.apiKeys.hasHuggingFace) {
            available.add(new ModelInfo("mistral-7b-instruct", "cloud", true,
                "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
                8, 2, "HuggingFace free tier", null));
        }

        if (result.network.hasInternet && result.apiKeys.hasGroq) {
            available.add(new ModelInfo("llama-3-8b", "cloud", true,
                "https://api.groq.com/openai/v1",
                8, 2, "Groq free tier", null));
        }

        return available;
    }

    public static String getRecommendedModel(DetectionResult result) {
        List<ModelInfo> available = getAvailableFreeModels(result);

        if (available.isEmpty()) return "none";

        // Prefer local models with lowest RAM requirements
        ModelInfo best = available.get(0);
        for (ModelInfo model : available) {
            if (model.type.equals("local") && model.minRamMb < best.minRamMb) {
                best = model;
            }
        }

        return best.name;
    }

    public static boolean canRunLocalModel(DetectionResult.HardwareInfo hardware, ModelInfo model) {
        return hardware.availableRamMb >= model.minRamMb && hardware.cores >= model.minCores;
    }

    public static String getModelStatus(ModelInfo model, DetectionResult result) {
        if (model.type.equals("local")) {
            if (canRunLocalModel(result.hardware, model)) {
                return "available";
            }
            return "insufficient_hardware";
        } else {
            if (!result.network.hasInternet) return "no_internet";
            if (!hasRequiredApiKey(model, result)) return "no_api_key";
            return "available";
        }
    }

    private static boolean hasRequiredApiKey(ModelInfo model, DetectionResult result) {
        if (model.endpoint.contains("huggingface")) return result.apiKeys.hasHuggingFace;
        if (model.endpoint.contains("groq")) return result.apiKeys.hasGroq;
        if (model.endpoint.contains("together")) return result.apiKeys.hasTogetherAI;
        return false;
    }
}