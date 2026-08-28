# MultiTube - Design Document

**Created**: 2026-08-28 | **Phase**: Design | **Status**: draft
**Author**: Forge Agent | **Version**: 1.0.0

## Executive Summary

MultiTube Android app uses a single-activity architecture with Fragment-based navigation. The main screen features a grid of YouTube players using the android-youtube-player library. Audio focus management ensures only one video plays audio at a time.

## Architecture

### Component Architecture

```
MainActivity
├── HomeFragment (Grid of players)
│   ├── PlayerGridAdapter
│   │   └── YouTubePlayerView (xN)
│   ├── AddVideoDialog
│   └── ControlPanelFragment
├── PlaylistFragment (Saved lists)
└── SettingsFragment (Configuration)
```

### Data Model

#### VideoItem
```
- videoId: String (11-char YouTube ID)
- title String (optional)
- position: Int (grid position)
```

#### Playlist
```
- id: Long
- name: String
- videos: List<VideoItem>
- createdAt: Long
```

## Component Designs

### MainActivity
**Responsibility**: Host fragments, manage audio focus, handle PiP

### HomeFragment
**Responsibility**: Display grid of players, handle add/remove videos

### YouTubePlayerViewWrapper
**Responsibility**: Wrap android-youtube-player, manage individual playback

### AudioFocusManager
**Responsibility**: Manage audio focus between multiple players

### VideoRepository
**Responsibility**: Persist playlists and video lists

## Data Model

### Entity-Relationship Diagram
```
Playlist (1) --- (N) VideoItem
```

### VideoItem Entity
| Attribute | Type | Constraints |
|-----------|------|-------------|
| id | Long | PK, auto |
| playlistId | Long | FK → Playlist |
| videoId | String | NOT NULL |
| title | String | nullable |
| position | Int | NOT NULL |

### Playlist Entity
| Attribute | Type | Constraints |
|-----------|------|-------------|
| id | Long | PK, auto |
| name | String | NOT NULL |
| createdAt | Long | NOT NULL |

## API Specification

### YouTube IFrame API Integration
**Library**: com.pierfrancescosoffritti.androidyoutubeplayer:core:13.0.0

### Player Configuration
```kotlin
val playerVals = mapOf(
    "controls" to 1,
    "modestbranding" to 1,
    "rel" to 0,
    "fs" to 1,
    "autohide" to 1
)
```

## Design Principles Applied
1. **Single Responsibility**: Each component has one purpose
2. **Open-Closed**: Extensible grid configurations
3. **Dependency Inversion**: Repository pattern for data

## Trade-offs Accepted
| Trade-off | Gained | Sacrificed |
|-----------|--------|------------|
| WebView-based playback | Compatibility | Native performance |
| Single activity | Simplicity | Navigation complexity |
| Local storage only | Privacy | Cloud sync |
