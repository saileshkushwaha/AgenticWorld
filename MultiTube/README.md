# MultiTube Android App

## Overview
MultiTube is an Android application that enables users to play multiple YouTube videos simultaneously in a grid layout on a single screen.

## Features
- Play multiple YouTube videos simultaneously (up to 16)
- Add videos by URL or Video ID
- Adjustable grid layout (1x1, 2x2, 3x3, 4x4)
- Master playback controls (Play All, Pause All, Mute All)
- Audio focus management (auto-mute others when one plays)
- Picture-in-Picture mode support
- Dark theme UI

## Technical Stack
- **Language**: Kotlin
- **Min SDK**: 24 (Android 7.0)
- **Target SDK**: 34 (Android 14)
- **YouTube Player**: android-youtube-player 13.0.0 (IFrame API)
- **Database**: Room (local storage)
- **Architecture**: Single Activity + Fragments

## Project Structure
```
MultiTube/
├── app/
│   ├── build.gradle
│   ├── src/main/
│   │   ├── AndroidManifest.xml
│   │   ├── java/com/multitube/
│   │   │   ├── MainActivity.kt
│   │   │   ├── data/
│   │   │   │   ├── AppDatabase.kt
│   │   │   │   ├── VideoDao.kt
│   │   │   │   └── VideoItem.kt
│   │   │   ├── player/
│   │   │   │   └── YouTubePlayerWrapper.kt
│   │   │   ├── ui/
│   │   │   │   └── HomeFragment.kt
│   │   │   └── util/
│   │   │       ├── AudioFocusManager.kt
│   │   │       └── YouTubeUrlParser.kt
│   │   └── res/
│   │       ├── layout/
│   │       ├── values/
│   │       └── mipmap/
│   └── build.gradle
├── build.gradle
└── settings.gradle
```

## Build Instructions

### Prerequisites
- Android Studio Hedgehog (2023.1.1) or later
- JDK 17
- Android SDK 34

### Steps
1. Clone the repository
2. Open in Android Studio
3. Sync Gradle files
4. Build → Build Bundle(s) / APK(s) → Build APK(s)
5. Install APK on device

### Command Line
```bash
./gradlew assembleDebug
```
APK location: `app/build/outputs/apk/debug/app-debug.apk`

## Usage
1. Launch the app
2. Tap "+" to add a YouTube video
3. Enter URL or Video ID
4. Tap video to start playback
5. Use controls for master playback
6. Tap grid button to change layout

## YouTube ToS Compliance
- Uses official IFrame Player API
- No video downloading or redistribution
- Ads displayed as per YouTube terms
- Music content follows YouTube Premium requirements

## License
MIT License
