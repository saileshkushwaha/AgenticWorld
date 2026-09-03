package com.agentworld.app.detectors;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

public class ApiKeyDetector {
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

    public static ApiKeyInfo detectApiKeys(Context context) {
        boolean openAI = checkOpenAIKey();
        boolean anthropic = checkAnthropicKey();
        boolean huggingFace = checkHuggingFaceKey();
        boolean groq = checkGroqKey();
        boolean togetherAI = checkTogetherAIKey();

        String provider = "none";
        if (openAI) provider = "openai";
        else if (anthropic) provider = "anthropic";
        else if (huggingFace) provider = "huggingface";
        else if (groq) provider = "groq";
        else if (togetherAI) provider = "together";

        return new ApiKeyInfo(openAI, anthropic, huggingFace, groq, togetherAI, provider);
    }

    private static boolean checkOpenAIKey() {
        String key = System.getenv("OPENAI_API_KEY");
        return key != null && !key.isEmpty() && key.startsWith("sk-");
    }

    private static boolean checkAnthropicKey() {
        String key = System.getenv("ANTHROPIC_API_KEY");
        return key != null && !key.isEmpty() && key.startsWith("sk-ant-");
    }

    private static boolean checkHuggingFaceKey() {
        String key = System.getenv("HUGGING_FACE_HUB_TOKEN");
        return key != null && !key.isEmpty() && key.startsWith("hf_");
    }

    private static boolean checkGroqKey() {
        String key = System.getenv("GROQ_API_KEY");
        return key != null && !key.isEmpty() && key.startsWith("gsk_");
    }

    private static boolean checkTogetherAIKey() {
        String key = System.getenv("TOGETHER_API_KEY");
        return key != null && !key.isEmpty() && key.length() > 20;
    }

    public static boolean hasAnyCloudKey(ApiKeyInfo info) {
        return info.hasOpenAI || info.hasAnthropic || info.hasHuggingFace ||
               info.hasGroq || info.hasTogetherAI;
    }
}