---
title: If Statements 2
date: "2020-09-17T12:50:03"
template: "post"
draft: false 
slug: "cpp-if-statements-advanced"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "If"
  - "Flow"
description: "C++ and other programming languages use if statements to control the flow of the program. Syntax: if (condition) { //code }. C++ variables are best used with variables. The example below tests if the input is even or odd."
---

- [Using With Variables](#using-with-variables)
- [Even/Odd](#evenodd)
- [Related](#related)

## Using with variables

If statements are also more useful if used together with [variables](/cpp-variables) and [input/output](/cpp-input-output). 

Let's say in our program that if the user inputted a number less than 5, it outputs `Too low`, while if the user inputs a number greater than 5, it outputs `Too high`, however if the user inputs exactly 5 the program outputs `Just right`.

Example:

    #include <iostream>

    using namespace std;

    int main() {
        int input;

        cout << "Input a number:" << endl;

        cin >> input;

        if (input == 5) {       // Checks if input is equal to 5
            cout << "Just right" << endl;
        } else if (input < 5) { // Checks if input is less than 5
            cout << "Too low" << endl;
        } else if (input > 5) { // Checks if input is more than 5
            cout << "Too high" << endl;
        }

        return 0;
    }

The `==` operator compares the values if they are the same.

Output 1:

    Input a number:
    3
    Too low

Output 2:

    Input a number:
    8
    Too high

## Even/Odd

An example of if statements in action is a program that will determine if the number the user inputted is even or odd. First let's lay some math.

- When a number is divided by 2 then has **no remainder** then the number is **even**
- When a number is divided by 2 then has **a remainder** then the number is **odd**

To determine the remainder we can simply use the modulo operator denoted with `%` (ex. `10 % 2`). The example is the same as dividing 10 by 2, but instead of returning the quotient, we'll get the remainder.

Let's modify the main function of our previous program.

Example:

    int main() {
        int input;

        cout << "Enter a number: << endl;

        if (input % 2 == 0) {        // Checks if remainder is 0
            cout << "The number you entered is even" << endl;
        } else if (input % 2 != 0) { // Checks if remainder is not 0
            cout << "The number you entered is odd" << endl;
        }

        return 0;
    }

The `!=` operator checks if the values are **not** the same.

## Related:

- [Input and Output](/posts/cpp-input-output)
- [Variables and Data Types](/posts/cpp-variables)
- [If Statements](/posts/cpp-if-statements)