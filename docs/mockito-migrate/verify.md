# `verify`

Verifying that a method was called has similar syntax in Mockito and MockK. MockK uses inline functions and keyword arguments in place of Mockito's verification modes.

```kotlin
// Mockito
val mockedFile = mock(File::class.java)

mockedFile.read()
verify(mockedFile).read()
```

```kotlin
// MockK
val mockedFile = mockk<File>()

mockedFile.read()
verify { mockedFile.read() }
```

## Verification Mode

Mockito lets extra arguments such as `never()` be passed to verify in the second parameter, all of which implement a `VerificationMode` interface. MockK has equivalents for these modes as keyword arguments in `verify`.

### `atLeast`/`atLeastOnce`

```kotlin
// Mockito
verify(mockedFile, atLeast(3)).read()
verify(mockedFile, atLeastOnce()).write()
```

```kotlin
// MockK
verify(atLeast = 3) { mockedFile.read() }
verify(atLeast = 1) { mockedFile.write() }
```

### `atMost`/`atMostOnce`

```kotlin
// Mockito
verify(mockedFile, atMost(3)).read()
verify(mockedFile, atMostOnce()).write()
```

```kotlin
// MockK
verify(atMost = 3) { mockedFile.read() }
verify(atMost = 1) { mockedFile.write() }
```

### `never`/`times`

```kotlin
// Mockito
verify(mockedFile, times(3)).read()
verify(mockedFile, never()).write()
```

```kotlin
// MockK
verify(exactly = 3) { mockedFile.read() }
verify(exactly = 0) { mockedFile.write() }
```

### `timeout`

```kotlin
// Mockito
verify(mockedFile, timeout(100)).readAsync()
```

```kotlin
// MockK
verify(timeout = 100) { mockedFile.readAsync() }
```

## `verifyNoInteractions`

```kotlin
// Mockito
verifyNoInteractions(mockOne)
verifyNoInteractions(mockTwo, mockThree)
```

```kotlin
// MockK
verify { mockOne wasNot Called }
verify { listOf(mockTwo, mockThree) wasNot Called }
```

## `verifyNoMoreInteractions`

```kotlin
// Mockito
verifyNoMoreInteractions(mockOne, mockTwo)
```

```kotlin
// MockK
confirmVerified(mockOne, mockTwo)
```

## Coroutines

As MockK uses function literals to create stubs, small changes are needed to verify suspend functions. MockK provides functions prefixed with `co` as equivalents to other functions, such as `coVerify`. See [Coroutines and suspend functions](../matching/coroutines.md) for more details.

```kotlin
val mockedFile = mockk<File>()

coVerify { mockedFile.readAsync() }
```
