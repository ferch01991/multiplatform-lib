package org.jetbrains.base64
import org.http4k.client.ApacheClient
import org.http4k.client.JavaHttpClient
import org.http4k.core.*
import org.http4k.filter.DebuggingFilters

import java.io.IOException
import java.util.*

public actual object Base64Factory {
    public actual fun createEncoder(): Base64Encoder = JvmBase64Encoder
}

public actual object SendMetricsFactory {
    public actual fun createResponse() : SendMetrics = JvmSendMetrics
}

public object JvmSendMetrics: SendMetrics {
    override fun send_metrics_sfx(name: String, value: Int): String {

        //var client : HttpHandler = JavaHttpClient()
        //val printingClient: HttpHandler = DebuggingFilters.PrintResponse().then(client)

        /*
        val response: Response = printingClient(Request(Method.POST, "https://webhook.site/b5621beb-9891-4f0d-acf3-42e63e7e5923")
            .body("{'name': ${name}, 'value': ${value}}"))
        println(response)

         */
        val client = ApacheClient()
        try {
            val curl = Request(Method.POST, "https://webhook.site/b5621beb-9891-4f0d-acf3-42e63e7e5923")
                .body("{'name': ${name}, 'value': ${value}}")
            val response = client(curl)
            println(response)
        }catch (e: IOException){
            throw Exception("Hi There!")
        }

        return "${name} ${value.toString()}"
    }
}

public object JvmBase64Encoder : Base64Encoder {
    override fun encode(src: ByteArray): ByteArray = Base64.getEncoder().encode(src)
    override fun encodeToString(src: ByteArray): String = Base64.getEncoder().encodeToString(src)
}


fun main(){
    val resp = JvmSendMetrics.send_metrics_sfx("Text from library", 12)
    println(resp)
}