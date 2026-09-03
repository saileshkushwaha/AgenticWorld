package com.agentworld.app.models;

import java.util.Arrays;
import java.util.List;

public class ModelConfig {
    public static final List<ModelInfo> AVAILABLE_MODELS = Arrays.asList(
        new ModelInfo("gpt-4", "cloud", false, "https://api.openai.com/v1", 8, 2,
            "Powerful cloud model for complex reasoning", Arrays.asList("reasoning", "code", "writing")),
        new ModelInfo("claude-3", "cloud", false, "https://api.anthropic.com/v1", 8, 2,
            "Advanced cloud model with long context", Arrays.asList("reasoning", "code", "analysis")),
        new ModelInfo("llama-2-70b", "local", true, "http://localhost:8080", 16, 4,
            "Free local model - high performance", Arrays.asList("reasoning", "code", "writing")),
        new ModelInfo("mistral-7b", "local", true, "http://localhost:8081", 8, 2,
            "Free local model - fast and efficient", Arrays.asList("reasoning", "code", "writing")),
        new ModelInfo("phi-3", "local", true, "http://localhost:8082", 4, 1,
            "Free lightweight local model", Arrays.asList("reasoning", "code")),
        new ModelInfo("gemma-2", "local", true, "http://localhost:8083", 6, 2,
            "Free Google local model", Arrays.asList("reasoning", "code", "writing"))
    );

    public static final List<String> CLOUD_FREE_TIERS = Arrays.asList(
        "huggingface", "groq", "together"
    );

    public static final List<String> DETECTION_METHODS = Arrays.asList(
        "hardware_capability_check",
        "memory_availability_check",
        "network_connectivity_check",
        "api_key_detection"
    );
}