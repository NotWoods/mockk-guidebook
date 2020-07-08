---
title: Mock top-level and extension functions
summary: >
  Mocking top-level functions with `mockkStatic`.
weight: 80
---

# Mock top-level and extension functions

## Top-level functions

Kotlin lets you write functions that don't belong to any class or object, called [top-level functions](https://kotlinlang.org/docs/reference/functions.html#function-scope). These calls are translated to static methods in Java, and a special Java class is generated to hold the functions. These top-level functions can be mocked using [`mockkStatic`](./static.md), but you need to figure out the class name of this generated Java class.

### Finding the class name

TODO

## Extension functions

Depending on where an extension function is located, it may correspond to a top-level function or a class member. If placed inside a class, the extension function is attached to that class and can be mocked using the `with` method.

```kotlin
// TODO val mock = ...

with (mock) {
  every { any<Type>().extensionFunction() } returns "result"
}
```

If the extension function is inside an object, the code is similar but the object needs to be mocked first.

When the extension function is in the top-level of a file, it can be mocked like other top-level functions using `mockkStatic`.
