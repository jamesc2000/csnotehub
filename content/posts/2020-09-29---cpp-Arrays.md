---
title: Arrays 
date: "2020-09-29T12:50:03"
template: "post"
draft: false 
slug: "cpp-arrays"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Data Types"
  - "Arrays"
description: "Arrays work similarly to sets in math. It's a collection of elements, but arrays are ordered through an index. The index of an element in an array is just its position from the start starting from index 0."
---

- [Making/Declaring an Array](#makingdeclaring-an-array)
  - [Declaration parts](#declaration-parts)
  - [Declaring with initial values](#declaring-with-initial-values)
- [Reading and Writing Values to an Array](#reading-and-writing-values-to-an-array)
- [Iterating Through an Array Using For Loops](#iterating-through-an-array-using-for-loops)
- [Related](#related)

Arrays work similarly to sets in math. It's a collection of elements, but arrays are ordered through an index. The index of an element in an array is just its position from the start starting from index 0.

## Making/Declaring an Array

An array declaration looks like this `int arrayName[5]`

This declaration will give us an array named `arrayName` that can hold 5 integers.

![Visual guide of an empty array with length 5](/media/graphic-cpp-arrays-1.png)

The golden boxes in the figure represents the elements inside of the array. It's empty for now because we didn't set initial values for it.

The black boxes from 0 - 4 are the indexes of the array. Array indexes always start at 0 therefore the last index of an array is always -1 of the length

### Declaration parts

- `int` - the [data type](/posts/cpp-variables#basic-data-types) of each element of the array
- `arrayName` - the name of the array \(this can be anything and also follows [variable naming rules](/posts/cpp-variables#variable-naming-rules)\)
- `[5]` - the length of the array. In this case, the maximum amount of elements our array can hold is 5

### Declaring with initial values

Like variables, arrays can have initial values that can be set during declaration.

`int arrayName[5] = [12, 5, 15, 78, 32]`

![Array declared with initial values](/media/graphic-cpp-arrays-2.png)

## Reading and Writing Values to an Array

You can set each individual element per *index* in an array. You can also read them.

### Writing

```cpp
int numbers[4] // Declare empty array with length 4
numbers[0] = 45 // Write the number 45 to the 0th index
```

\* *You don't have to put the two lines in the snippet on top of each other in your code*

![Write 45 to 0th index of array](/media/graphic-cpp-arrays-3.png)

Example:

```cpp
#include <iostream>

using namespace std;

int main() {
  int numbers[4] // Declare array

  // Do other stuff

  numbers[0] = 45;
}
```

This is just an example of writing to an array. You can also use the `>>` operator when writing user input to the array the same as you would to a variable.

### Reading

You can read the value of an array similar to how you would do it to variables, but you need to include the specific index you are reading.

Example:

```cpp
#include <iostream>

using namespace std;

int main() {
  int numbers[4] = [45, 2, 5, 35];

  cout << numbers[0] << endl; // Prints 45
  cout << numbers[3] << endl; // Prints 35
}
```

## Iterating Through an Array Using For Loops

Using loops and arrays are very useful. You can iterate through the elements of an array usually using a for loop.

In this example, we'll receive 5 numbers from the user, store it in an array, then output it back in reverse order.

Example:

```cpp
int main() {
  int inputs[5]; // We leave this empty because the user will fill this up

  cout << "Enter 5 numbers, press enter after each number" << endl;

  for (int i = 0; i < 5; i++) { // Count from 0 to 4 then end the loop
    cin >> inputs[i]; // Save the input to the array at index i
    // See why we put the variable i as the index?
    // At the first iteration of the loop we write to 0
    // At the second iteration of the loop we write to 1
    // ...
  }

  // At this part, we'll print what the array contains
  // but in the reverse order the user entered.

  for (int i = 4; i >= 0; i--) { // Count from 4 to 0
    cout << inputs[i];
    // This time i starts at 4
    // So at the first iteration inputs[4] gets outputted
    // At the sencond, inputs[3] gets outputted
    // ...
  }

}
```

## Related:

- [Input and Output](/posts/cpp-input-output)
- [Variables and Data Types](/posts/cpp-variables)
- [For Loop](/posts/cpp-for-loop)