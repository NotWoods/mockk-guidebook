---
title: Mock constructors in code you don't own
summary: >
  Advanced mocking with `mockkConstructor`.
weight: 60
---

# Mock constructors in code you don't own

Sometimes your classes have dependencies that they construct themselves. While it's best to use a system like dependency injection to avoid this, MockK makes it possible to control constructors and make them return a mocked instance.

The `mockkConstructor(T::class)` function takes in a class reference. Once used, every constructor of that type will start returning a singleton that can be mocked. Rather than building a new instance every time the constructor is called, MockK generates a singleton and always returns the same instance. This will apply to all constructors for a given class, there is no way to distinguish between them.

The mocked result can be obtained by using `anyConstructed<T>()`. Using this function, stubbing and verification can be done just like any other mock.

## Unmocking

If you'd like to revert back to the real constructor, you can use the `unmockkConstructor` method. This removes any stubbed behaviour you may have added.
