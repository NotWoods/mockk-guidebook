---
title: "`ArgumentCaptor`"
summary: >
  Capturing arguments to check them later.
weight: 60
---

# `ArgumentCaptor`

When you need to run additional assertions on an argument, the `ArgumentCaptor` is the tool for the job in Mockito. An `ArgumentCaptor` will keep track of arguments passed to a mocked method, then allow you to retreve the argument later.

```kotlin
val personArgument = ArgumentCaptor.forClass(Person::class.java)

verify(mockPhone).call(personArgument.capture())

assertEquals("Sarah Jane", personArgument.value.name)
```

MockK has a similar [utility called a `CapturingSlot`](../matching/capture.md). The functionality is very similar to Mockito, but the usage is different. Rather than calling the method `argumentCaptor.capture()` to create a argument matcher, you wrap the slot in a `capture()` function. You access the captured value using the `slot.captured` property rather than the `argumentCaptor.value` getter.

```kotlin
val personSlot = slot<Person>()

every { mockPhone.call(capture(personSlot)) } returns Unit
//or justRun { mockPhone.call(capture(personSlot)) }

assertEquals("Sarah Jane", personSlot.captured.name)
```

As an alternative to `CapturingSlot`, a `MutableList` can be used to store captured arguments. Simply pass an instance of a mutable list to `capture` instead of the slot. This allows you to record all captured values, as `CapturingSlot` only records the most recent value.

## Inline assertions

It turns out that there is an even simpler way to run assertions on an argument in MockK. The [`withArg` function](../matching/with.md) is an argument matcher that takes a lambda that will be executed when the mocked function is called, with the argument passed to the lambda. This allows you to run assertions without managing argument captors or capturing slots.

```kotlin
every {
  mockPhone.call(withArg { person ->
    assertEquals("Sarah Jane", person.captured.name)
  })
} returns Unit
```

When dealing with one-off assertions, `withArg` will do everything you need with less code.
