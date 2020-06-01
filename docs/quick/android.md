# Android Quickstart

MockK works great with Android and allows you to mock objects in both your Android unit tests and instrumented tests. MockK can handle mocking `Context`, static functions, and more to help you test your Android code.

To install MockK, all you need to do is add it as a dependency in your module's Gradle file. In most Android Studio projects, this file is located at _app/build.gradle_. Once you open the file, search for the `dependencies` block and add a new line.

```groovy
dependencies {
  ...
  testImplementation "io.mockk:mockk:$mockk_version"
}
```

`$mockk_version` should be replaced with the version of MockK you wish to use. [The latest version is listed on the Maven website](https://search.maven.org/artifact/io.mockk/mockk).

After syncing your project with Gradle files, MockK will be avaliable for use in your unit tests (located in _app/src/test_). To use MockK in your instrumented tests (located in _app/src/androidTest_), an additional line is needed in your module's Gradle file.

```groovy
dependencies {
  ...
  androidTestImplementation "io.mockk:mockk-android:$mockk_version"
}
```

Unlike unit tests, instrumented tests are run live on an Android device or emulator.

TODO add differences between versions
