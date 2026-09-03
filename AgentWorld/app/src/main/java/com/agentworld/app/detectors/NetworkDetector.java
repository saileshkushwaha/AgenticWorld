package com.agentworld.app.detectors;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkCapabilities;
import android.os.Build;

import androidx.annotation.RequiresApi;

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

    @SuppressWarnings("deprecation")
    public static NetworkInfo detectNetwork(Context context) {
        ConnectivityManager manager = (ConnectivityManager) context
            .getApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);

        boolean hasInternet = false;
        String networkType = "unknown";
        int signalStrength = 0;
        int latencyMs = -1;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            android.net.Network activeNetwork = manager.getActiveNetwork();
            if (activeNetwork != null) {
                NetworkCapabilities caps = manager.getNetworkCapabilities(activeNetwork);
                if (caps != null) {
                    if (caps.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) {
                        networkType = "wifi";
                    } else if (caps.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)) {
                        networkType = "mobile";
                    } else if (caps.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET)) {
                        networkType = "ethernet";
                    }
                    if (caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)) {
                        hasInternet = true;
                    }
                }
            }
        } else {
            android.net.NetworkInfo info = manager.getActiveNetworkInfo();
            boolean connected = info != null && info.isConnected();
            hasInternet = connected;
            if (connected) {
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
        if (info.latencyMs < 0) return true;
        return info.latencyMs < 500;
    }

    public static boolean isCloudReachable(NetworkInfo info) {
        return info.hasInternet && (info.isWifi || info.isEthernet || info.signalStrength > 50);
    }
}
