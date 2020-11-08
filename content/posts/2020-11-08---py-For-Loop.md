---
title: Python For Loops 
date: "2020-11-08T16:25:03+08:00"
template: "post"
draft: false 
slug: "py-for-loop"
category: "Python"
tags:
  - "Python"
  - "Tutorial"
  - "For"
  - "Flow"
  - "Loop"
description: "Reading user input is an important part of a program. To collect user input from the terminal in Python, we use the input() method. To store user input to a variable, use 'variable = input()'"
---

- [Basic Syntax](#syntax)
- [Application](#application)
- [Related](#related)

For loops are a type of loop that iterates (cycles through) items of any sequence. A sequence can be a string or a list.

## Syntax

```python
myList = ['apples', 'oranges', 'grapes']

for item in myList:
	print(item)
```

1. `myList = ['apples', 'oranges', 'grapes']` - declares a list containing apples, oranges, and grapes
2. `for item in myList` - the keywords for a for loop are `for` and `in`, `item`and `myList` are variables and can take in any name
	- `item` - this variable will hold **one** element (the current element) when cycling through the sequence
	- `myList` - this is the name of our sequence that we wish to cycle through
3. `print(item)` - prints the value of the variable `item`

For loops can also be used with the range() function if you do not want to count over a sequence, but instead want an arithmetic progression

Example 1:

```python
for i in range(4):
	print(i)
```

Output 1:

```
0
1
2
3
```

Example 2:

```python
for i in range(0, 10, 2)
	print(i)

# This code will count 0, 2, 4, 6, 8
```

The `range()` function can take in 3 parameters
`range(start, stop, step)`
1. Start determines the beginning of the progression
2. Stop determines the end of the progression
3. Is called the step, or the difference between consecutive elements in the progression

This behavior will make it similar to C++ for loops

## Application

For loops in Python are used mostly in tandem with [lists](/posts/py-list) or strings.

In this example we'll try to output all elements inside a list.

Example 2:

```python
shoppingList = ["flour", "rice", "oil", "apples"]

for item in shoppingList:
	print("You need to buy", item)
```

Output:

```
You need to buy flour
You need to buy rice
You need to buy oil
You need to buy apples
```

## Related:

- [Python - Installation Hello World](/posts/py-installation)
- [Python - Variables](/posts/py-variables)
- [Python - If Statements](/posts/py-if-statements)
