package com.agentworld.app.ui;

import android.app.Application;
import android.util.Log;

import com.agentworld.app.detectors.ApiKeyDetector;
import com.agentworld.app.detectors.HardwareDetector;
import com.agentworld.app.detectors.NetworkDetector;
import com.agentworld.app.free_models.FreeModelManager;
import com.agentworld.app.models.DetectionResult;
import com.agentworld.app.models.ModelInfo;

import java.util.ArrayList;
import java.util.List;

import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

public class ModelViewModel extends AndroidViewModel {
    private static final String TAG = "ModelViewModel";

    private final MutableLiveData<DetectionResult> detectionResult;
    private final List<ModelInfo> availableModels = new ArrayList<>();
    private String recommendedModel = "none";
    private boolean isDetecting = false;

    public ModelViewModel(Application application) {
        super(application);
        detectionResult = new MutableLiveData<>();
        detectModels();
    }

    public void detectModels() {
        if (isDetecting) return;
        isDetecting = true;

        new Thread(() -> {
            try {
                HardwareDetector.HardwareInfo hardware = HardwareDetector.detectHardware(getApplication());
                NetworkDetector.NetworkInfo network = NetworkDetector.detectNetwork(getApplication());
                ApiKeyDetector.ApiKeyInfo apiKeys = ApiKeyDetector.detectApiKeys(getApplication());

                DetectionResult result = new DetectionResult(hardware, network, apiKeys, null, "none");
                List<ModelInfo> available = FreeModelManager.getAvailableFreeModels(result);
                result.availableFreeModels = available;
                result.recommendedModel = FreeModelManager.getRecommendedModel(result);

                detectionResult.postValue(result);
                this.availableModels.clear();
                this.availableModels.addAll(available);
                this.recommendedModel = result.recommendedModel;

                Log.d(TAG, "Detection complete. Available models: " + available.size());
            } catch (Exception e) {
                Log.e(TAG, "Detection failed: " + e.getMessage());
            } finally {
                isDetecting = false;
            }
        }).start();
    }

    public LiveData<DetectionResult> getDetectionResult() {
        return detectionResult;
    }

    public String getRecommendedModel() {
        return recommendedModel;
    }

    public boolean isDetecting() {
        return isDetecting;
    }

    public String getModelStatus(ModelInfo model, DetectionResult result) {
        return FreeModelManager.getModelStatus(model, result);
    }
}
