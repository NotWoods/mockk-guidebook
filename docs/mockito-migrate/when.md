# `when` and `do*`

Mockito provides two similar approaches for stubbing behaviour on a mock: the `when` method and the `do*` family of methods.

Most stubs in Mockito are written with `when` at the beginning of the line, following the format "**when** the method is called **then** return something". Stubs written with the `when` method look like this:

```kotlin
val mockedFile = mock(File::class.java)

`when`(mockedFile.read()).thenReturn("hello world")
```

Sometimes this syntax cannot be used in Mockito, so an alternative approach is avaliable. `doReturn` and the related `doThrow`, `doAnswer`, `doNothing`, and `doCallRealMethod` methods are used for void methods, spies, and other occasions where the `when` method cannot be used. Stubs written with the `do*` family of methods look like this:

```kotlin
val mockedFile = mock(File::class.java)

doReturn("hello world").`when`(mockedFile).read()
```

In MockK, all [stubs](../mocking/stubbing.md) can be written with the `every` method. `every` starts a stubbing block and uses anonymous functions and [infix functions](https://kotlinlang.org/docs/reference/functions.html#infix-notation) to define the stub. The syntax looks like this:

```kotlin
val mockedFile = mockk<File>()

every { mockedFile.read() } returns "hello world"
```

MockK provides alternatives for many types of answers that Mockito supports for stubbing.

## `thenReturn`/`doReturn`

Returning a value is probably the most common stub to create. In Mockito, the syntax can look like one of two approaches:

```kotlin
val mockedFile = mock(File::class.java)

`when`(mockedFile.read()).thenReturn("hello world")
doReturn("hello world").`when`(mockedFile).read()
```

In MockK, an infix function is used instead.

```kotlin
val mockedFile = mockk<File>()

every { mockedFile.read() } returns "hello world"
```

## `thenThrow`/`doThrow`

Rather than returning values, stubs can throw errors. Mocktio lets exceptions be specified with one of two approaches:

```kotlin
val mockedFile = mock(File::class.java)

`when`(mockedFile.read()).thenThrow(RuntimeException())
doThrow(RuntimeException()).`when`(mockedFile).read()
```

MockK provides the `throws` infix method to throw in stubs.

```kotlin
val mockedFile = mockk<File>()

every { mockedFile.read() } throws RuntimeException()
```

## `doNothing`

See [Migrating from Mockito: `void` methods](./void.md)

## `thenAnswer`/`then`/`doAnswer`

Mockito allows arbitary callbacks to be used for stubs with the `Answer` interface. `Answer` only contains a single method, so Kotlin allows a function literal to be used instead through [SAM conversion](https://kotlinlang.org/docs/reference/java-interop.html#sam-conversions).

```kotlin
val mockedFile = mock(File::class.java)

`when`(mockedFile.write(any())).thenAnswer { invocation ->
  println("called with arguments: " + invocation.arguments.joinToString())
  Unit
}
`when`(mockedFile.write(any())).then { invocation ->
  println("called with arguments: " + invocation.arguments.joinToString())
  Unit
}
doAnswer { invocation ->
  println("called with arguments: " + invocation.arguments.joinToString())
  Unit
}.`when`(mockedFile).write(any())
```

MockK provides an equivalent infix function that also uses function literals.

```kotlin
val mockedFile = mockk<File>()

every { mockedFile.write(any()) } answers { call ->
  println("called with arguments: " + call.invocation.args.joinToString())
  Unit
}
```

## Consecutive calls

Mocktio additionally lets different return values be stubbed for the same method call, such as for mocking an iterator.

```kotlin
val mockedFile = mock(File::class.java)

// Chain multiple calls
`when`(mockedFile.read()).thenReturn("read 1").thenReturn("read 2").thenReturn("read 3")
// Shorthand
`when`(mockedFile.read()).thenReturn("read 1", "read 2", "read 3")
doReturn("read 1", "read 2", "read 3").`when`(mockedFile).read()
// Use different answer types
`when`(mockedFile.read())
  .thenReturn("successful read")
  .thenThrow(RuntimeException())
```

Additional answers is supported in MockK using various infix functions.

```kotlin
val mockedFile = mockk<File>()

// Chain multiple calls
every { mockedFile.read() } returns "read 1" andThen "read 2" andThen "read 3"
// Shorthand using a list
every { mockedFile.read() } returnsMany listOf("read 1", "read 2", "read 3")
every { mockedFile.read() } andThenMany listOf("read 1", "read 2", "read 3")
// Use different answer types
every { mockedFile.read() } returns "successful read" andThenThrows RuntimeException()
```

## Coroutines

As MockK uses function literals to create stubs, small changes are needed to stub suspend functions. MockK provides functions prefixed with `co` as equivalents to other functions, such as `coEvery` and `coAnswers`. See [Coroutines and suspend functions](../matching/coroutines.md) for more details.

```kotlin
val mockedFile = mockk<File>()

coEvery { mockedFile.readAsync() } returns "hello world"
coEvery { mockedFile.writeAsync(any()) } coAnswers { call ->
  doAsyncWork()
  Unit
}
```
