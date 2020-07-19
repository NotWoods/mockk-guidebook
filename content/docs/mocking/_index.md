---
title: Mocking
summary: >
  Mocking start with one call, the `mockk` function.
---

# Mocking

Mocking start with one call, the `mockk` function. This function takes in a class and returns a fake version of it, where all functions are present but will throw when called.

```kotlin
import io.mockk.mockk

val mockedFile = mockk<File>()
```

{{<section>}}
