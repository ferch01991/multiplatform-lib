package org.jetbrains.base64

public interface Base64Encoder {
    public fun encode(src: ByteArray): ByteArray

    public fun encodeToString(src: ByteArray): String {
        val encoded = encode(src)
        return buildString(encoded.size) {
            encoded.forEach { append(it.toInt().toChar()) }
        }
    }
}

public interface SendMetrics{
    public fun send_metrics_sfx(name:String, value: Int): String
}

public expect object SendMetricsFactory{
    public fun createResponse(): SendMetrics
}

public expect object Base64Factory {
    public fun createEncoder(): Base64Encoder
}