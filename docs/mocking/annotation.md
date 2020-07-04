# Create many mocks quickly with annotations

Sometimes you will need to create many mocks in your test class. As each mock needs to be declared as a property in the test class, then initialized in the test setup function, the amount of code needed to build all your mocks can grow very quickly. MockK provides a shorthand using annotations to make this simpler.

```kotlin
class RepositoryTest {

  @MockK private lateinit var foodDatabase: FoodDatabase
  @MockK private lateinit var recipeDatabase: RecipeDatabase
  @MockK private lateinit var networkClient: NetworkClient
  @SpyK private var logger = Logger()

  @Before
  fun setup() {
    MockKAnnotations.init(this)
  }

  @Test
  fun testDatabaseAndNetwork() {
    // ... use foodDatabase, recipeDatabase, networkClient and debugger
  }
}
```

Each property with the `@MockK` annotation is automatically mocked and ready to use in tests. This reduces repetition and makes your tests more readable. The above class is equivalent to:

```kotlin
class RepositoryTest {

  private lateinit var foodDatabase: FoodDatabase
  private lateinit var recipeDatabase: RecipeDatabase
  private lateinit var networkClient: NetworkClient
  private lateinit var logger: Logger

  @Before
  fun setup() {
    foodDatabase = mockk()
    recipeDatabase = mockk()
    networkClient = mockk()
    logger = spyk(Logger())
  }

  @Test
  fun testDatabaseAndNetwork() {
    // ... use foodDatabase, recipeDatabase, networkClient and debugger
  }
}
```

## Options

`@MockK` annotations take the same options as the `mockk` function. If you wish to use a relaxed mock, the annotation looks similar to the equivalent `mockk` call:

```kotlin
// Annotations
class RepositoryTest {

  @MockK(relaxed = true) private lateinit var foodDatabase: FoodDatabase
  @MockK(relaxUnitFun = true) private lateinit var recipeDatabase: RecipeDatabase

  @Before
  fun setup() {
    MockKAnnotations.init(this)
  }
}
```

```kotlin
// Long form
class RepositoryTest {

  private lateinit var foodDatabase: FoodDatabase
  private lateinit var recipeDatabase: RecipeDatabase

  @Before
  fun setup() {
    foodDatabase = mockk(relaxed = true)
    recipeDatabase = mockk(relaxUnitFun = true)
  }
}
```

In addition to `@MockK(relaxed = true)`, there is an equivalent `@RelaxedMockK` annotation.

If options are shared across every annotated mock, they can be passed to the `init` call instead.

```kotlin
class RepositoryTest {

  @MockK private lateinit var foodDatabase: FoodDatabase
  @MockK private lateinit var recipeDatabase: RecipeDatabase

  @Before
  fun setup() {
    MockKAnnotations.init(this, relaxed = true)
  }
}
```

## Spies

TODO
