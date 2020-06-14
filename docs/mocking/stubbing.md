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
every { navigator.navigateTo("Park") } throws IllegalStateException("Can't reach the park")

// prints "Home"
println(navigator.currentLocation)

// throws an IllegalStateException
navigator.navigateTo("Park")
```

In MockK, stubs are created by using the `mockk` and `every` functions. `mockk` creates your pretend object, and `every` lets you define canned answers for different functions on that pretend object. `every` starts a stubbing block and uses anonymous functions and [infix functions](https://kotlinlang.org/docs/reference/functions.html#infix-notation) to define the stub.

Inside the stubbing block (between the opening curly bracket `{` and closing curly bracket `}`), you write the method you want to provide a canned answer for. `{ navigator.currentLocation }` tells MockK to make a canned answer for the `currentLocation` getter on the `navigator` object.

To define what happens when the stubbed method is called, an answer function such as `returns` is used. `returns "Home"` tells MockK to always return the string `"Home"` when the `currentLocation` getter is called.

Instead to returning successful values, stubbed methods can throw errors. `throws` indicates that the following value should be an exception to throw, rather than a value to return. When the stubbed method is called in your tests, it will always throw the given exception instance.
