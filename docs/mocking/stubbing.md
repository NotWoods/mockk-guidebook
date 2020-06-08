# Stubbing behaviour

Your Kotlin classes often depends on other objects and functions when running. When you are writing tests for your classes, you only want to test the class itself and not the dependency. MockK helps you create pretend versions of those dependencies instead of using the real versions.

Stubbing allows you to setup canned answers when functions are called. You only need to stub methods that are called by your class, and you can ignore methods that aren't run during your test.

```kotlin
interface Navigator {
  val currentLocation: String

  fun navigateTo(newLocation: String): Unit
}
```

Here is an example of how to create a stub of the `Navigator` interface.

```kotlin
import io.mockk.every
import io.mockk.mockk

val navigator = mockk<Navigator>()
every { navigator.currentLocation } returns "Home"

// prints "Home"
println(navigator.currentLocation)
```

In MockK, stubs are created by using the `mockk` and `every` functions. `mockk` creates your pretend object, and `every` lets you define canned answers for different functions on that pretend object. `every` starts a stubbing block and uses anonymous functions and [infix functions](https://kotlinlang.org/docs/reference/functions.html#infix-notation) to define the stub.

Inside the stubbing block (between the opening curly bracket `{` and closing curly bracket `}`), you write the method you want to provide a canned answer for. `{ navigator.currentLocation }` tells MockK to make a canned answer for the `currentLocation` getter on the `navigator` object.

To define what happens when the stubbed method is called, an infix function such as `returns` is used. `returns "Home"` tells MockK to always return the string `"Home"` when the `currentLocation` getter is called.

## Relaxing

If a method has not been stubbed, MockK will throw an error if it is called. This is designed to help make your tests easier to debug, as you'll know if you forgot to mock a method.

```kotlin
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
