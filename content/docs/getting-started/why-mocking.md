---
title: Why use mocks
summary: "I thought lying was bad!"
weight: 10
---

# Why use mocks

How do you make sure your code runs like it's supposed to? You can start out building your app, playing around with it, and trying buttons while ensuring there are no crashes. However, as your codebase grows, testing every edge case for every function becomes more difficult to do manually. Enter automated testing: code that runs your app with pre-written instructions then checks that the result matches your expectation.

Most automated tests are unit tests: tests that check a single function at a time, rather than the entire app. "Units" refer to parts of your code that can be tested in isolation. This may be a standalone function or a single class.

However, classes usually depend on other classes to run properly. A `Car` class may depend on an `Engine` class. You need to provide these dependencies for the `Car` to work, but it's hard to write tests in isolation if you're also configuring the `Engine` at the same time.

You can work around this problem by creating fake versions of the dependencies. These fake classes are called "mocks". You can configure mocks in many different ways to be suitable for a variety of unit tests. They can [throw an error if the tested class calls unexpected methods on the mock](../mocking/stubbing.md), or [allow any methods to be called and automatically provide fake results](../mocking/relax.md). You have fine control over the behaviour of every method on a mock, so your test can handle all the possible edge cases.

Writing unit tests will help you track down bugs ahead of time, and ensure they don't reappear when you make changes to your code. Mocks are an important tool in your unit testing toolkit to help you write isolated tests. Read on to learn how to use [the MockK mocking framework](../mocking/_index.md), or learn [why you should use MockK over other frameworks](./why-mockk.md).
