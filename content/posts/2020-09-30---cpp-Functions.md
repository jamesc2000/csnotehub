---
title: Functions
date: "2020-09-30T12:50:03"
template: "post"
draft: false 
slug: "cpp-functions"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Functions"
description: "A function is multiple statements or other functions that are grouped into one. When it is called, the statements and other functions inside are ran."
---

- [Syntax](#syntax)
- [Declaring and Calling Functions](#declaring-and-calling-functions)
- [Parameters in Functions](#parameters-in-functions)
- [Related](#related)

## Syntax

A function is multiple statements or other functions that are grouped into one. When it is called, the statements and other functions inside are ran. Functions are used to group multiple lines of code that does a bigger or repetitive task to make code more organized and more readable.

Declaration Syntax:

```cpp
int function_name(dataType parameter1, dataType parameter2, ...) {
  // Statements or other functions
  // This part is also called the function body
  return someVariable
}
```

1. `int` - this is the data type of our return value, if the data type is `void` then no return value or return statement is needed.
2. `function_name` - this can be anything and also follow [variable naming conventions](/posts/cpp-Variables-DataTypes)
3. `(parameter1, parameter2, ...)` - parameters are the inputs to your function; these are **optional**
4. `return someVariable` - this is the return statement of your function; in this case our function returns the variable `someVariable`

If the syntax looks familiar to you, that's because the `int main()` part at every program is a function declaration.

## Declaring and Calling Functions

Similar to variables, functions can be referenced in other parts of code in order to run them.

A function is created (but not ran yet) at its declaration. For example we want to create a function that asks the age of 2 users and stores each in separate variables.

Example 1:

```cpp
#include <iostream>

using namespace std;

// Declare askAge() function
int askAge() {
  int age;
  cout << "Enter your age: ";
  cin >> age;
  return age;
}

// Main function
int main() {
  cout << "User 1" << endl;
  int age1 = askAge(); // Call askAge()
  cout << "User 2" << endl;
  int age2 = askAge(); // Call askAge() again

  cout << "User 1 is " << age1 << " and User 2 is " << age2 << endl;

  return 0;
}
```

Output 1:

```
User 1
Enter your age: 12
User 2
Enter your age: 18
User 1 is 12 and User 2 is 18
```

Take note on how the return value gets passed. From the local function's `age` variable return, it gets passed on to `age1` and `age2` or even other variables that we would like.

See how functions can shorten and organize code in the long run? It groups repetitive tasks to a single function that can be called multiple times in different places in your code.

This next example shows a void function. We just shortened a `cout` statement into something faster to type. This is another use of functions, it can save us time and also save us from confusion when writing complex processes that we know for sure we're going to repeat or reuse someplace else. Instead of re-writing that complex process at every place, writing a function then calling it multiple times can save us time. 

Example 2:

```cpp
void greet() {
  cout << "Happy birthday!" << endl;
}

int main() {
  greet();
  greet();
  greet();

  return 0;
}
```

Output 2:

```
Happy birthday!
Happy birthday!
Happy birthday!
```

## Parameters in Functions

Functions can also take in parameters. Think of them as inputs in a function. In the next example we'll make a function that squares (raises to the power of 2) an integer inputted by a user.

Example:

```cpp
int square(int givenNumber) {
  int squaredNum = givenNumber * givenNumber; // Multiply whatever value the parameter is by itself
  return squaredNum;
}

int main() {
  int input;
  cout << "Input a number: ";
  cin >> input;
  int answer = square(input) // Square our input and store it to the variable answer

  // Print out the variable answer
  cout << "The square of the number you inputted is " << answer;

  return 0;
}
```

## Related:

- [Hello World](/posts/cpp-hello-world)
- [Input and Output](/posts/cpp-input-output)
- [Variables and Data Types](/posts/cpp-variables)
- [Arrays](/posts/cpp-arrays)