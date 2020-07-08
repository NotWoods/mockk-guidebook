---
title: Create a mock
summary: >
  The similarities and differences in creating mocks between Mockito and MockK.
weight: 1
---

# Create a mock

The syntax to create a mock is very similar in Mockito and MockK. However, the behaviour is slightly different.

```kotlin
// Mockito
val mockedFile = mock(File::class.java)

mockedFile.read() // does nothing
```

```kotlin
// MockK
val mockedFile = mockk<File>()

mockedFile.read() // throws because the method was not stubbed
```

Mocked objects in MockK resemble Mockito's [`STRICT_STUBS`](https://javadoc.io/static/org.mockito/mockito-core/3.3.3/org/mockito/quality/Strictness.html#STRICT_STUBS) mode by default. If a method is not stubbed, then it will throw. This makes it easier to catch methods that are being called when you do not expect it, or when methods are being called with different arguments.

Mockito's default lenient behaviour can be replicated with the `relaxed` setting. Relaxed mocks will have default stubs for all methods.

```kotlin
// MockK
val mockedFile = mockk<File>(relaxed = true)

mockedFile.read() // will not throw
```

If desired, you can choose to only relax methods that return `Unit`.

```kotlin
// MockK
val mockedFile = mockk<File>(relaxUnitFun = true)

mockedFile.read() // returns Unit, will not throw
mockedFile.exists() // throws as the method returns Boolean
```
