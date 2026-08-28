package com.multitube.ui

import android.app.PictureInPictureParams
import android.content.res.Configuration
import android.os.Build
import android.os.Bundle
import android.util.Rational
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.GridLayoutManager
import com.google.android.material.dialog.MaterialAlertDialogBuilder
import com.multitube.MainActivity
import com.multitube.databinding.FragmentHomeBinding
import com.multitube.player.YouTubePlayerWrapper
import com.multitube.util.YouTubeUrlParser

class HomeFragment : Fragment() {

    private var _binding: FragmentHomeBinding? = null
    private val binding get() = _binding!!

    private val players = mutableListOf<YouTubePlayerWrapper>()
    private var gridColumns = 2
    private var activePlayerIndex = -1

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setupGrid()
        setupControls()
    }

    private fun setupGrid() {
        binding.playerGrid.layoutManager = GridLayoutManager(requireContext(), gridColumns)
    }

    private fun setupControls() {
        binding.fabAddVideo.setOnClickListener {
            showAddVideoDialog()
        }

        binding.btnPlayAll.setOnClickListener {
            players.forEach { it.play() }
        }

        binding.btnPauseAll.setOnClickListener {
            players.forEach { it.pause() }
        }

        binding.btnMuteAll.setOnClickListener {
            players.forEach { it.mute() }
        }

        binding.btnGridSize.setOnClickListener {
            showGridSizeDialog()
        }
    }

    private fun showAddVideoDialog() {
        val input = EditText(requireContext()).apply {
            hint = "Enter YouTube URL or Video ID"
        }

        MaterialAlertDialogBuilder(requireContext())
            .setTitle("Add YouTube Video")
            .setView(input)
            .setPositiveButton("Add") { _, _ ->
                val inputText = input.text.toString()
                val videoId = YouTubeUrlParser.extractVideoId(inputText)
                if (videoId != null) {
                    addVideoToGrid(videoId)
                } else {
                    Toast.makeText(requireContext(), "Invalid YouTube URL or ID", Toast.LENGTH_SHORT).show()
                }
            }
            .setNegativeButton("Cancel", null)
            .show()
    }

    private fun showGridSizeDialog() {
        val options = arrayOf("1x1", "2x2", "3x3", "4x4")
        val currentIndex = when (gridColumns) {
            1 -> 0; 2 -> 1; 3 -> 2; 4 -> 3; else -> 1
        }

        MaterialAlertDialogBuilder(requireContext())
            .setTitle("Grid Size")
            .setSingleChoiceItems(options, currentIndex) { dialog, which ->
                gridColumns = which + 1
                (binding.playerGrid.layoutManager as GridLayoutManager).spanCount = gridColumns
                dialog.dismiss()
            }
            .show()
    }

    private fun addVideoToGrid(videoId: String) {
        if (players.size >= 16) {
            Toast.makeText(requireContext(), "Maximum 16 videos allowed", Toast.LENGTH_SHORT).show()
            return
        }

        val container = LayoutInflater.from(requireContext())
            .inflate(android.R.layout.simple_list_item_1, binding.playerGrid, false)

        val playerView = YouTubePlayerView(requireContext()).apply {
            layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT
            )
        }

        val wrapper = YouTubePlayerWrapper(
            playerView,
            onReady = { player ->
                player.loadVideo(videoId, 0f)
            },
            onStateChange = { state ->
                if (state == "PLAYING") {
                    handlePlayerStarted(players.indexOf(wrapper))
                }
            }
        )

        players.add(wrapper)
        binding.playerGrid.addView(playerView)
        (binding.playerGrid.layoutManager as GridLayoutManager).spanCount = gridColumns
    }

    private fun handlePlayerStarted(index: Int) {
        val activity = requireActivity() as MainActivity
        if (activity.audioFocusManager.requestFocus()) {
            activePlayerIndex = index
            players.forEachIndexed { i, wrapper ->
                if (i != index && !wrapper.isMuted) {
                    wrapper.mute()
                }
            }
        }
    }

    fun onPictureInPictureModeChanged(isInPipMode: Boolean) {
        if (isInPipMode) {
            binding.controlsContainer.visibility = View.GONE
            binding.fabAddVideo.visibility = View.GONE
        } else {
            binding.controlsContainer.visibility = View.VISIBLE
            binding.fabAddVideo.visibility = View.VISIBLE
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        players.forEach { it.release() }
        players.clear()
        _binding = null
    }
}
