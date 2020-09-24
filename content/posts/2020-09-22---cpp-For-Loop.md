---
title: For Loop
date: "2020-09-22T12:50:03"
template: "post"
draft: false 
slug: "cpp-for-loop"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "For"
  - "Flow"
  - "Loop"
description: "For loops are best used when looping a pre-determined amount of times or until a condition is met through iteration. Syntax: for (declaration; condition; increment) { code }"
---

- [Basic Syntax](#basic-syntax)
- [Advanced Use Cases](#advanced-use-cases)
- [Even Numbers 1-100](#even-numbers-1-100)
- [Related](#related)

## Basic Syntax

For loops are used whenever you want to increment or decrement your condition variable for every iteration of the loop. Instead of only a condition, a for loop takes in a variable declaration, a condition to check that variable, and an increment/decrement to that variable.

```cpp
#include <iostream>

using namespace std;

int main() {
  // i starts at 0, the loop end when i reaches 10, i is incremented every iteration
  for (int i=0; i <= 10; i++) {
    cout << "Repeat this 10 times" << endl;
  }

  return 0;
}
```

The `int i=0` inside the `( )` of the for loop is the declaration. In simple terms, the for loop starts at 0.

The `i <= 10` means the for loop will only run while `i` is less than or equal to 10.

The `i++` means add 1 to `i` every iteration/cycle of the loop.

## Advanced Use Cases

You can call the variable you declared in the for loop in its body.

```cpp
int main() {
  for (int i=0; i <= 5; i++) {
    cout << "This is iteration no. " << i << endl;
  }
  return 0;
}
```

Output:

```
This is iteration no. 0
This is iteration no. 1
This is iteration no. 2
This is iteration no. 3
This is iteration no. 4
This is iteration no. 5
```

### The program does these steps:

1. Declare the integer i and equates it to 0
2. Check if i is less than or equal to 5, if it is go to step 3, if it's not, skip to step 6
3. Output "This is iteration no. *the current value of i*
4. Increase i by 1
5. Go back to step 2
6. End the program

## Even Numbers 1-100

In this example, we'll try a basic implementation of a for loop to achieve the output below. We will only output even numbers from 1 to 100.

Output:

```
2
4
6
8
10
...
```

Code:

```cpp
#include <iostream>

using namespace std;

int main() {
  // Start at 1, end at 100
  for (int i=1; i <= 100; i++) {
    // Check if the current value of i is
    // divisible by 2
    if (i % 2 == 0) {
      cout << i << endl;
    }
  }
  return 0;
}
```

## Related:

- [Input and Output](/posts/cpp-input-output)
- [Variables and Data Types](/posts/cpp-variables)
- [If Statements 2](/posts/cpp-if-statements-advanced)
- [While Loop](/posts/cpp-while-loop)
- [Do While Loop](/posts/cpp-do-while-loop)