---
title: Python Variables
date: "2020-10-11T16:25:03+08:00"
template: "post"
draft: false 
slug: "py-variables"
category: "Python"
tags:
  - "Python"
  - "Tutorial"
  - "Variables"
  - "Data Types"
  - "Introduction"
description: "Variables in Python does not need to be declared with a data type unlike statically typed languages. This nature of not needing a declared data type is called dynamic typing. You can declare a variable in Python just by assigning a value to it with varName = value"
---

- [Syntax](#syntax)
- [Reading and Writing to/from Variables](#reading-and-writing-tofrom-variables)
  - [Reading](#reading)
  - [Writing](#writing)
- [Related](#related)

Variables in Python does not need to be declared with a data type unlike statically typed languages. This nature of not needing a declared data type is called dynamic typing. You can declare a variable in Python just by assigning a value to it with `varName = value`.

This however does not mean that python does not have data types. It's just that the data type of a variable can change freely, hence the term *dynamic typing*.

## Syntax

Python variables are created with the following syntax:

```python
varName = 2
otherVar = "a string"
_thisIsValid = 3.14
```

1. `varName` - this is the name of your variable; this can be anything as long as it:
  - starts with a letter or an underscore (_)
  - does not start with a number
  - only contains alpha-numeric characters (a-z), (A-Z), (0-9), and (_)
2. `2` - the value assigned to the variable

Note: 
1. Variable names are case sensitive, varName and varname does not correspond to the same thing
2. `varName`, `otherVar`, and `_thisIsValid` are different variables, hence the different names, in the sample code

## Reading and Writing to/from Variables

### Reading

To read a value of a variable, you can simply put it in any statement like follows:

```python
print(otherVar)
print(varName + _thisIsValid)
```

The first line outputs `a string` to the console because that's the value of the variable.

The second line evaluates as `2 + 3.14` outputting `5.14`.

### Writing

To assign (or write) a value to a variable, we use the same syntax as creating it. But we can also overwrite the values of existing variables

```python
newVariable = 123
print(newVariable)
newVariable = "foo"
print(newVariable)
```

The first print statement will output `123`

The second print statement will output `foo`

## Related:

- [Python - Installation Hello World](/posts/py-hello-world)
- [C++ - Hello World](/posts/cpp-hello-world)