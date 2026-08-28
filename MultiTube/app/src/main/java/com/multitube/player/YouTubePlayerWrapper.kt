package com.multitube.player

import android.view.View
import android.widget.ImageButton
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView

class YouTubePlayerWrapper(
    val youTubePlayerView: YouTubePlayerView,
    private val onReady: (YouTubePlayer) -> Unit = {},
    private val onStateChange: (String) -> Unit = {}
) {
    var youTubePlayer: YouTubePlayer? = null
        private set

    var videoId: String? = null
        private set

    var isMuted: Boolean = false
        private set

    init {
        youTubePlayerView.addYouTubePlayerListener(object : AbstractYouTubePlayerListener() {
            override fun onReady(player: YouTubePlayer) {
                youTubePlayer = player
                onReady(player)
            }

            override fun onStateChange(player: YouTubePlayer, state: PlayerState) {
                onStateChange(state.name)
            }
        })
    }

    fun loadVideo(videoId: String, startSeconds: Float = 0f) {
        this.videoId = videoId
        youTubePlayer?.loadVideo(videoId, startSeconds) ?: run {
            youTubePlayerView.addYouTubePlayerListener(object : AbstractYouTubePlayerListener() {
                override fun onReady(player: YouTubePlayer) {
                    youTubePlayer = player
                    player.loadVideo(videoId, startSeconds)
                }
            })
        }
    }

    fun play() {
        youTubePlayer?.play()
    }

    fun pause() {
        youTubePlayer?.pause()
    }

    fun mute() {
        youTubePlayer?.mute()
        isMuted = true
    }

    fun unMute() {
        youTubePlayer?.unMute()
        isMuted = false
    }

    fun seekTo(seconds: Float) {
        youTubePlayer?.seekTo(seconds)
    }

    fun getCurrentTime(): Float {
        return youTubePlayer?.currentTime ?: 0f
    }

    fun release() {
        youTubePlayerView.release()
    }
}
