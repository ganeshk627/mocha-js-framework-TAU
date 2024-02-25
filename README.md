# mocha-js-framework-TAU

# 00. Mocha?

Testing framwork for Javascript running on NodeJS and browser
It is similar to TestNG in Java and NUnit in C#
Helps to organize and execute the test cases
Makes asynchronous testing to be simple and fun to execute

# 01. Mocha Installation

## 1.1 Pre-requisites for Mocha

* NodeJS

```
node --version
```

* Node Package Manager (NPM)

## 1.2 Pre-requisites for Mocha

To install globally using npm:

    npm install mocha -g

To check mocha version:

    mocha --version


# 02. Pre-Bundled Function Calls - describe() and it()


```describe()``` - is a simple way to group our tests in Mocha. It provides us a feature to create a series of tests. described takes two arguments. The first is the name/description of the test group. The second is the call back function which is a function that needs to be executed after another function has finished executing

```it()``` - is a way to describe the individual test case. These tests should be nested within the describe block. it should be described in a way that it makes sense for the given test case

## 2.1 Creating tests


```javascript
// mochatest.js
var assert = require('assert');

describe('Mathematical Operations - Test Suite', function () {

    const a = 10;
    const b = 10;

    it('Addition of two numbers', function () {
        assert.equal(a + b, 20);
    });

    it('Subtraction of two numbers', function () {
        assert.equal(a - b, 0);
    });

    it('Multiplication of two numbers', function () {
        assert.equal(a * b, 100);
    });

    it('Division of two numbers', function () {
        assert.equal(a / b, 1);
    });

    it('Division of two numbers', function () {
        assert.equal(a / b, 10);
    });
});

```

## 2.2 Running tests with Mocha CLI

### To run all files under "test" directory:

```bash
mocha
```

or

```bash
npx mocha
```

### To run a single file `test/mochatest.js` from terminal:

```bash
mocha test/mochatest.js
```

> Note that the command above will execute every .js file in the folder, so make sure to add an index.js or similar if you
> Note that the above command will execute every .js file in the "test" folder, so be careful to organize your code appropri
> Note that the above command will execute every .js file in the "test" folder, so make sure to name your test file correctly!
> Note that the default reporter is the spec reporter, which shows results in a nice human readable format. You can use other repor
You can also use the watch command to automatically rerun the tests whenever you save your changes:

mocha -w


# 03. Mocha Hooks

Four types of hooks

• before - which runs before all tests in the code block

• after - which runs after all tests in the code block

• beforeEach - which runs before each test in the code block

• afterEach - which runs after each test in the code block


# 04. Test Features - Inclusinve, Exclusive and Pending

Mocha has features to explicitly tell which tests should be executed and not to be executed.
• Exclusive Tests - The exclusivity feature allows you to run only the specified suite or test-case by appending .only() to the function
Inclusive Tests - This feature is the inverse of .only(). By appending .skip(), you may tell Mocha to simply ignore these suite(s) and test case(s)
Pending Tests - Pending tests will be included in the test results, and marked as pending. A pending test is not considered a failed test.
Note: Anything skipped will be marked as pending.


### onlytest.js

```java

  Mathematical Operations - Only
    ✔ Addition of two numbers
    ✔ Multiplication of two numbers


  2 passing (2ms)
```

### skiptest.js
```c
  Mathematical Operations - Skip
    ✔ Addition of two numbers
    - Subtraction of two numbers
    ✔ Multiplication of two numbers
    - Division of two numbers


  2 passing (2ms)
  2 pending
```

# 05. Retry & Timeout functions

## 5.1 Retry
* You can tell Mocha to execute the failed tests several times according to your requirement
* Retry function is primarily used for End-to-End Tests like Selenium Scripts
* Re-runs beforeEach/ afterEach hooks but NOT before/ after hooks
Note: Retry is not recommended for Unit Tests


## 5.2 Timeouts
There are 3 levels in which we can use Timeouts -
* SUITE-LEVEL - Suite-level timeouts are used through out the test "suites", or disabled by using this.timeout (0).
* TEST-LEVEL - Test-specific timeouts are used within the test cases level, or use this. timeout(0) to disable timeouts completely
* HOOK-LEVEL - Hook-level timeouts can be used in the hooks



# 06. Reporters - Spec and Dot Matrix

Mocha Reporters are mostly Terminal based
* SPEC - This is the default reporter. The "spec" reporter outputs a hierarchical view according to test cases

```bash
npx mocha test/06-reporters.js --reporter spec
```

```bash
  Reporting Tests
    ✔ test 1
    1) test 2
    - test 3


  1 passing (3ms)
  1 pending
  1 failing

  1) Reporting Tests
       test 2:

      AssertionError [ERR_ASSERTION]: 1 == 0
      + expected - actual

      -1
      +0
      
      at Context.<anonymous> (test/06-reporters.js:10:15)
      at processImmediate (node:internal/timers:466:21)


mocha-js-framework-TAU $
```


* DOT MATRIX - The dot matrix reporter is a series of characters which represent the test cases. Failures are highlighted in red exclamation marks (!), pending tests with a blue comma (,), and slow tests as yellow.

```bash
npx mocha test/06-reporters.js --reporter dot
```

```bash
mocha-js-framework-TAU $ npx mocha test/06-reporters.js --reporter dot

    .!,

  1 passing (3ms)
  1 pending
  1 failing

  1) Reporting Tests
       test 2:

      AssertionError [ERR_ASSERTION]: 1 == 0
      + expected - actual

      -1
      +0
      
      at Context.<anonymous> (test/06-reporters.js:10:15)
      at processImmediate (node:internal/timers:466:21)


mocha-js-framework-TAU $
  ```


* Other types
NYAN, TAP, Landing Strip, List, Progress, JSON, JSON Stream, Min, DOC

```bash
npx mocha --list-reporters
```

```bash
mocha-js-framework-TAU $ npx mocha --list-reporters

    doc         - HTML documentation
    dot         - dot matrix representation
    json        - single JSON object
    json-stream - newline delimited JSON events
    landing     - Unicode landing strip
    list        - like "spec" reporter but flat
    markdown    - GitHub Flavored Markdown
    min         - essentially just a summary
    nyan        - "nyan cat"
    progress    - a progress bar
    spec        - hierarchical & verbose [default]
    tap         - TAP-compatible output
    xunit       - XUnit-compatible XML output

mocha-js-framework-TAU $ 

```
---
---


```bash
npx mocha test/06-reporters.js --reporter nyan
```

```bash
mocha-js-framework-TAU $ npx mocha test/06-reporters.js --reporter nyan


 1   -_-__,------,
 1   -_-__|  /\_/\ 
 1   -_-_~|_( x .x) 
     -_-_ ""  "" 

  1 passing (2ms)
  1 pending
  1 failing

  1) Reporting Tests
       test 2:

      AssertionError [ERR_ASSERTION]: 1 == 0
      + expected - actual

      -1
      +0
      
      at Context.<anonymous> (test/06-reporters.js:10:15)
      at processImmediate (node:internal/timers:466:21)


mocha-js-framework-TAU $
```

---
---

```bash
npx mocha test/06-reporters.js --reporter json
```

```bash
mocha-js-framework-TAU $ npx mocha test/06-reporters.js --reporter json

{
  "stats": {
    "suites": 1,
    "tests": 3,
    "passes": 1,
    "pending": 1,
    "failures": 1,
    "start": "2024-02-25T06:35:31.241Z",
    "end": "2024-02-25T06:35:31.243Z",
    "duration": 2
  },
  "tests": [
    {
      "title": "test 1",
      "fullTitle": "Reporting Tests test 1",
      "file": "/Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/mocha-js-framework-TAU/test/06-reporters.js",
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "test 2",
      "fullTitle": "Reporting Tests test 2",
      "file": "/Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/mocha-js-framework-TAU/test/06-reporters.js",
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "stack": "AssertionError [ERR_ASSERTION]: 1 == 0\n    at Context.<anonymous> (test/06-reporters.js:10:15)\n    at processImmediate (node:internal/timers:466:21)",
        "message": "1 == 0",
        "generatedMessage": true,
        "name": "AssertionError",
        "code": "ERR_ASSERTION",
        "actual": "1",
        "expected": "0",
        "operator": "=="
      }
    },
    {
      "title": "test 3",
      "fullTitle": "Reporting Tests test 3",
      "file": "/Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/mocha-js-framework-TAU/test/06-reporters.js",
      "currentRetry": 0,
      "err": {}
    }
  ],
  "pending": [
    {
      "title": "test 3",
      "fullTitle": "Reporting Tests test 3",
      "file": "/Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/mocha-js-framework-TAU/test/06-reporters.js",
      "currentRetry": 0,
      "err": {}
    }
  ],
  "failures": [
    {
      "title": "test 2",
      "fullTitle": "Reporting Tests test 2",
      "file": "/Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/mocha-js-framework-TAU/test/06-reporters.js",
      "duration": 0,
      "currentRetry": 0,
      "err": {
        "stack": "AssertionError [ERR_ASSERTION]: 1 == 0\n    at Context.<anonymous> (test/06-reporters.js:10:15)\n    at processImmediate (node:internal/timers:466:21)",
        "message": "1 == 0",
        "generatedMessage": true,
        "name": "AssertionError",
        "code": "ERR_ASSERTION",
        "actual": "1",
        "expected": "0",
        "operator": "=="
      }
    }
  ],
  "passes": [
    {
      "title": "test 1",
      "fullTitle": "Reporting Tests test 1",
      "file": "/Users/ganeshk/Automation Testing/Automation Testing/workdone/VSCode/mocha-js-framework-TAU/test/06-reporters.js",
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
  ]
}         


mocha-js-framework-TAU $ 
```

---
---



```bash

mocha-js-framework-TAU $ npx mocha --help
mocha [spec..]

Run tests with Mocha

Commands
  mocha inspect [spec..]  Run tests with Mocha                         [default]
  mocha init <path>       create a client-side Mocha setup at <path>

Rules & Behavior
      --allow-uncaught       Allow uncaught errors to propagate        [boolean]
  -A, --async-only           Require all tests to use a callback (async) or
                             return a Promise                          [boolean]
  -b, --bail                 Abort ("bail") after first test failure   [boolean]
      --check-leaks          Check for global variable leaks           [boolean]
      --delay                Delay initial execution of root suite     [boolean]
      --dry-run              Report tests without executing them       [boolean]
      --exit                 Force Mocha to quit after tests complete  [boolean]
      --fail-zero            Fail test run if no test(s) encountered   [boolean]
      --forbid-only          Fail if exclusive test(s) encountered     [boolean]
      --forbid-pending       Fail if pending test(s) encountered       [boolean]
      --global, --globals    List of allowed global variables            [array]
  -j, --jobs                 Number of concurrent jobs for --parallel; use 1 to
                             run in serial
                                   [number] [default: (number of CPU cores - 1)]
  -p, --parallel             Run tests in parallel                     [boolean]
      --retries              Retry failed tests this many times         [number]
  -s, --slow                 Specify "slow" test threshold (in milliseconds)
                                                          [string] [default: 75]
  -t, --timeout, --timeouts  Specify test timeout threshold (in milliseconds)
                                                        [string] [default: 2000]
  -u, --ui                   Specify user interface    [string] [default: "bdd"]

Reporting & Output
  -c, --color, --colors                     Force-enable color output  [boolean]
      --diff                                Show diff on failure
                                                       [boolean] [default: true]
      --full-trace                          Display full stack traces  [boolean]
      --inline-diffs                        Display actual/expected differences
                                            inline within each string  [boolean]
  -R, --reporter                            Specify reporter to use
                                                      [string] [default: "spec"]
  -O, --reporter-option,                    Reporter-specific options
  --reporter-options                        (<k=v,[k1=v1,..]>)           [array]

Configuration
      --config       Path to config file   [string] [default: (nearest rc file)]
  -n, --node-option  Node or V8 option (no leading "--")                 [array]
      --package      Path to package.json for config                    [string]

File Handling
      --extension          File extension(s) to load
                                           [array] [default: ["js","cjs","mjs"]]
      --file               Specify file(s) to be loaded prior to root suite
                           execution                   [array] [default: (none)]
      --ignore, --exclude  Ignore file(s) or glob pattern(s)
                                                       [array] [default: (none)]
      --recursive          Look for tests in subdirectories            [boolean]
  -r, --require            Require module              [array] [default: (none)]
  -S, --sort               Sort test files                             [boolean]
  -w, --watch              Watch files in the current working directory for
                           changes                                     [boolean]
      --watch-files        List of paths or globs to watch               [array]
      --watch-ignore       List of paths or globs to exclude from watching
                                      [array] [default: ["node_modules",".git"]]

Test Filters
  -f, --fgrep   Only run tests containing this string                   [string]
  -g, --grep    Only run tests matching this string or regexp           [string]
  -i, --invert  Inverts --grep and --fgrep matches                     [boolean]

Positional Arguments
  spec  One or more files, directories, or globs to test
                                                     [array] [default: ["test"]]

Other Options
  -h, --help             Show usage information & exit                 [boolean]
  -V, --version          Show version number & exit                    [boolean]
      --list-interfaces  List built-in user interfaces & exit          [boolean]
      --list-reporters   List built-in reporters & exit                [boolean]

Mocha Resources
    Chat: https://discord.gg/KeDn2uXhER
  GitHub: https://github.com/mochajs/mocha.git
    Docs: https://mochajs.org/
mocha-js-framework-TAU $ 
```