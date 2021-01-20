---
title: Stacks 
date: "2020-12-21T16:25:03+08:00"
template: "post"
draft: false 
slug: "cpp-stacks"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Stacks"
  - "Data Structures"
description: "Stacks are homogenous data structures (they can only store elements of the same kind) like arrays, but they're different from normal arrays such that you can only add or remove items from the top of the stack. This nature is also called, Last in, First out (LIFO)"
---

- [Making/Declaring a Stack manually with arrays](#makingdeclaring-a-stack-manually-with-arrays)
- [Making/Declaring a Stack using the <stack> header](#makingdeclaring-a-stack-using-the-stack-header)
- [Reading and Writing](#usage)
- [Methods/Functions available to the <stack> header](#methodfunctions-available-to-the-stack-header)
- [Related](#related)

Stacks are homogenous data structures (they can only store elements of the same kind) like arrays, but they're different from normal arrays such that you can only add or remove items from the top of the stack. This nature is also called, Last in, First out (LIFO).

Stacks are called such because they function similarly to a real life stack, say for example, a stack of books. If you have a stack of books, you first need to take out items on the very top before you can take out items below it. In short, you can only take out the last thing you put in, and whatever you put in always goes to the top.

## Making/Declaring a Stack manually with arrays

To make things simple, we will use [functions](/posts/cpp-functions), we need to have the following three to start with

1. Something to display the item at the top
2. Something to add(push) items
3. Something to remove(pop) items

```cpp
#include <iostream>

using namespace std;

int stackName[8]; // 8 is the max for our stack, but yours can have any
int topIndex = -1; // If our stack is empty then the top is index -1
                   // If it has one thing, top is at index 0, etc

// This function lets us see the top element
int top() {
  int topItem;
  if (topIndex == -1) { // Check first if
    return NULL;         // stack is empty
  } else {
    return stackName[topIndex];
    }
}

// This function lets us add items
void push(int element) {
  stackName[topIndex+1] = element;
  topIndex++; // Let program know that the top is now 1 higher than before
}

// This function removes the top element
void pop() {
  if (topIndex == -1) {
    cout << "Stack underflow!\n";
  } else {
    stackName[topIndex] = 0; // Replace top element with 0
    topIndex--;
  }
}

int main() {
  push(3);
  push(1);
  push(6);
  cout << top() << endl; // Should output 6
  pop();
  cout << top() << endl; // Should output 1

  return 0;
}
```

This crude implementation of a stack is not advised because you cannot have multiple stacks in your program. But it's sufficient in demonstrating the basic capabilities of a stack and its difference from other data structures.

## Making/Declaring a Stack using the <stack> header

A much more useful and practical way of dealing with stacks is using the built-in c++ `<stack>` header.

```cpp
#include <iostream>
#include <stack>

using namespace std;

int main() {
  stack<int> stackName;
  stack<char> stack2;

  stackName.push(3);
  stackName.push(1);
  stackName.push(9);

  cout << stackName.top() << endl; // Should display 9

  stackName.pop();
  stackName.pop();

  cout << stackName.top() << endl; // Should display 3

  stack2.push('c');

  return 0;
}
```

To declare a new stack simply follow the declaration syntax

```cpp
stack<dataType> name; // Where name is any valid variable name
```

and you can now access the member functions available to stacks.

## Methods/Functions available to the <stack> header

| Function | Description |
| :--------|------------ |
| `cpp›empty()`  | Returns `true` if the stack is empty, `false` if otherwise |
| `cpp›size()`   | Returns an integer representing how many elements are in the stack|
| `cpp›top()`    | Returns the top element of the stack |
| `cpp›push(element)` | Pushes an element to the stack via a parameter |
| `cpp›pop()` | Removes the top element of the stack |

To use these methods follow the syntax

```cpp
stackName.empty()
```

Replacing `stackName` and `empty()` with the name of your stack and the method of your choice.

## Related:

- [Variables and Data Types](/posts/cpp-variables)
- [Arrays](/posts/cpp-arrays)
- [Functions](/posts/cpp-functions)
- [Structs](/posts/cpp-structs)
