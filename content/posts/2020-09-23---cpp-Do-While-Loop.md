---
title: Do While Loop 
date: "2020-09-23T12:50:03"
template: "post"
draft: false 
slug: "cpp-do-while-loop"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Do While"
  - "Flow"
  - "Loop"
description: "The difference between while and do while is that the code inside the scope { } of the loop is ran first before evaluating the condition."
---

- [Basic Syntax](#basic-syntax)
- [Related](#related)

The difference between do while and a normal [while loop](/posts/cpp-while-loop) is that the code inside the scope { } of the loop is ran first before evaluating the condition.

## Basic Syntax

Do...while loops are similar to while loops in a way that they both only need a condition. Only the order of execution and evaluation are different between the two. This makes it so that the program is required to execute the loop at least once.

```cpp
#include <iostream>

using namespace std;

int main() {
  int i = 0

  do {
    cout << i << endl;
  } while (i < 0)


  return 0;
}
```

Output:

```
0
```

Even though the condition inside our while loop is false, the code will still run atleast once because the condition is not checked for the first iteration. If we did the same thing with a normal while loop like this:

```cpp
int main() {
  int i = 0
  while (i < 0) {
    cout << i << endl;
  }
  return 0;
}
```

We will get **no output**, because the condition is checked first before running anything inside the loop.

### The program does these steps:

1. Declare i to be equal to 0 (This is not part of the loop)
2. Output the current value of i
3. Check if i is less than 0, if it is, return to step 2, if not, go to step 4
4. End the program

## Related:

- [Input and Output](/posts/cpp-input-output)
- [Variables and Data Types](/posts/cpp-variables)
- [If Statements 2](/posts/cpp-if-statements-advanced)
- [While Loop](/posts/cpp-while-loop)
- [For Loop](/posts/cpp-for-loop)