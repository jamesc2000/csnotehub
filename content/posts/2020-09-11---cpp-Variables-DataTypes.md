---
title: Variables and Data Types
date: "2020-09-11T12:50:03"
template: "post"
draft: false 
slug: "cpp-variables"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Variables"
  - "Data Types"
description: "Variables in C++ are declared with \"DataType varName = value;\". The name of the variable can be anyting you want while putting the value during declaration is optional."
---

- [Anatomy of a Variable](#anatomy-of-a-variable)
- [Basic Data Types](#basic-data-types)
- [Variables in Action](#variables-in-action)
- [References](#references)

## Anatomy of a Variable

Let's take a look at an example.

    int ourVariable = 42;

We can see 3 parts on the variable declaration.
1. `int` - this is our *data type*
2. `ourVariable` - this is the name of the variable
3. `42` - this is the *initial value* of the variable

All variable names must:
- Begin with a letter or an underscore "_".
- Spaces and special characters are not allowed.
- Must **not** be a [reserved word](https://en.cppreference.com/w/cpp/keyword)

## Basic Data Types

Also called **Primitive Data Types**
1. void - holds **nothing**
2. bool - holds **true** or **false**
2. int - holds **whole numbers**
3. float - holds **numbers with decimals**
4. double - holds **numbers with decimals**
5. char - holds **single characters**

## Variables in Action

You can use variables in C++ as like a variable in math. You can save a value on them in order to recall it later and/or multiple times. See the example below:

    #include <iostream>

    using namespace std;

    int main() {
        int variable1 = 12;
        char myLetter = 'G';
        std::cout << variable1 << std::endl;
        std::cout << myLetter << std::endl;

        return 0;
    }

Expected Output:

    12
    G

## References
https://www.tutorialspoint.com/What-are-primitive-data-type-in-Cplusplus
https://en.cppreference.com/w/cpp/keyword