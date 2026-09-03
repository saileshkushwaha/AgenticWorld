package com.agentworld.app.ui;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.agentworld.app.R;
import com.agentworld.app.models.ModelInfo;

import java.util.ArrayList;
import java.util.List;

public class ModelAdapter extends RecyclerView.Adapter<ModelAdapter.ModelViewHolder> {

    private List<ModelInfo> models = new ArrayList<>();

    @NonNull
    @Override
    public ModelViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        View view = inflater.inflate(R.layout.item_model, parent, false);
        return new ModelViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ModelViewHolder holder, int position) {
        ModelInfo model = models.get(position);
        holder.bind(model);
    }

    @Override
    public int getItemCount() {
        return models.size();
    }

    public void submitList(List<ModelInfo> newModels) {
        models.clear();
        models.addAll(newModels);
        notifyDataSetChanged();
    }

    static class ModelViewHolder extends RecyclerView.ViewHolder {
        private final TextView nameView;
        private final TextView typeView;
        private final TextView statusView;

        ModelViewHolder(@NonNull View item) {
            super(item);
            nameView = item.findViewById(R.id.modelName);
            typeView = item.findViewById(R.id.modelType);
            statusView = item.findViewById(R.id.modelStatus);
        }

        void bind(ModelInfo model) {
            nameView.setText(model.name);
            typeView.setText(model.type + (model.free ? " (free)" : ""));
            statusView.setText(model.description);
        }
    }
}
