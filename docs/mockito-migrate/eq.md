# `eq`

By default, Mockito verifies argument values by using the `equals()` method, which corresponds to `==` in Kotlin.

```kotlin
verify(mock.containsAll(listOf("a", "b"), true))
```

However, once argument matchers like `any()` are used, then the `eq` argument matcher must be used for literal values.

```kotlin
verify(mock.containsAll(eq(listOf("a", "b")), anyBoolean()))
```

In MockK, `eq` is always used as the default argument matcher. You can mix literal values with `any` without issue.

```kotlin
verify { mock.containsAll(listOf("a", "b", any())) }
```

TODO:
- `refEq`
- `same`
