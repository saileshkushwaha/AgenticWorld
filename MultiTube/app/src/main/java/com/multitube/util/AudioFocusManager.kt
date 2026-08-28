package com.multitube.util

import android.content.Context
import android.media.AudioManager
import android.media.AudioManager.OnAudioFocusChangeListener

class AudioFocusManager(context: Context, private val onFocusLost: () -> Unit) {

    private val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as AudioManager
    private var currentFocus = AudioManager.AUDIOFOCUS_NONE

    private val focusChangeListener = OnAudioFocusChangeListener { focusChange ->
        when (focusChange) {
            AudioManager.AUDIOFOCUS_GAIN -> {
            }
            AudioManager.AUDIOFOCUS_LOSS,
            AudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> {
                onFocusLost()
            }
        }
    }

    fun requestFocus(): Boolean {
        val result = audioManager.requestAudioFocus(
            focusChangeListener,
            AudioManager.STREAM_MUSIC,
            AudioManager.AUDIOFOCUS_GAIN
        )
        currentFocus = result
        return result == AudioManager.AUDIOFOCUS_REQUEST_GRANTED
    }

    fun abandonFocus() {
        audioManager.abandonAudioFocus(focusChangeListener)
        currentFocus = AudioManager.AUDIOFOCUS_NONE
    }

    fun release() {
        abandonFocus()
    }

    fun isFocused(): Boolean = currentFocus == AudioManager.AUDIOFOCUS_GAIN
}
