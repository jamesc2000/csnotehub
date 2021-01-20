---
title: Structs 
date: "2020-12-06T16:25:03+08:00"
template: "post"
draft: false 
slug: "cpp-structs"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Structs"
  - "Data Structures"
description: "Structs or structures in c++ are collections of related data items, possibly of different types (heterogenous)."
---

- [Syntax](#syntax)
- [Usage](#usage)
- [Related](#related)

Structs or structures in c++ are collections of related data items, possibly of different types (heterogenous). The elements inside a struct are called members.

Structs are different from arrays because arrays can only hold elements with the same data type, while structs can hold members with different or mixed data types.

## Syntax

Declaration Syntax:

```cpp
struct StructName {
  int member1 = 12;
  float member2;
  dataType memberName = initial_value;
};

structName objectName;
```

To declare a struct we use the above syntax. Note the semicolon after the `}`.
After declaring your own structure, we must instantiate at least one object that uses your struct in order to use it.

## Usage 

We can access (read or write) values in a struct's member like the following example.

```cpp
int main() {
  struct Meal {
    // A struct with 3 members, calories, cookingTime, and
    // isBeverage. The third member has an initial value
    double calories;
    int cookingTime;
    bool isBeverage = false;
  };

  Meal hamburger; // hamburger is an object name
  Meal shake; // shake is also an object name

  hamburger.calories = 300;
  hamburger.cookingTime = 30;
  // By default all meals are not beverages

  shake.calories = 180.5;
  shake.isBeverage = true; // Override default initial value

  cout << hamburger.calories;

  return 0;
}
```

The `.` is called the member selector. With the notation `objName.member` we can access the value of that member just like any other variable.

## Related:

- [Variables and Data Types](/posts/cpp-variables)
- [Arrays](/posts/cpp-arrays)
- [If Statements Advanced](/posts/cpp-if-statements-advanced)
