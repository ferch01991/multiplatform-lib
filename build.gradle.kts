
val http4kVersion = "4.34.3.1"

plugins {
    kotlin("multiplatform") version "1.7.21"
    id("maven-publish")

}

group = "com.rappi"
version = "1.0.6"

repositories {
    mavenCentral()
    mavenLocal()
}


kotlin {
    jvm {
        compilations {

            val integrationTest by compilations.creating {
                defaultSourceSet {
                    dependencies {
                        implementation ("org.http4k:http4k-core:$http4kVersion")
                        implementation ("org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.7.21")
                        implementation ("org.http4k:http4k-client-apache:$http4kVersion")

                    }
                }
            }
            integrationTest.allKotlinSourceSets
        }
        tasks.create<JavaExec>("run"){
            main = "${workingDir}/jvmMain/kotlin/org.jetbrains.base64"
            classpath = objects.fileCollection().from(
                tasks.named("compileKotlinJvm"),
                configurations.named("jvmRuntimeClasspath")
            )
        }
        withJava()
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }
    js(BOTH) {
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
    val hostOs = System.getProperty("os.name")
    val isMingwX64 = hostOs.startsWith("Windows")
    val nativeTarget = when {
        hostOs == "Mac OS X" -> macosX64("native")
        hostOs == "Linux" -> linuxX64("native")
        isMingwX64 -> mingwX64("native")
        else -> throw GradleException("Host OS is not supported in Kotlin/Native.")
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                api("org.http4k:http4k-core:$http4kVersion")
                implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.7.21")
                api("org.http4k:http4k-client-apache:$http4kVersion")

            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jvmMain by getting {
            dependencies {
                api ("org.http4k:http4k-core:$http4kVersion")
                implementation ("org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.7.21")
                api ("org.http4k:http4k-client-apache:$http4kVersion")

            }
        }
        val jvmTest by getting
        val jsMain by getting
        val jsTest by getting
        val nativeMain by getting
        val nativeTest by getting
    }

    targets.all{
        compilations.all{
            kotlinOptions{
                allWarningsAsErrors = true
            }
        }
    }

}