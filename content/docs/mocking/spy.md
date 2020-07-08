---
title: Spy on existing classes
---

# Spy on existing classes

Rather than mocking an object, you can create spies of real objects. Spies will run the real methods in a class, unlike mocks which don't run anything. Stubbing methods on a spy will run the stub instead, so you can have a mixture of real methods and stubbed methods.

Spies get their name because you can spy on the code you're testing and see what methods it called. Spies let you [verify that a method is called](./verify.md), just like a mock.
