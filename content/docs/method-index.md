---
title: Method index
summary: >
  Index of MockK methods and corresponding guidebook chapters.
---

# Method index

Index of MockK methods and corresponding guidebook chapters.

## Top level functions

### `mockk<T>(...)`

_Chapter: [Mocking](docs/mocking/)_ \
builds a regular mock

### `spyk<T>()`

_Chapter: [Spy on existing classes](docs/mocking/spy.md)_ \
builds a spy using the default constructor

### `spyk(obj)`

_Chapter: [Spy on existing classes](docs/mocking/spy.md)_ \
builds a spy by copying from `obj`

### `slot`

_Chapter: [Capture arguments to check later](docs/matching/capture.md)_ \
creates a capturing slot

### `every`

_Chapter: [Stub out behaviour](docs/mocking/stubbing.md)_ \
starts a stubbing block

### `coEvery`

_Chapter: [Coroutines and suspend functions](docs/mocking/coroutines.md)_ \
starts a stubbing block for coroutines

### `verify`

_Chapter: [Verify that functions were called](docs/mocking/verify.md)_ \
starts a verification block

### `coVerify`

_Chapter: [Coroutines and suspend functions](docs/mocking/coroutines.md)_ \
starts a verification block for coroutines

### `verifyAll`

_Chapter: [Verify that functions were called](docs/mocking/verify.md#verifying-multiple-functions)_ \
starts a verification block that should include all calls

### `coVerifyAll`

_Chapter: [Coroutines and suspend functions](docs/mocking/coroutines.md)_ \
starts a verification block that should include all calls for coroutines

### `verifyOrder`

_Chapter: [Verify that functions were called](docs/mocking/verify.md#verifying-multiple-functions)_ \
starts a verification block that checks the order

### `coVerifyOrder`

_Chapter: [Coroutines and suspend functions](docs/mocking/coroutines.md)_ \
starts a verification block that checks the order for coroutines

### `verifySequence`

_Chapter: [Verify that functions were called](docs/mocking/verify.md#verifying-multiple-functions)_ \
starts a verification block that checks whether all calls were made in a specified sequence

### `coVerifySequence`

_Chapter: [Coroutines and suspend functions](docs/mocking/coroutines.md)_ \
starts a verification block that checks whether all calls were made in a specified sequence for coroutines

### `excludeRecords`

_Chapter: [Verify that functions were called](docs/mocking/verify.md#confirming-all-calls-were-verified)_ \
exclude some calls from being recorded

### `confirmVerified`

_Chapter: [Verify that functions were called](docs/mocking/verify.md#confirming-all-calls-were-verified)_ \
confirms that all recorded calls were verified

### `clearMocks`

_Chapter: [Clear state](docs/mocking/clear.md)_ \
clears specified mocks

### `registerInstanceFactory`

_Chapter: TODO_ \
allows you to redefine the way of instantiation for certain object

### `mockkClass`

_Chapter: TODO_ \
builds a regular mock by passing the class as parameter

### `mockkObject`

_Chapter: [Mock singleton objects and static methods](docs/mocking/static.md#mocking-objects)_ \
makes an object an object mock or clears it if was already transformed

### `unmockkObject`

_Chapter: [Mock singleton objects and static methods](docs/mocking/static.md#unmocking)_ \
makes an object mock back to a regular object

### `mockkStatic`

_Chapter: [Mock singleton objects and static methods](docs/mocking/static.md#mocking-objects)_ \
makes a static mock out of a class or clears it if it was already transformed

### `unmockkStatic`

_Chapter: [Mock singleton objects and static methods](docs/mocking/static.md#unmocking)_ \
makes a static mock back to a regular class

### `clearStaticMockk`

_Chapter: TODO_ \
clears a static mock

### `mockkConstructor`

_Chapter: [Mock constructors in code you don't own](docs/mocking/constructor.md)_ \
makes a constructor mock out of a class or clears it if it was already transformed

### `unmockkConstructor`

_Chapter: [Mock constructors in code you don't own](docs/mocking/constructor.md#unmocking)_ \
makes a constructor mock back to a regular class

### `clearConstructorMockk`

_Chapter: TODO_ \
clears the constructor mock

### `unmockkAll`

_Chapter: TODO_ \
unmocks object, static and constructor mocks

### `clearAllMocks`

_Chapter: TODO_ \
clears regular, object, static and constructor mocks

## Matchers

By default, simple arguments are matched using `eq()`.

### `any()`

_Chapter: [Allow any argument](docs/matching/any.md)_ \
matches any argument

### `allAny()`

_Chapter: [Allow any argument](docs/matching/any.md)_ \
special matcher that uses `any()` instead of `eq()` for matchers that are provided as simple arguments

### `isNull()`

_Chapter: TODO_ \
checks if the value is null

### `isNull(inverse=true)`

_Chapter: TODO_ \
checks if the value is not null

### `ofType(type)`

_Chapter: [Argument of a certain type](docs/matching/oftype.md)_ \
checks if the value belongs to the type

### `match { it.startsWith("string") }`

_Chapter: TODO_ \
matches via the passed predicate

### `coMatch { it.startsWith("string") }`

_Chapter: TODO_ \
matches via the passed coroutine predicate

### `matchNullable { it?.startsWith("string") }`

_Chapter: TODO_ \
matches nullable value via the passed predicate

### `coMatchNullable { it?.startsWith("string") }`

_Chapter: TODO_ \
matches nullable value via the passed coroutine predicate

### `eq(value)`

_Chapter: [Check equality](docs/matching/equal.md)_ \
matches if the value is equal to the provided value via the `deepEquals` function

### `eq(value, inverse=true))`

_Chapter: [Check equality](docs/matching/equal.md)_ \
matches if the value is not equal to the provided value via the `deepEquals` function

### `neq(value)`

_Chapter: [Check equality](docs/matching/equal.md)_ \
matches if the value is not equal to the provided value via `deepEquals` function

### `refEq(value)`

_Chapter: [Check equality](docs/matching/equal.md)_ \
matches if the value is equal to the provided value via reference comparison

### `refEq(value, inverse=true)`

_Chapter: [Check equality](docs/matching/equal.md)_ \
matches if the value is not equal to the provided value via reference comparison

### `nrefEq(value)`

_Chapter: [Check equality](docs/matching/equal.md)_ \
matches if the value is not equal to the provided value via reference comparison

### `cmpEq(value)`

_Chapter: [Check equality](docs/matching/equal.md)_ \
matches if the value is equal to the provided value via the `compareTo` function

### `less(value)`

_Chapter: [Comparables](docs/matching/compareto.md)_ \
matches if the value is less than the provided value via the `compareTo` function

### `more(value)`

_Chapter: [Comparables](docs/matching/compareto.md)_ \
matches if the value is more than the provided value via the `compareTo` function

### `less(value, andEquals=true)`

_Chapter: [Comparables](docs/matching/compareto.md)_ \
matches if the value is less than or equal to the provided value via the `compareTo` function

### `more(value, andEquals=true)`

_Chapter: [Comparables](docs/matching/compareto.md)_ \
matches if the value is more than or equal to the provided value via the `compareTo` function

### `range(from, to, fromInclusive=true, toInclusive=true)`

_Chapter: [Comparables](docs/matching/compareto.md)_ \
matches if the value is in range via the `compareTo` function

### `and(left, right)`

_Chapter: [Combine matchers](docs/matching/combine.md)_ \
combines two matchers via a logical and

### `or(left, right)`

_Chapter: [Combine matchers](docs/matching/combine.md)_ \
combines two matchers via a logical or

### `not(matcher)`

_Chapter: [Combine matchers](docs/matching/combine.md)_ \
negates the matcher

### `capture(slot)`

_Chapter: [Capture arguments to check later](docs/matching/capture.md)_ \
captures a value to a `CapturingSlot`

### `capture(mutableList)`

_Chapter: [Capture arguments to check later](docs/matching/capture.md)_ \
captures a value to a list

### `captureNullable(mutableList)`

_Chapter: [Capture arguments to check later](docs/matching/capture.md)_ \
captures a value to a list together with null values

### `captureLambda()`

_Chapter: [Capture arguments to check later](docs/matching/capture.md)_ \
captures a lambda

### `captureCoroutine()`

_Chapter: [Capture arguments to check later](docs/matching/capture.md)_ \
captures a coroutine

### `invoke(...)`

_Chapter: TODO_ \
calls a matched argument

### `coInvoke(...)`

_Chapter: TODO_ \
calls a matched argument for a coroutine

### `hint(cls)`

_Chapter: TODO_ \
hints the next return type in case it's gotten erased

### `anyVararg()`

_Chapter: TODO_ \
matches any elements in a vararg

### `varargAny(matcher)`

_Chapter: TODO_ \
matches if any element is matching the matcher

### `varargAll(matcher)`

_Chapter: TODO_ \
matches if all elements are matching the matcher

### `any...Vararg()`

_Chapter: TODO_ \
matches any elements in vararg (specific to primitive type)

### `varargAny...(matcher)`

_Chapter: TODO_ \
matches if any element is matching the matcher (specific to the primitive type)

### `varargAll...(matcher)`

_Chapter: TODO_ \
matches if all elements are matching the matcher (specific to the primitive type)

A few special matchers available in verification mode only:

### `withArg { code }`

_Chapter: [Assertions with an argument](docs/matching/with.md)_ \
matches any value and allows to execute some code

### `withNullableArg { code }`

_Chapter: [Assertions with an argument](docs/matching/with.md)_ \
matches any nullable value and allows to execute some code

### `coWithArg { code }`

_Chapter: TODO_ \
matches any value and allows to execute some coroutine code

### `coWithNullableArg { code }`

_Chapter: TODO_ \
matches any nullable value and allows to execute some coroutine code

## Validators

### `verify { mock.call() }`

_Chapter: TODO_ \
Do unordered verification that a call was performed

### `verify(inverse=true) { mock.call() }`

_Chapter: TODO_ \
Do unordered verification that a call was not performed

### `verify(atLeast=n) { mock.call() }`

_Chapter: TODO_ \
Do unordered verification that a call was performed at least `n` times

### `verify(atMost=n) { mock.call() }`

_Chapter: TODO_ \
Do unordered verification that a call was performed at most `n` times

### `verify(exactly=n) { mock.call() }`

_Chapter: TODO_ \
Do unordered verification that a call was performed exactly `n` times

### `verifyAll { mock.call1(); mock.call2() }`

_Chapter: TODO_ \
Do unordered verification that only the specified calls were executed for the mentioned mocks

### `verifyOrder { mock.call1(); mock.call2() }`

_Chapter: TODO_ \
Do verification that the sequence of calls went one after another

### `verifySequence { mock.call1(); mock.call2() }`

_Chapter: TODO_ \
Do verification that only the specified sequence of calls were executed for the mentioned mocks

### `verify { mock wasNot Called }`

_Chapter: TODO_ \
Do verification that a mock was not called

### `verify { listOf(mock1, mock2) wasNot Called }`

_Chapter: TODO_ \
Do verification that a list of mocks were not called

## Answers

An Answer can be followed up by one or more additional answers.

### `returns value`

_Chapter: TODO_ \
specify that the matched call returns a specified value

### `returnsMany list`

_Chapter: TODO_ \
specify that the matched call returns a value from the list, with subsequent calls returning the next element

### `throws ex`

_Chapter: TODO_ \
specify that the matched call throws an exception

### `answers { code }`

_Chapter: TODO_ \
specify that the matched call answers with a code block scoped with `answer scope`

### `coAnswers { code }`

_Chapter: TODO_ \
specify that the matched call answers with a coroutine code block with `answer scope`

### `answers answerObj`

_Chapter: TODO_ \
specify that the matched call answers with an Answer object

### `answers { nothing }`

_Chapter: TODO_ \
specify that the matched call answers null

### `just Runs`

_Chapter: TODO_ \
specify that the matched call is returning Unit (returns null)

### `propertyType Class`

_Chapter: TODO_ \
specify the type of backing field accessor

### `nullablePropertyType Class`

_Chapter: TODO_ \
specify the type of backing field accessor as a nullable type

## Additional answer(s)

A next answer is returned on each consequent call and the last value is persisted.
So this is similar to the `returnsMany` semantics.

### `andThen value`

_Chapter: TODO_ \
specify that the matched call returns one specified value

### `andThenMany list`

_Chapter: TODO_ \
specify that the matched call returns value from the list, returning each time next element

### `andThenThrows ex`

_Chapter: TODO_ \
specify that the matched call throws an exception

### `andThen { code }`

_Chapter: TODO_ \
specify that the matched call answers with a code block scoped with `answer scope`

### `coAndThen { code }`

_Chapter: TODO_ \
specify that the matched call answers with a coroutine code block with `answer scope`

### `andThenAnswer answerObj`

_Chapter: TODO_ \
specify that the matched call answers with an Answer object

### `andThen { nothing }`

_Chapter: TODO_ \
specify that the matched call answers null

## Answer scope

### `call`

_Chapter: TODO_ \
a call object that consists of an invocation and a matcher

### `invocation`

_Chapter: TODO_ \
contains information regarding the actual function invoked

### `matcher`

_Chapter: TODO_ \
contains information regarding the matcher used to match the invocation

### `self`

_Chapter: TODO_ \
reference to the object invocation made

### `method`

_Chapter: TODO_ \
reference to the function invocation made

### `args`

_Chapter: TODO_ \
reference to the arguments of invocation

### `nArgs`

_Chapter: TODO_ \
number of invocation argument

### `arg(n)`

_Chapter: TODO_ \
n-th argument

### `firstArg()`

_Chapter: TODO_ \
first argument

### `secondArg()`

_Chapter: TODO_ \
second argument

### `thirdArg()`

_Chapter: TODO_ \
third argument

### `lastArg()`

_Chapter: TODO_ \
last argument

### `captured()`

_Chapter: TODO_ \
the last element in the list for convenience when capturing to a list

### `lambda<...>().invoke()`

_Chapter: TODO_ \
call the captured lambda

### `coroutine<...>().coInvoke()`

_Chapter: TODO_ \
call the captured coroutine

### `nothing`

_Chapter: TODO_ \
null value for returning nothing as an answer

### `fieldValue`

_Chapter: TODO_ \
accessor to the property backing field

### `fieldValueAny`

_Chapter: TODO_ \
accessor to the property backing field with `Any?` type

### `value`

_Chapter: TODO_ \
value being set casted to same type as the property backing field

### `valueAny`

_Chapter: TODO_ \
value being set with `Any?` type

## Vararg scope

### `position`

_Chapter: TODO_ \
the position of an argument in vararg array

### `nArgs`

_Chapter: TODO_ \
overall count of arguments in vararg array
