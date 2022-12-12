package org.jetbrains.base64

import kotlinx.browser.window

public actual object Base64Factory {
    public actual fun createEncoder(): Base64Encoder = JsBase64Encoder
}

public object JsBase64Encoder : Base64Encoder {
    override fun encode(src: ByteArray): ByteArray {
        val string = src.decodeToString()
        val encodedString = window.btoa(string)
        return encodedString.encodeToByteArray()
    }
}

public actual object SendMetricsFactory {
    public actual fun createResponse() : SendMetrics = JvmSendMetrics
}

public object JvmSendMetrics: SendMetrics {
    override fun send_metrics_sfx(name: String, value: Int): String {
        return "Ya esta enviando"
    }
}