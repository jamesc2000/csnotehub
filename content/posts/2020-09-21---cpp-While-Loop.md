---
title: While Loop
date: "2020-09-21T12:50:03"
template: "post"
draft: false 
slug: "cpp-while-loop"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "While"
  - "Flow"
  - "Loop"
description: "While loops check the condition before proceeding with an iteration of the code inside its scope. Syntax: while (condition) { cout << \"something\"; }"
---

- [Basic Syntax](#basic-syntax)
- [Advanced Use Cases](#advanced-use-cases)
- [Related](#related)

## Basic Syntax

While loops first test the condition before running whats inside its scope. Following the same logic with if statements, while that condition is true, the loop will continue to run.

```cpp
#include <iostream>

using namespace std;

int main() {
    // The condition is always true, the loop will run forever
    while (true) {  
        cout << "Infinite loop!" << endl;
    }

    return 0;
}
```

**Stop infinite loops by pressing `CTRL + C`**

## Advanced Use Cases

In this section we'll make a program that counts from 0 to 25. We first need to have a variable because we need something to increase by 1 every iteration, and then the while loop should check if that variable is still less than 25.

```cpp
int main() {
    int counter = 0; // We will start from 0
    // If counter is below or equal to 25, run
    while (counter <= 25) { 
        cout << counter << endl;
        counter++ // The ++ means increase this variable by 1
    }

    return 0;
}
```

### The program does these steps:

1. Set the counter to 0
2. Check if the counter is less than or equal to 25, if it is go to step 3, if it's greater than 25, go to step 6
3. Output the current value of `the counter
4. Increase the counter by 1
5. Go back to step 2
6. End the program

## Related:

- [Input and Output](/posts/cpp-input-output)
- [Variables and Data Types](/posts/cpp-variables)
- [If Statements 2](/posts/cpp-if-statements-advanced)
- [For Loop](/posts/cpp-for-loop)
- [Do While Loop](/posts/cpp-do-while-loop)
