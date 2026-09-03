package com.agentworld.app.ui;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.agentworld.app.R;
import com.agentworld.app.detectors.ApiKeyDetector;
import com.agentworld.app.models.DetectionResult;
import com.agentworld.app.models.ModelInfo;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    private ModelViewModel viewModel;
    private ModelAdapter adapter;
    private ProgressBar progressBar;
    private SwipeRefreshLayout swipeRefresh;
    private TextView recommendedView;
    private TextView hardwareView;
    private TextView networkView;
    private TextView apiKeyView;
    private Button detectButton;
    private RecyclerView recyclerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        viewModel = new ViewModelProvider(this).get(ModelViewModel.class);

        initializeViews();
        setupAdapter();
        observeViewModel();
        detectButton.setOnClickListener(v -> viewModel.detectModels());
    }

    private void initializeViews() {
        progressBar = findViewById(R.id.progressBar);
        swipeRefresh = findViewById(R.id.swipeRefresh);
        recommendedView = findViewById(R.id.recommendedView);
        hardwareView = findViewById(R.id.hardwareView);
        networkView = findViewById(R.id.networkView);
        apiKeyView = findViewById(R.id.apiKeyView);
        detectButton = findViewById(R.id.detectButton);

        swipeRefresh.setOnRefreshListener(() -> {
            viewModel.detectModels();
            swipeRefresh.setRefreshing(false);
        });
    }

    private void setupAdapter() {
        adapter = new ModelAdapter();
        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setHasFixedSize(true);
        recyclerView.setAdapter(adapter);
    }

    private void observeViewModel() {
        viewModel.detectionResult.observe(this, result -> {
            if (result != null) {
                displayResults(result);
            }
        });
    }

    private void displayResults(DetectionResult result) {
        hardwareView.setText(String.format(
            "CPU: %d cores | RAM: %d MB available | SoC: %s | Arch: %s",
            result.hardware.cores,
            result.hardware.availableRamMb,
            result.hardware.soc,
            result.hardware.architecture
        ));

        networkView.setText(String.format(
            "Network: %s | Internet: %s",
            result.network.networkType,
            result.network.hasInternet ? "Yes" : "No"
        ));

        apiKeyView.setText(String.format(
            "Cloud Keys: %s | Provider: %s",
            ApiKeyDetector.hasAnyCloudKey(result.apiKeys) ? "Yes" : "No",
            result.apiKeys.detectedProvider
        ));

        recommendedView.setText(String.format(
            "Recommended: %s | Available: %d models",
            result.recommendedModel,
            result.availableFreeModels.size()
        ));

        adapter.submitList(result.availableFreeModels);
    }
}
