# Stubbing behaviour

- `every`, returns, throws, etc
- stubbing consecutive calls

```kotlin
val mockedList = mockk<List<String>>()

every { mockedList[0] } returns "first"
every { mockedList[1] } throws RuntimeException()

// prints "first"
println(mockedList[0])

// throws runtime exception
println(mockedList[1])

// throws exception because the getter was not stubbed
println(mockedList[999])
```
