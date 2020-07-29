---
title: Verify that functions were called
summary: >
  Using `verify` to check that a function was used.
weight: 20
---

# Verify that functions were called

When using mocked dependencies, you usually want to test that your code calls the correct functions. In MockK, this is accomplished using the `verify` function.

Using `verify` to verify that a function was called looks a lot like using `every` for stubbing. A simple example is to call a method and immediately check that it was called.

```kotlin
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify

val navigator = mockk<Navigator>()
every { navigator.navigateTo(any()) } returns Unit

navigator.navigateTo("Park")
verify { navigator.navigateTo("Park") }
```

Similar to [stubbing with `every`](../stubbing.md), `verify` starts a verification block and uses anonymous functions and [infix functions](https://kotlinlang.org/docs/reference/functions.html#infix-notation) to define what will be verified. `verify` supports the same [argument matchers](../matching) as `every`, along with a few [additional matchers](../matching/with.md).

Inside the verification block (between the opening curly bracket `{` and closing curly bracket `}`), you write the method you want to verify. `{ navigator.navigateTo("Park") }` tells MockK to check if the `navigateTo` method on the `navigator` object was called with the argument `"Park"`.

## Verifying dependencies

In the previous simple example, verification isn't very helpful as it just checks that the previous line ran. Verification becomes more useful when you are testing other classes, that depend on mocked instances. Let's start testing a button.

```kotlin
class Button {
  private var clickListener: (() -> Unit)? = null

  fun setOnClickListener(listener: () -> Unit) {
    clickListener = listener
  }

  fun performClick() {
    clickListener?.invoke()
  }
}

class NavigationView(
  private val navigator: Navigator
) {

  val goToParkButton = Button()

  init {
    goToParkButton.setOnClickListener {
      navigator.navigate("Park")
    }
  }
}
```

A test for the above `NavigationView` class should check that clicking the `goToParkButton` tells the `navigator` to go to the park. If the navigator doesn't record where it goes, then it can be difficult to check that the button does its job correctly. This is a scenario where MockK can shine.

```kotlin
// Mock the dependency needed for navigationView
val navigator = mockk<Navigator>()
every { navigator.navigateTo(any()) } returns Unit

// Create the navigation view to test
val navigationView = NavigationView(navigator)

// Test the button in navigation view
navigationView.goToParkButton.performClick()
verify { navigator.navigateTo("Park") }
```

This test ensures that the button tells the navigator to go where we expect. If the `NavigationView` view gets changed in the future, the test will throw if this expectation is broken.

```diff
    goToParkButton.setOnClickListener {
-     navigator.navigate("Park")
+     navigator.navigate("Parka")
    }
```

```kotlin
navigationView.goToParkButton.performClick()
// Throws as navigateTo("Park") was never called.
// MockK will mention in the error that navigateTo("Parka") was called.
verify { navigator.navigateTo("Park") }
```

## Verifying that any mock functions is never called
```kotlin
verify { navigator wasNot Called }
```

## Verifying that a function is never called
```kotlin
verify(inverse = true) { navigator.navigateTo("Park") }
verify(exactly = 0) { navigator.navigateTo("Park") }
```

## Verifying a function is called a certain number of times

TODO: `exactly`

### Using a range

TODO: `atLeast`, `atMost`

## Verifying multiple functions

TODO: `ordering`, `verifyAll`,

## Confirming all calls were verified

TODO: `confirmVerified`, `excludeRecords`
