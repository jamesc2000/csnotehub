---
title: Inheritance
date: "2021-03-26T16:25:03+08:00"
template: "post"
draft: false
slug: "cpp-inheritance"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Classes"
  - "Functions"
  - "Object Oriented Programming"
description: "Inheritance is a way to base a class to a parent class. The inherited class inherits the attributes and methods of the parent class."
---

- [Types of Inheritance](#types-of-inheritance)
- [Syntax](#syntax)
- [Related](#related)

Inheritance is a way to base a class to a parent class. The inherited class inherits the attributes and methods of the parent class. Another advantage of using classes is that you can inherit one class from a base class or sometimes known as a parent class. This is useful when you're planning to make a second class that has the same features as another class but want to add more attributes and methods while keeping it distinct.

## Types of Inheritance

There are five types of inheritance, namely:

- Single Inheritance - the parent has one child
- Multiple Inheritance - multiple parents, one child
- Hierarchical Inheritance - single parent, multiple children
- Multilevel Inheritance - the parent has children, grandchildren, and so on and so forth
- Hybrid Inheritance - a combination of multiple types of inheritance

## Syntax

To inherit a class from a base class simply use the syntax

```cpp
class SubClass : public BaseClass { ... };
```

Example:

```cpp
class Item {
  public:
    string name;
    double price;

  private:
    string id;
};

class Weapon : public Item {
  public:
    int damage;
    int durability;
};

class Consumable : private Item {
  public:
    string effect;
    int effect_multiplier;
}
```

The `Weapon` class is derived from the `Item` class. This results in the `Weapon` class having the following attributes:

*Notice how private attributes or methods do not get inherited*

- **Weapon**
  - public
    - name
    - price
    - damage
    - durability
  - private
    - *nothing*

The `Consumable` class is also derived from the `Item` class, but take note of the `private` access specifier on the class declaration. This means that the public and protected classes from the base class will become a private attribute or method of the sub class. The `Consumable` class will now have the following attributes:

*Notice how the `name` and `price` attributes from the base class, are inherited to the private parts of the `Consumable` class.*

- **Consumable**
  - public
    - effect
    - effect_multiplier
  - private
    - name
    - price

## Related:

- [Constructors](/posts/cpp-constructors)
- [Variables and Data Types](/posts/cpp-variables)
- [Functions](/posts/cpp-functions)
- [Classes and Objects](/posts/cpp-classes-and-objects)
