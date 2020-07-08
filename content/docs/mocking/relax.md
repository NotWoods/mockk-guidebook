---
title: Automatically stub by relaxing
summary: >
  How to change the default `mockk` result with `relaxed`.
weight: 30
---

# Automatically stub by relaxing

If a method has not been stubbed, MockK will throw an error if it is called. This is designed to help make your tests easier to debug, as you'll know if you forgot to mock a method.

```kotlin
interface Navigator {
  val currentLocation: String

  fun navigateTo(newLocation: String): Unit
}

val navigator = mockk<Navigator>()
every { navigator.currentLocation } returns "Home"

// prints "Home"
println(navigator.currentLocation)
// throws an error
navigator.navigateTo("Store")
```

For more complicated objects, you can tell MockK to return simple values for all methods that have not been stubbed, rather than throwing. This is done by using the `relaxed` parameter when calling the `mockk` function.

```kotlin
val navigator = mockk<Navigator>(relaxed = true)
every { navigator.currentLocation } returns "Home"

// prints "Home"
println(navigator.currentLocation)
// does nothing
navigator.navigateTo("Store")
```

If desired, you can choose to only relax methods that return `Unit`. This lets you pre-stub methods that just trigger side-effects rather than returning a value.

```kotlin
val navigator = mockk<Navigator>(relaxUnitFun = true)
```
