package com.multitube.data

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query

@Dao
interface VideoDao {
    @Query("SELECT * FROM playlists ORDER BY createdAt DESC")
    suspend fun getAllPlaylists(): List<Playlist>

    @Insert
    suspend fun insertPlaylist(playlist: Playlist): Long

    @Delete
    suspend fun deletePlaylist(playlist: Playlist)

    @Query("SELECT * FROM video_items WHERE playlistId = :playlistId ORDER BY position")
    suspend fun getVideosForPlaylist(playlistId: Long): List<VideoItem>

    @Insert
    suspend fun insertVideo(video: VideoItem): Long

    @Delete
    suspend fun deleteVideo(video: VideoItem)

    @Query("DELETE FROM video_items WHERE playlistId = :playlistId")
    suspend fun deleteVideosForPlaylist(playlistId: Long)
}
