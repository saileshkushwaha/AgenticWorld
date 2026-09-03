package com.agentworld.app.models;

import java.util.List;

public class ModelInfo {
    public String name;
    public String type; // "local" or "cloud"
    public boolean free;
    public String endpoint;
    public int minRamMb;
    public int minCores;
    public String description;
    public List<String> capabilities;

    public ModelInfo(String name, String type, boolean free, String endpoint,
                     int minRamMb, int minCores, String description, List<String> capabilities) {
        this.name = name;
        this.type = type;
        this.free = free;
        this.endpoint = endpoint;
        this.minRamMb = minRamMb;
        this.minCores = minCores;
        this.description = description;
        this.capabilities = capabilities;
    }

    @Override
    public String toString() {
        return name + " (" + type + (free ? ", free" : "") + ")";
    }
}
