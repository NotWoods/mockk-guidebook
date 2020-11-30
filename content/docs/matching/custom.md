---
title: Custom matching functions
summary: >
  (TODO) Adding additional matchers with the `match` function.
weight: 50
methods:
  - match
  - coMatch
  - matchNullable
  - coMatchNullable
---

# Custom matching functions

When built-in argument matchers aren't sufficient, custom matchers can be written. A custom argument matcher simply needs to take in the argument as a parameter and return `true` if it matches, and `false` if it does not. This custom boolean function can then be passed to the special `match` function.

```kotlin
every {
  mockedCar.drive(match { engine ->
    engine.type === "Diesel"
  })
} returns true
```

If the argument is nullable, a variant called `matchNullable` can be used instead.

```kotlin
every {
  mockedCar.drive(matchNullable { engine ->
    engine != null && engine.type === "Diesel"
  })
} returns true
```

## `Matcher` subclass

TODO extend `Matcher<T>`

## Inline extension function helper

TODO `MockKMatcherScope` extension function
