package com.multitube

import android.content.res.Configuration
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.multitube.databinding.ActivityMainBinding
import com.multitube.ui.HomeFragment
import com.multitube.util.AudioFocusManager

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    lateinit var audioFocusManager: AudioFocusManager
        private set

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        audioFocusManager = AudioFocusManager(this) {
            runOnUiThread {
                Toast.makeText(this, "Audio focus lost", Toast.LENGTH_SHORT).show()
            }
        }

        if (savedInstanceState == null) {
            supportFragmentManager.beginTransaction()
                .replace(R.id.fragment_container, HomeFragment())
                .commit()
        }
    }

    fun navigateTo(fragment: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .addToBackStack(null)
            .commit()
    }

    override fun onPictureInPictureModeChanged(
        isInPictureInPictureMode: Boolean,
        newConfig: Configuration
    ) {
        super.onPictureInPictureModeChanged(isInPictureInPictureMode, newConfig)
        supportFragmentManager.findFragmentById(R.id.fragment_container)
            ?.onPictureInPictureModeChanged(isInPictureInPictureMode)
    }

    override fun onDestroy() {
        super.onDestroy()
        audioFocusManager.release()
    }
}
