---
title: "`any*`"
summary: >
  The "any" family of matchers: `any`, `anyBoolean`, `anyByte`, `anyChar`, `anyDouble`, `anyFloat`, `anyInt`, `anyLong`, `anyObject`, `anyShort`, and `anyString`.
weight: 30
---

# `any*`

When creating a stub or verifying a call, Mockito provides many different argument matchers. Besides `eq`, the most commonly used are the "any" family: `any`, `anyBoolean`, `anyByte`, `anyChar`, `anyDouble`, `anyFloat`, `anyInt`, `anyLong`, `anyObject`, `anyShort`, and `anyString`. In MockK, these variations are all replaced by a single `any` matcher.

```kotlin
// TODO example class that takes object, int, string parameters. Show stub & verify for both libs.
```

If you want to check for any null value, or any not-null value, the `isNull` matcher can be used.

TODO: `isNull()`, `isNull(inverse = true)`

TODO: `ofType`
