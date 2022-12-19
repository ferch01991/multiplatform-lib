import org.jetbrains.kotlin.gradle.plugin.mpp.pm20.util.archivesName

val http4kVersion = "4.34.3.1"

plugins {
    kotlin("multiplatform") version "1.7.21"
    id("maven-publish")
    id("org.jetbrains.kotlin.plugin.serialization") version "1.7.22"
    //id("application")
    //application

}
group = "com.rappi.rs-sfx"
version = "1.0.39"

apply( from = "uploadNexus.gradle")
//apply(plugin = "java")

repositories {
    mavenCentral()
    maven {
        url = uri("https://maven.pkg.jetbrains.space/public/p/ktor/eap")
    }
}

kotlin {

    jvm {
        compilations {
            val ktorVersion = "2.2.1"

            val integrationTest by compilations.creating {
                defaultSourceSet {
                    dependencies {
                        kotlin.sourceDirectories
                        //api(project)
                        //api("io.ktor:ktor-client-core-jvm:$ktorVersion")
                        implementation("io.ktor:ktor-client-core-jvm:$ktorVersion")
                        api("io.ktor:ktor-client-core:$ktorVersion")
                        api("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")
                        api("io.ktor:ktor-client-cio:$ktorVersion")
                        api("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                        implementation("io.ktor:ktor-server-core:2.2.1")
                        implementation("io.ktor:ktor-server-netty:2.2.1")
                        implementation ("io.ktor:ktor-utils-jvm:$ktorVersion")
                        implementation ("io.ktor:ktor-utils-jvm:$ktorVersion")
                        implementation("io.ktor:ktor-server-content-negotiation:$ktorVersion")

                        runtimeOnly("io.ktor:ktor-client-okhttp:2.2.1")
                        // runtimeOnly(fileTree(("libs") ))
                        /*// Java (for development only):
                        jvm("org.http4k:http4k-core:$http4kVersion")
                        api ("org.http4k:http4k-core:$http4kVersion"){
                            isTransitive = true
                            isIncludeCompileClasspath()
                        }
                        // Apache v5 (Sync):
                        api ("org.http4k:http4k-client-apache:$http4kVersion"){
                            isTransitive = true
                            isIncludeCompileClasspath()
                        }
                        // Apache v4 (Sync):
                        api ("org.http4k:http4k-client-apache4:$http4kVersion"){
                            isTransitive = true
                            isIncludeCompileClasspath()
                        }
                        // Apache v5 (Async):
                        api ("org.http4k:http4k-client-apache-async:$http4kVersion"){
                            isTransitive = true
                            isIncludeCompileClasspath()
                        }
                        // Apache v4 (Async):
                        api ("org.http4k:http4k-client-apache4-async:$http4kVersion"){
                            isTransitive = true
                            isIncludeCompileClasspath()
                        }
                        // Fuel (Sync + Async):
                        api ("org.http4k:http4k-client-fuel:$http4kVersion"){
                            isTransitive = true
                            isIncludeCompileClasspath()
                        }
                        // Jetty (Sync + Async + WebSocket):
                        api ("org.http4k:http4k-client-jetty:$http4kVersion"){
                            isTransitive = true
                            isIncludeCompileClasspath()
                        }

                        // OkHttp (Sync + Async):
                        api ("org.http4k:http4k-client-okhttp:4.33.3.0")
                        // Websocket:
                        api ("org.http4k:http4k-client-websocket:$http4kVersion"){
                            isTransitive = true
                        }
                        implementation ("org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.7.21")
                        implementation("com.squareup.okhttp3:okhttp:4.10.0")*/
                    }
                }
            }
            integrationTest.allKotlinSourceSets
            val integration by compilations.creating {
                withJava()
            }

        }
        tasks.create<JavaExec>("run"){
            main = "${workingDir}/jvmMain/kotlin/org/jetbrains/base64"
            classpath = objects.fileCollection().from(
                tasks.named("compileKotlinJvm"),
                configurations.named("jvmRuntimeClasspath")
            )
        }

        /*tasks.named<Jar>("jar") {
            archiveClassifier.set("")
        }*/

        withJava()
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }

    /*js(BOTH) {
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }*/
    /*val hostOs = System.getProperty("os.name")
    val isMingwX64 = hostOs.startsWith("Windows")

    val nativeTarget = when {
        hostOs == "Mac OS X" -> macosX64("native")
        hostOs == "Linux" -> linuxX64("native")
        isMingwX64 -> mingwX64("native")
        else -> throw GradleException("Host OS is not supported in Kotlin/Native.")
    }*/

    sourceSets {
        val ktorVersion = "2.2.1"
        val commonMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-core-jvm:$ktorVersion"){
                    isTransitive = true
                }
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4"){
                    isTransitive = true
                }
                api("io.ktor:ktor-client-cio:$ktorVersion"){
                    isTransitive = true
                }
                api("io.ktor:ktor-client-core:$ktorVersion"){
                    isTransitive = true
                }
                api("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion"){
                    isTransitive = true
                }
                implementation("io.ktor:ktor-server-core:2.2.1"){
                    isTransitive = true
                }
                implementation("io.ktor:ktor-server-netty:2.2.1"){
                    isTransitive = true
                }
                implementation ("io.ktor:ktor-utils-jvm:$ktorVersion")
                implementation("io.ktor:ktor-server-content-negotiation:$ktorVersion")

                runtimeOnly("io.ktor:ktor-client-okhttp:2.2.1")
                //api(project)
                kotlin.sourceDirectories
                //runtimeOnly(fileTree(("libs") ))
                /*implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.7.21")
                implementation("com.squareup.okhttp3:okhttp:4.10.0")
                // Java (for development only):
                api ("org.http4k:http4k-core:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Apache v5 (Sync):
                api ("org.http4k:http4k-client-apache:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Apache v4 (Sync):
                api ("org.http4k:http4k-client-apache4:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                    isIncludeCompileClasspath()
                }
                // Apache v5 (Async):
                api ("org.http4k:http4k-client-apache-async:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Apache v4 (Async):
                api ("org.http4k:http4k-client-apache4-async:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Fuel (Sync + Async):
                api ("org.http4k:http4k-client-fuel:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Jetty (Sync + Async + WebSocket):
                api ("org.http4k:http4k-client-jetty:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }

                // OkHttp (Sync + Async):
                api ("org.http4k:http4k-client-okhttp:4.33.3.0")
                // Websocket:
                api ("org.http4k:http4k-client-websocket:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }*/

            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jvmMain by getting {
            dependencies {
                kotlin.sourceDirectories
                implementation("io.ktor:ktor-client-core-jvm:$ktorVersion")
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")
                api("io.ktor:ktor-client-cio:$ktorVersion")
                api("io.ktor:ktor-client-core:$ktorVersion")
                api("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation("io.ktor:ktor-server-core:2.2.1")
                implementation("io.ktor:ktor-server-netty:2.2.1")
                implementation ("io.ktor:ktor-utils-jvm:$ktorVersion")
                implementation ("io.ktor:ktor-utils-jvm:$ktorVersion")
                implementation("io.ktor:ktor-server-content-negotiation:$ktorVersion")

                runtimeOnly("io.ktor:ktor-client-okhttp:2.2.1")
                //api(project)
                //runtimeOnly(fileTree(("libs") ))
                /*implementation ("org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.7.21")
                implementation("com.squareup.okhttp3:okhttp:4.10.0")
                // Java (for development only):
                api ("org.http4k:http4k-core:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Apache v5 (Sync):
                api ("org.http4k:http4k-client-apache:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Apache v4 (Sync):
                api ("org.http4k:http4k-client-apache4:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Apache v5 (Async):
                api ("org.http4k:http4k-client-apache-async:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Apache v4 (Async):
                api ("org.http4k:http4k-client-apache4-async:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Fuel (Sync + Async):
                api ("org.http4k:http4k-client-fuel:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // Jetty (Sync + Async + WebSocket):
                api ("org.http4k:http4k-client-jetty:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }
                // OkHttp (Sync + Async):
                api ("org.http4k:http4k-client-okhttp:4.33.3.0")
                // Websocket:
                api ("org.http4k:http4k-client-websocket:$http4kVersion"){
                    isTransitive = true
                    isIncludeCompileClasspath()
                }*/


            }
        }

        /*val jvmTest by getting
        val jsMain by getting {
            dependencies{
                implementation("io.ktor:ktor-client-core-js:$ktorVersion")
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")
                api("io.ktor:ktor-client-cio:$ktorVersion")
            }
        }
        val jsTest by getting
        val nativeMain by getting
        val nativeTest by getting*/

    }

    targets.all{
        compilations.all{
            kotlinOptions{
                allWarningsAsErrors = true
                jvm()
            }
        }

    }

}
