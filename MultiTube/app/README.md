# MultiTube Android App

This is the complete Android project for MultiTube - an app that plays multiple YouTube videos simultaneously in a grid layout.

## Quick Build

To build the APK, you need Android Studio or the Android SDK:

```bash
# Using Android Studio
# 1. Open this folder in Android Studio
# 2. Sync Gradle
# 3. Build > Build APK

# Using command line (requires Android SDK)
./gradlew assembleDebug
```

The APK will be at: `app/build/outputs/apk/debug/app-debug.apk`

## Features Implemented
- Multiple YouTube video playback (up to 16)
- Grid layout (1x1 to 4x4)
- Add videos by URL or Video ID
- Master playback controls
- Audio focus management
- Picture-in-Picture support
- Dark theme
- Room database for persistence

## YouTube API Compliance
Uses the official IFrame Player API via the android-youtube-player library, which is the recommended approach since Google deprecated the native YouTube Android Player API.
