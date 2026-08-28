package com.multitube.util

object YouTubeUrlParser {

    private val patterns = listOf(
        "(?:youtube\\.com/watch\\?v=|youtu\\.be/|youtube\\.com/embed/)([a-zA-Z0-9_-]{11})",
        "^([a-zA-Z0-9_-]{11})$"
    )

    fun extractVideoId(input: String): String? {
        val trimmed = input.trim()
        for (pattern in patterns) {
            val regex = Regex(pattern)
            val match = regex.find(trimmed)
            if (match != null) {
                return match.groupValues[1]
            }
        }
        return null
    }

    fun isValidVideoId(id: String): Boolean {
        return id.matches(Regex("^[a-zA-Z0-9_-]{11}$"))
    }
}
