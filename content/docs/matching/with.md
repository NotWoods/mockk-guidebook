---
title: Assertions with an argument
summary: >
  Using `withArg` to run assertions in `verify` calls.
weight: 40
---

# Run assertions with an argument

- `withArg`
- `withNullableArg`
- `coWithArg`
- `coWithNullableArg`

There are some special argument matchers that can only be used when verifying that a mocked function was called. `withArg` and its variants allow you to capture an argument and run your own assertions on it without the need to set up a [capturing slot](capture.md).

```kotlin
data class File(
  val name: String,
  val data: ByteArray
)

interface FileNetwork {
  fun download(name: String): File
  fun upload(file: File)
}
```

When using a capturing slot, testing the `FileNetwork.download` function looks like this:

```kotlin
val network = mockk<FileNetwork>()
val slot = slot<String>()

every { network.download(capture(slot)) } returns mockk()

network.download("testfile")

verify {
  network.download(any())
}
assertTrue("testfile" == slot.captured)
```

`withArg` simplifies this code so no slot is needed.

```kotlin
val network = mockk<FileNetwork>()

every { network.download(any()) } returns mockk()

network.download("testfile")

verify {
  network.download(withArg {
    assertTrue("testfile" == it)
  })
}
```

## Arrays and data classes

`withArg` can be helpful when you use arguments that aren't easily compared, such as a data class containing arrays. The `equals()` function on an array works differently than on a `List`. Arrays are only equal if you compare with the exact same instance, while lists are equal if all of their items are equal. Since Kotlin data classes use the `equals()` function with each property, this array behaviour affects them.

```kotlin
val expected = File("hello", data = "world".toByteArray())

network.upload(File("hello", data = "world".toByteArray()))

// fails because the Files are not equal
verify {
  network.upload(expected)
}
```

In your test, you can choose to compare properties individually using `withArg`.

```kotlin
val expected = File("hello", data = "world".toByteArray())

network.upload(File("hello", data = "world".toByteArray()))

verify {
  network.upload(withArg {
    assertTrue(expected.name == it.name)
    assertTrue(expected.data contentEquals it.data)
  })
}
```

## Nullable arguments

`withNullableArg` is also provided by MockK when you wish to use it with a nullable argument.

## Coroutines

MockK provides variants with `withArg` and `withNullableArg` that allow coroutine code to be executed. These variants are `coWithArg` and `coWithNullableArg`. If your assertions call a suspend function, these variants should be used.
