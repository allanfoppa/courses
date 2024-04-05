# NOTES

Avoid using test (singular form) as the directory name. The test name is a Python module, so creating a directory named the same would override it. Always use the plural tests instead.

---

One of the strong arguments to use Pytest is that it allows writing test functions. Similar to test files, function must be prefixed with test_. Using the test_ prefix, you'll ensure that Pytest collects the test and executes it.

---

Helper methods
In a test class, there are a few methods you can use to setup and teardown test execution. Pytest will execute them automatically if defined. To use these methods, you should know that they have a specific order and behavior.

`setup`: Executes once before each test in a class  
`teardown`: Executes once after each test in a class  
`setup_class`: Executes once before all tests in a class  
`teardown_class`: Executes once after all tests in a class  

---

Parametrize feature allows you to easily provide different inputs to a test that performs the same assertion.

---

Work with scopes
If you've worked with test methods, you might have used a setup() or teardown() method for setting or cleaning up a test. Fixtures have a scope of "function" by default. This means two things:

The returned value is calculated for every test that uses it
If there’s cleanup needed for the function, it’s done after every test that uses it.
Fixtures can define other scopes. For example, if you need a fixture that starts a database, you may want that to be run once at the beginning of the test session and not for every test. There are four supported scopes for fixtures:

`function`: Runs once per test  
`class`: Runs once per class  
`module`: Runs once for a module  
`session`: Runs once for a test session  
