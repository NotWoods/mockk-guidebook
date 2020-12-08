---
title: Create more complicated answers for stubs
summary: >
  Using `answers` when `returns` just isn't enough.
weight: 120
---

Most [stubs](./stubbing.md) will use `returns` to always return the same value when the corresponding method is called. Sometimes, the method you're trying to mock may be more complicated and require a more advanced stub.

If you want to change the result of a mocked method depending on its arguments, run additional code whenever a method is called, or just print out "Hello world" when a mock is used, `answers` is the tool you'll want to use.

`answers` takes the place of `returns` after an `every` call. When using `returns`, it should be followed by a value to return. When using `answers`, it should be followed by a lambda function that is run when the mocked method is called.

```kotlin
import io.mockk.every
import io.mockk.mockk

val navigator = mockk<Navigator>()
every { navigator.currentLocation } returns "Home"
every { navigator.currentLocation } answers { "Home" }
```

## Side effects

A function has "side effects" if it does something other than just returning a value, such as logging or mutating some outside state. `answers` lets you model side effects by putting additional statements inside its lambda function.

```kotlin
every { navigator.currentLocation } answers {
  println("Hello world!")

  "Work"
}

// prints "Hello world!"
val location = navigator.currentLocation
// prints "Work"
println(location)
```

## Answer scope

Inside of the `answers` lambda function, you can access information about the mocked method and how it was called. You can then use this to adjust the resulting answer.

```kotlin
every { navigator.navigateTo(any()) } answers {
  val destination = firstArg<String>()
  throw IllegalStateException("Can't reach $destination")
}
```

These values are properties on the [`MockKAnswerScope`](https://mockk.io/#answer-scope) class. The scope is passed as a [receiver object](https://kotlinlang.org/docs/reference/lambdas.html#function-literals-with-receiver), allowing variables to be called from the implicit `this` scope.

### Individual arguments

Single arugments can be obtained using `firstArg()`, `secondArg()`, `thirdArg()`, and `lastArg()`. Other arguments can be obtained with `arg(n)`, where `n` is the index of the argument. For example, `arg(3)` would return the fourth argument.

Arguments do not have static type checking. Instead, the type is casted automatically using generic types.

```kotlin
every { calculator.add(any<Int>(), any<Int>()) } answers {
  // tries to cast the second argument to a string
  println(secondArg<String>())
  0
}
```

The above code will compile, but when the test is run a `ClassCastException` will be thrown because you cannot cast an `Int` to a `String`.

### All arguments

The entire list of arguments can be obtained using `args`. `args` has the type `List<Any?>`, so you will need to manually cast values in the list if you want to work with them.

```kotlin
every { calculator.add(any<Int>(), any<Int>()) } answers {
  val numbers = args as List<Int>
  numbers.sum()
}

// prints "4"
println(calculator.add(2, 2))
```

If you only need to know the length of `args`, aka the number of arguments, you can use `nArgs`.

TODO `call`, `invocation`, `matcher`, `self`, `method`, `captured`, `lambda`, `coroutine`, `nothing`, `fieldValue`, `fieldValueAny`, `value`, `valueAny`.
