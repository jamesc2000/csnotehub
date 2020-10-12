---
title: Python If Statements
date: "2020-10-12T16:25:03+08:00"
template: "post"
draft: false 
slug: "py-if-statements"
category: "Python"
tags:
  - "Python"
  - "Tutorial"
  - "If"
  - "Flow Control"
description: "An if statement in python uses the keyword if, then the block of code that the if statement runs is denoted by indentation. An if statement is useful when you want to redirect the flow of your program and act accordingly to user input"
---

- [Syntax](#syntax)
- [Else and Elif](#else-and-elif)
  - [Else](#else)
  - [Elif](#elif)
- [Related](#related)

An if statement in python uses the keyword if, then the block of code that the if statement runs is denoted by indentation. An if statement is useful when you want to redirect the flow of your program and act accordingly to user input.

## Syntax

Python if statements follow the syntax:

```python
if (condition)
  print("hello")
  var = 2

print("Output this regardless if T or F")
```

1. `if(condition)` - `condition` can be any boolean variable or logical condition
2. `print("hello")` and `var = 2` - These two lines are indented, which means this scope is what the if statement will run if the condition is true
3. `print("Output this regardless if T or F")` - This will be outputted regardless whether the condition is true or false

## Else and Elif

### Else

An else statement runs when the initial condition inside the `if` is false. For example:

Example 1:

```python
number = 2

if (number + 3 == 5)
  print("The condition is true")
else
  print("The condition is false")
```

Output 1:

```
The condition is true
```

The condition is true because 2 + 3 is equal to 5.

Example 2:

```python
number = 3

if (number + 3 == 5)
  print("The condition is true")
else
  print("The condition is false")
```

Output 2:

```
The condition is false
```

The condition is false because 3 + 3 is NOT equal to 5.

### Elif

Elif is short for "else if", think of it as like another else statement that runs when the if statement is false, but it also allows you to check for another condition.

Example 3:

```python
number = 7

if (number + 2 == 5)
  print("The condition is true")
elif (number == 5)
  print("The number is 5")
elif (number == 7)
  print("The number is 7")
else
  print("All of the conditions are false")
```

Output 3:

```
The number is 7
```

## Related:

- [Python - Installation Hello World](/posts/py-hello-world)
- [C++ - Hello World](/posts/cpp-hello-world)