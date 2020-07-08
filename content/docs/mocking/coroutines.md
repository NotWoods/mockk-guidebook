---
title: Coroutines and suspend functions
---

# Coroutines and suspend functions

As MockK uses function literals to create stubs, small changes are needed to stub suspend functions. MockK provides functions prefixed with `co` as equivalents to other functions, such as `coEvery` and `coAnswers`.

```kotlin
val mockedFile = mockk<File>()

coEvery { mockedFile.readAsync() } returns "hello world"
coEvery { mockedFile.writeAsync(any()) } coAnswers { call ->
  doAsyncWork()
  Unit
}
```
