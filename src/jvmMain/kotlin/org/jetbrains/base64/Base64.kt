package org.jetbrains.base64
import io.ktor.client.HttpClient
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import java.util.Base64



actual object Base64Factory {
    actual fun createEncoder(): Base64Encoder = JvmBase64Encoder
}

actual object SendMetricsFactory {
    actual fun createResponse() : SendMetrics = JvmSendMetrics
}

object JvmSendMetrics: SendMetrics {
    override suspend fun sendMetricsSfx(name: String, value: Int): String {
        val client = HttpClient()
        val response2: HttpResponse = client.post("https://webhook.site/b5621beb-9891-4f0d-acf3-42e63e7e5923"){
            setBody("'name': $name, 'value': $value")
        }
        client.close()

        return response2.status.toString()
    }

        /*
        val client = ApacheClient()
        try {
            val curl = Request(Method.POST, "https://webhook.site/b5621beb-9891-4f0d-acf3-42e63e7e5923")
                .body("{'name': ${name}, 'value': ${value}}")
            val response = client(curl)
            println(response)
        }catch (e: IOException){
            throw Exception("Hi There!")
        }
         */


      //  return "${name} ${value.toString()}"
    //}

}

object JvmBase64Encoder : Base64Encoder {
    override fun encode(src: ByteArray): ByteArray = Base64.getEncoder().encode(src)
    override fun encodeToString(src: ByteArray): String = Base64.getEncoder().encodeToString(src)
}


suspend fun main(){
    val resp = JvmSendMetrics.sendMetricsSfx("en el main", 76)
    println(resp.toString())
}