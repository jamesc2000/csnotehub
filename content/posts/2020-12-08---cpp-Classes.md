---
title: Classes and Objects
date: "2020-12-08T16:25:03+08:00"
template: "post"
draft: true 
slug: "cpp-classes-and-objects"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Classes"
  - "Objects"
  - "Object Oriented Programming"
  - "Data Structures"
description: "Classes serve as templates to objects in your program. Classes and objects are the first concepts you need to understand for Object Oriented Programming (OOP). Variables inside classes are called attributes, while functions inside classes are called methods."
---

- [Concepts](#concepts)
- [Syntax](#syntax)
- [Related](#related)

Classes serve as templates to objects in your program. Classes and objects are the first concepts you need to understand for Object Oriented Programming (OOP). Variables inside classes are called attributes, while functions inside classes are called methods.

Object oriented programming at first can be a little bit confusing as the paradigm is different from what you've previously learned. We will introduce some basic concepts and terminology first.

## Concepts

Object-oriented programming is a paradigm in which the software is catered around organizing data or *objects* rather than logic and flow.

1. **Class** - Classes serve as templates or blueprints for your objects. A class is an example of a user-defined data type
  - **Attribute** - *a variable declared inside a class* that can describe a quality or feature in objects using a class
  - **Method** - *a function declared inside a class* that can describe abilities or functions an object using a class can use
2. **Object** - Objects are well, objects, that are derived from a class. It has the same attributes made available from class declarations, and can do the same methods declared in the class as well. If classes are data types, then objects are the variables. 


## Syntax

Declaration Syntax:

```cpp
class ClassName {
  public:
    dataType varName; // These are public attributes
    dataType varName = initial_value;
  private:
    dataType varName; // These are private attributes
};

int main() {
  ClassName objectName; // Instantiate an object from a class
}
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
- [Arrays](posts/cpp-arrays)
- [If Statements Advanced](/posts/cpp-if-statements-advanced)
