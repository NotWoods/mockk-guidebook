---
title: "`argThat`"
summary: >
  Porting custom matchers with `argThat`
weight: 50
---

# `argThat`

The `argThat` argument matcher in Mockito lets you create advanced argument matchers that run a function on passed arguments, and checks if the function returns `true`.

If you have a complicated class that can't be easily checked using `.equals()`, a custom matcher can be a useful tool.

```kotlin
`when`(
  mockedCar.drive(argThat { engine -> engine.dieselEngine })
).thenReturn(true)
```

MockK has a similar [argument matcher called `match`](../matching/custom.md). Just like `argThat`, you can pass a lambda in that returns a boolean.

```kotlin
every {
  mockedCar.drive(match { engine -> engine.dieselEngine })
} returns true
```

MockK also lets you use coroutines with `match`. Just replace the function with `coMatch`, then pass a suspend function lambda in. See [Coroutines and suspend functions](../mocking/coroutines.md) for more details.
