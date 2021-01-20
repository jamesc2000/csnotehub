---
title: Classes and Objects
date: "2020-12-08T16:25:03+08:00"
template: "post"
draft: false 
slug: "cpp-classes-and-objects"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Classes"
  - "Objects"
  - "Object Oriented Programming"
description: "Classes serve as templates to objects in your program. Classes and objects are the first concepts you need to understand for Object Oriented Programming (OOP). Variables inside classes are called attributes, while functions inside classes are called methods."
---

- [Concepts](#concepts)
- [Syntax](#syntax)
- [Attributes and Methods](#attributes-and-methods)
  - [Attributes](#attributes)
  - [Methods](#methods)
- [Access Specifiers](#access-specifiers)
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
  public: // Public and private are access specifiers
    dataType varName; // These are public attributes
    dataType varName = initial_value;
  private:
    dataType varName; // These are private attributes
};

int main() {
  ClassName objectName; // Instantiate an object from a class
}
```

## Attributes and Methods

In essence, attributes are just variables defined inside a class, while methods are just functions defined inside a class

### Attributes

In this example, we will try to make a blueprint for a car, therefore we need a Car class. We won't worry about access specifiers for now and we'll define everything under public.

A good starting point on what attributes we need to define for our class, is to think of a real life car. A car, for the sake of our example has the following traits:

1. Color
2. Price
3. Type

```cpp
class Car {
  public:
    string color;
    int price;
    string type;
};
```

It's perfectly fine to put initial values on our attributes, it's one way to have a default value for all cars, but for our example we won't define default values.

After defining our Car class, we can now instantiate any number of cars in our `cpp›main` and then we'll put values for our attributes.

```cpp
int main() {
  Car car1;
  Car car2;
  Car car3;

  // We want to define the color of car1 to red;
  car1.color = "red";

  // We want to define the type of car1 to be a hatchback
  car1.type = "hatchback";

  // We can define the price of car3 to be 500000 dollars
  car3.price = 500000;

  // We can make car3 a truck
  car3.type = "truck";

  // And we can also read back these values our output them
  cout << "Car 1: " << car1.color << " " << car1.type << endl;
  cout << "Car 3: " << car3.price << " " << car3.type << endl;
}
```

In the example we didn't bother with defining all the attributes for all of our cars, but you can do so yourself. One beauty of using classes and objects shines in this example, you can have as many objects as you want without defining separate variables for each object. We simply just use classes and instantiate as many objects as needed while still keeping them unique from each other through different attributes.

### Methods

Continuing with the car example, we will try to add methods to our class. A good starting point for thinking of what methods a class need is to again, look at the real life equivalent. For our purposes, say that we need to have some function that we can call when we need the car to turn, stop, and go. So we'll just define them as methods to our class, so that all of our car objects can use them.

1. Turn
2. Stop
3. Go

```cpp
class Car {
  public:
    string color;
    int price;
    string type;

    void turn(int direction) {
      if (direction == -1) {
        cout << "The car is turning left!\n";
      } else if (direction == 1) {
        cout << "The car is turning right!\n";
      } else {
        cout << "Invalid direction\n";
      }
    }

    void stop() {
      // We can also refence attributes while inside of the class
      // Can you guess what happens if we do this?
      cout << "The " << type << "has stopped\n";
    }

    void go() {
      cout << "The " << type << "is now moving\n";
    }
};

int main() {
  Car car1;
  Car car2;
  Car car3;

  car1.color = "red";
  car1.type = "hatchback";

  car2.type = "van";

  car3.price = 500000;
  car3.type = "truck";
  
  // At the start, we want to make all cars go
  car1.go();
  car2.go();
  car3.go();

  // Then we do specific things to them after that
  car2.stop();

  car1.turn(-1);

  car3.turn(1);
  car3.stop();
}
```

Output:

```
The hatchback has started moving
The van has started moving
The truck has started moving
The van has stopped
The car is turning left
The car is turning right
The truck has stopped
```

As you can see it behaves no different from normal functions. We can pass parameters, return something, etc.

The `cpp›"The " << type << has started moving` statement and the `cpp›stop()` method both read the value of the type attribute while both being inside the same class. It enabled us to read the type of the same object that we called it from (i.e. if we called `cpp›car1.go()`, then `cpp›type` would be equal to whatever the type of car1 is). And if yout notice, if you're referencing an attribute within the same class, we don't need object notation. We can reference it as the variable name itself. (No need for `cpp›car.type`, etc)

## Access Specifiers

When declaring classes, we notice that there are keywords such as `cpp›private: `, and `cpp›public: `. These are called access specifiers. It limits where your attributes and methods can be written to and read from. We have 3 Access Specifiers

1. `cpp›public` - access anywhere (such as from the main function or other functions/classes)
2. `cpp›private` - can only access from the same class you declared
3. `cpp›protected` - can only access from the same class you declared and inherited classes. More about inheritance in future topics.

Example:

```cpp
class Student {
  public:
    int age;
    string university;
    string name;

  private:
    string uniqueId;
    int i = 20;
};

int main() {
  Student student1;
  Student student2;

  student1.age = 18;
  student1.university = "MIT";
  student1.name = "Jane";

  student2.age = 19;
  student2.name = "Adam";
  // All of the above code are fine so far

  // However if we try to access a private
  // attribute or method
  student1.uniqueId = "11ds-9910";
  cout << student1.i << endl;

  // We will get an error
}
```

Great now we just intentionally made our program error out due to private elements. What's the point? Well it's a way of organizing your code and potentially helping you debug your program grows in complexity. Best practice for determining what should be private or public is to determine whether you really need some things to be accessed outside of the class or not. If you made everything public, then if something goes wrong, for example your program is not outputting what you intended, then it'll be hard to track where your mistake was. It could be anywhere. However if you made some things private and only exposed what you need to public, then if something went wrong that you were sure was an element in private, then you can also be sure that your mistake was only inside of the class.

This is especially useful with very large and complex codebases and also when working with other people, or using libraries. Say you want to make your own library for others to use. You don't want to give them access to everything that they may misuse. You only need to make the essentials public.

## Related:

- [Variables and Data Types](/posts/cpp-variables)
- [Functions](/posts/cpp-functions)
- [If Statements Advanced](/posts/cpp-if-statements-advanced)
