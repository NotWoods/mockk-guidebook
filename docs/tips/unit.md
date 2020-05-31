# Returning `Unit`

When [stubbing](../mocking/stubbing.md) a function that returns nothing, MockK provides a few shortcuts.

```kotlin
val logger = mockk<Logger>()

every { logger.log(any()) } returns Unit
every { logger.log(any()) } answers { Unit }
every { logger.log(any()) } just Runs
justRun { logger.log(any()) }
```
