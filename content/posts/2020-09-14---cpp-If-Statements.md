---
title: If Statements
date: "2020-09-14T12:50:03"
template: "post"
draft: false 
slug: "cpp-if-statements"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "If"
  - "Flow"
description: "C++ and other programming languages use if statements to control the flow of the program. Syntax: if (condition) { //code }"
---
- [If Statement](#if-statement)
- [If...Else](#if...else)
- [If...Else If](#if...else-if)
- [Related](#related)

If statements in C++ and other programming languages are used to control the flow of the program. Code put inside the brackets `{ }` of the if statement are only ran if the condition inside the parentheses `( )` are true.

## If Statement

Example:

```cpp
int main() {
    if (1 + 1 == 3) {
        cout << "Neat!";
    }
    cout << "foo" << endl;

    return 0;
}
```

The code above would compile but it wouldn't output anything. This is because the if statement is **checking** if `1 + 1` is equal to `3`, in this case it isn't, therefore would skip to the code that comes after the if statement (if applicable).

## If...Else

Example 1:

```cpp
int main() {
    if (1 + 1 == 2) {
        cout << "Neat!" << endl;
    } else {
        cout << "That condition was false." << endl;
    }
    cout << "foo";

    return 0;
}
```

Output:

```
Neat!
foo
```

The code above would run but this time the condition inside the if statement is true, therefore it will output `Neat!`. However, it won't run the statement inside the `else` block, because that only runs when the condition is false.

foo still gets outputted because it is outside the if statement. It gets outputted regardless of what happens inside the if block.

Example 2:

```cpp
int main() {
    if (1 + 1 == 3) {
        cout << "Neat!" << endl;
    } else {
        cout << "That condition was false." << endl;
    }
    cout << "foo";

    return 0;
}
```

This is almost the same code as above with the only difference is that the condition of the if statement should be false, therefore it will run the code inside the else block but not run the code inside the if block.

Output:

```
That condition was false.
foo
```

## If...else if

If...else is cool and all, but what about for when you want else only to run if a certain condition is met as well? This is where else if comes in.

Example 1:

```cpp
int main() {
    if (1 + 1 == 3) {
        cout << "Nice";
    } else if (1 + 1 == 2) {
        cout << "Cool";
    }
    cout << "foo";
}
```

The example above works similarly to the one in [If...Else](#if...else), but this time we explicitly tell the compiler that only run the else if block if the original if condition failed **and** the if else condition passes.

Example 2:

```cpp
int main() {
    if (1 + 1 == 3) {
        cout << "Nice";
    } else if (1 + 1 == 0) {
        cout << "Cool"
    }
    cout << "foo";
}
```

Output:

```
foo
```

See how this one only outputted `foo`? That happened because both the if condition and the else if condition failed.

If statements and other related statements are very powerful. It's one of the most used statements in programming. To make best use of these, it's best to use variables in tandem. This makes it so that your program can handle variable inputs and do operations accordingly.

## Related:

- [Variables and Data Types](/posts/cpp-variables)