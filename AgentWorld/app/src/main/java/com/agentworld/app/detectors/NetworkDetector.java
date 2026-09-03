package com.agentworld.app.detectors;

import android.content.Context;
import android.net.ConnectivityManager;
import android.os.NetworkInfo;

public class NetworkDetector {
    public static class NetworkInfo {
        public boolean isWifi;
        public boolean isMobile;
        public boolean isEthernet;
        public int signalStrength;
        public boolean hasInternet;
        public String networkType;
        public int latencyMs;

        public NetworkInfo(boolean isWifi, boolean isMobile, boolean isEthernet,
                          int signalStrength, boolean hasInternet, String networkType, int latencyMs) {
            this.isWifi = isWifi;
            this.isMobile = isMobile;
            this.isEthernet = isEthernet;
            this.signalStrength = signalStrength;
            this.hasInternet = hasInternet;
            this.networkType = networkType;
            this.latencyMs = latencyMs;
        }
    }

    public static NetworkInfo detectNetwork(Context context) {
        ConnectivityManager manager = (ConnectivityManager) context
            .getApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo info = manager.getActiveNetworkInfo();
        boolean hasInternet = info != null && info.isConnected();
        String networkType = "unknown";
        int signalStrength = 0;
        int latencyMs = -1;

        if (info != null && info.isConnected()) {
            switch (info.getType()) {
                case ConnectivityManager.TYPE_WIFI:
                    networkType = "wifi";
                    break;
                case ConnectivityManager.TYPE_MOBILE:
                    networkType = "mobile";
                    break;
                case ConnectivityManager.TYPE_ETHERNET:
                    networkType = "ethernet";
                    break;
                default:
                    networkType = "other";
            }
        }

        return new NetworkInfo(
            networkType.equals("wifi"),
            networkType.equals("mobile"),
            networkType.equals("ethernet"),
            signalStrength,
            hasInternet,
            networkType,
            latencyMs
        );
    }

    public static boolean canReachEndpoint(NetworkInfo info, String endpoint) {
        if (!info.hasInternet) return false;
        if (info.latencyMs < 0) return true; // Unknown latency, assume reachable
        return info.latencyMs < 500; // Reasonable threshold
    }

    public static boolean isCloudReachable(NetworkInfo info) {
        return info.hasInternet && (info.isWifi || info.isEthernet || info.signalStrength > 50);
    }
}