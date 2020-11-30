---
title: Coroutines and suspend functions
summary: >
  Using `coEvery`, `coVerify`, and more to mock coroutines.
weight: 50
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

The full list of methods with coroutine equivalents is:

- [`coEvery`](./stubbing.md)
- [`coJustRun`](../tips/unit.md)
- [`coVerify`](./verify.md)
- [`coVerifyAll`](./verify.md)
- [`coVerifyOrder`](./verify.md)
- [`coVerifySequence`](./verify.md)
- [`coExcludeRecords`](../tips/exclude.md)
- [`coMatch`](../matching/custom.md)
- [`coMatchNullable`](../matching/custom.md)
- [`coWithArg`](../matching/with.md)
- [`coWithNullableArg`](../matching/with.md)
- [`coAnswers`](./stubbing.md)
- `coAndThen`
- `coInvoke`
