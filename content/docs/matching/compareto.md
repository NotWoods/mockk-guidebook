---
title: Comparables
summary: >
  Matching smaller numbers, bigger numbers, and `more`.
weight: 80
---

# Comparables

- `less`
- `more`
- `range`
- `cmpEq`

MockK provides a few argument matchers for numbers and comparable objects. These matches all use the `compareTo` function to compare objects.

## `more`

Checks if the argument is more than the value given to the matcher. Valid arguments will return a negative number when compared to the matcher value.

```kotlin
assertTrue(value.compareTo(arg) < 0)
```

## `less`

Checks if the argument is less than the value given to the matcher. Valid arguments will return a positive number when compared to the matcher value.

```kotlin
assertTrue(value.compareTo(arg) > 0)
```

## `cmpEq`

Checks if the argument is equal to the value given to the matcher, according to the `compareTo` function. Valid arguments will return 0 when compared to the matcher value.

```kotlin
assertTrue(value.compareTo(arg) == 0)
```

## `range`

TODO
