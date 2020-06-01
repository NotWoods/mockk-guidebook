# `void` methods

Mockito's `when` method doesn't work with `void` methods. To create a stub that doesn't return anything, the `doNothing` method is used.

```kotlin
val mockedFile = mock(File::class.java)

doNothing().`when`(mockedFile).write(any())
```

MockK doesn't have any restrictions with these methods, as they [return `Unit` in Kotlin](https://kotlinlang.org/docs/reference/java-interop.html#methods-returning-void). As a result, the standard `returns` infix function can be used.

```kotlin
val mockedFile = mockk<File>()

every { mockedFile.write(any()) } returns Unit
```

MockK also provides the `justRun` method as a shorthand for `every { x } returns Unit`. For more information, see the [Returning `Unit` tip](../tips/unit.md).

```kotlin
val mockedFile = mockk<File>()

justRun { mockedFile.write(any()) }
```
