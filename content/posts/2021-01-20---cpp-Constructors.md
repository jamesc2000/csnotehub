---
title: Constructors 
date: "2021-01-20T16:25:03+08:00"
template: "post"
draft: false 
slug: "cpp-constructors"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Classes"
  - "Functions"
  - "Object Oriented Programming"
description: "Constructors are a special type of method in a class. A constructor is defined by declaring a function (a method) inside our class with the same name as the class"
---

- [Concepts](#concepts)
- [Syntax](#syntax)
- [Attributes and Methods](#attributes-and-methods)
  - [Attributes](#attributes)
  - [Methods](#methods)
- [Access Specifiers](#access-specifiers)
- [Related](#related)

## Constructors as a Way of Instantiation

Constructors are a special type of method in a class. A constructor is defined by declaring a function (a method) inside our class with the same name as the class. You may find it easier and cleaner to instantiate objects from a class using a constructor rather than the [default method](/posts/cpp-classes-and-objects##Syntax).

Example:

```cpp
#include <iostream>

using namespace std;

class Enemy {
  public:
    string name;
    int health;
    string uniqueId;

    Enemy(string t_name, int t_health) {
      // t_name and t_health can be the same as the actual attribute name
      // it's only done this way to emphasize that it doesn't have to be
      // the same name and health variable
      name = t_name
      health = t_health;
      // You don't have to have a parameter for every single attribute.
      // Note how we didn't include the string uniqueId
    }
};

int main() {

  // Call the constructor to instantiate a new enemy
  Enemy("Zombie", 10); // This will create a zombie with 10 health
  Enemy("Spider", 5); // This will create a spider with 5 health

  // The equivalent default method goes like this,   
  // notice how much code you save if you use constructors
  Enemy Zombie1;
  Zombie1.name = "Zombie";
  Zombie1.health = 10;

  Enemy Spider1;
  Spider1.name = "Spider";
  Spider1.health = 5;

  return 0;
}
```

## Constructors get called whenever a new instance is created

Besides calling constructors to instantiate an object, the converse is also the same. The constructor also gets called whenever you instantiate an object.

Example:

```cpp
#include <iostream>

using namespace std;

class Enemy {
  public:
    string name;
    int health;

    Enemy(string t_name, int t_health) {
      name = t_name
      health = t_health;

      cout << "New Enemy!\n"; // Whenever we instantiate, this gets printed
    }
};

int main() {

  Enemy("Zombie1", 10); // This will create a zombie with 10 health

  // The equivalent default method goes like this,   
  // notice how much code you save if you use constructors
  Enemy Zombie2;
  Zombie2.name = "Zombie2";

  return 0;
}
```

Output:

```
New Enemy!
New Enemy!
```

`New Enemy!` gets printed twice, because we instantiated the first zombie using the constructor, and the second using the [default method](/posts/cpp-classes-and-objects##Syntax) of instantiation.

## Related:

- [Variables and Data Types](/posts/cpp-variables)
- [Functions](/posts/cpp-functions)
- [Classes and Objects](/posts/cpp-classes-and-objects)
