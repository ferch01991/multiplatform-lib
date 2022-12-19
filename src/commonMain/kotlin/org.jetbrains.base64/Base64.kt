package org.jetbrains.base64

import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.request.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json

public interface Base64Encoder {
    public fun encode(src: ByteArray): ByteArray

    public fun encodeToString(src: ByteArray): String {
        val encoded = encode(src)
        return buildString(encoded.size) {
            encoded.forEach { append(it.toInt().toChar()) }
        }
    }
}

interface SendMetrics{
    suspend fun sendMetricsSfx(name:String, value: Int): String
}

expect object SendMetricsFactory{
    fun createResponse(): SendMetrics
}

expect object Base64Factory {
    fun createEncoder(): Base64Encoder
}