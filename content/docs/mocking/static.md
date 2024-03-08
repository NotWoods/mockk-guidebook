---
title: Mock singleton objects and static methods
summary: >
  Advanced static mocking with `mockkStatic` and `mockkObject`.
weight: 70
---

# Mock singleton objects and static methods

## Mocking objects

When you need a singleton in Kotlin, you can use an [`object`](https://kotlinlang.org/docs/tutorials/kotlin-for-py/objects-and-companion-objects.html). These specialized classes will only ever have one instance, so you can't mock them in the usual manner. Instead, MockK provides specialized functions to create object mocks.

```kotlin
object FeatureFlags {
  val featureEnabled = true
}

mockkObject(FeatureFlags)
every { FeatureFlags.featureEnabled } returns false

// prints false
println(FeatureFlags.featureEnabled)
```

Despite the name, object mocks behave more like [spies](./spy.md). If a method is not stubbed, then the real method will be called. This differs from regular mocks, where a method will either throw or do nothing if it is not stubbed.

```kotlin
class Calculator1 {
  fun add(a: Int, b: Int): Int {
    return a + b
  }
}

object Calculator2 {
  fun add(a: Int, b: Int): Int {
    return a + b
  }
}

val calculator1 = mockk<Calculator1>()
mockkObject(Calculator2)

// throws because the method was not stubbed
println(calculator1.add(2, 2))

// returns the result from the real method
println(Calculator2.add(2, 2))
```

This approach works with any Kotlin object, which includes [`companion object`s](https://kotlinlang.org/docs/tutorials/kotlin-for-py/objects-and-companion-objects.html#companion-objects) and [`enum class`](https://kotlinlang.org/docs/reference/enum-classes.html) elements.

## Mocking static methods

Sometimes you may end up working with Java code in your tests, which can have static methods.

```java
package com.name.app;

class Writer {
  public static File getFile(String path) {
    return new File(path);
  }
}
```

Just like singleton objects, there will only ever be one version of static methods, so you cannot mock them in the usual manner. Again, MockK provides specialized functions to mock static methods.

```kotlin
mockkStatic("com.name.app.Writer")
```

Rather than passing a reference to the class, you pass the class name as a string. You can also choose to pass in a reference to the class, and MockK will figure out the class name.

```kotlin
mockkStatic(Writer::class)
```

Like object mocks, static mocks behave like [spies](./spy.md). The real method will be called if the method is not stubbed.

## Unmocking

If you'd like to revert back to the real object, you can use the `unmockkObject` method. This removes any stubbed behaviour you may have added.

```kotlin
object Calculator {
  fun add(a: Int, b: Int): Int {
    return a + b
  }
}

mockkObject(Calculator)
every { Calculator.add(any(), any()) } returns 10

// prints 10
println(Calculator.add(2, 2))

unmockkObject(Calculator)

// prints 4
println(Calculator.add(2, 2))
```
