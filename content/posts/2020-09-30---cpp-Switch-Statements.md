---
title: Switch Statements 
date: "2020-10-01T16:25:03+08:00"
template: "post"
draft: false 
slug: "cpp-switch-statements"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Switch"
  - "Flow"
description: "Switch statements are an alternative to daisy-chaining if-else statements. It takes in a case variable then compares its value to predetermined cases then runs code depending on which cases match."
---

- [Syntax](#syntax)
- [Making a Selection Menu](#making-a-selection-menu)
  - [Removing the break statement](#removing-the-break-statement)
- [Related](#related)

Switch statements are an alternative to daisy-chaining if-else statements. It takes in a case variable then compares its value to predetermined cases then runs code depending on which cases match.

## Syntax

Declaration Syntax:

```cpp
switch (caseVar) {
  case caseMatch1:
    ...
    break;
  case caseMatch2:
    ...
  case caseMatch3:
    ...
    break;
  default:
    ...
}
```

1. `switch(caseVar)` - caseVar can be any previously declared variable; this is the variable that the switch statement will compare to the predetermined cases
2. `case caseMatch1:` - the program will check if the value of caseVar returns the same thing as caseMatch1, if it is, it runs that case.
3. `break` - the break statement escapes the switch statement; it tells the program that after running the statements in that case to not check the other cases if they match as well. `break` **is optional**
4. `default:` - the program runs the statements under the default case when no other cases matche; **having a default case is optional**

Switch statements do the exact same thing as the code below. It's up to you to determine which among the two results in cleaner code.

```cpp
if (caseVar == caseMatch1) {
  ...
} else if (caseVar == caseMatch2) {
  ...
} else if (caseVar == caseMatch3) {
  ...
} else {
  ...
}
```

## Making a Selection Menu

With console applications, you don't have much of a choice besides a crude menu system that uses numbers for users to navigate. Switch statements are commonly found in these kinds of applications.

Example 1:

```cpp
#include <iostream>

using namespace std;

int main() {
  int choice;
  int num1, num2;
  int answer;

  cout << "Calculator v0.1 beta" << endl;
  cout << "Choose an operation" << endl;
  cout << "[1] Addition" << endl;
  cout << "[2] Subtraction" << endl << endl;
  cout << "[0] Exit Program" << endl << endl;

  cin >> choice; // Ask for user input and store it to choice

  switch (choice) { // Case depends on the variable choice
    case 1:
      cout << "[Addition] Input 2 numbers" << endl;
      cout << "Num1: ";
      cin >> num1;
      cout << "Num2: ";
      cin >> num2;

      answer = num1 + num2;
      cout << answer << endl;
      break; // Exit the switch statement after above code
    case 2:
      cout << "[Subtraction] Input 2 numbers" << endl;
      cout << "Num1: ";
      cin >> num1;
      cout << "Num2: ";
      cin >> num2;

      answer = num1 - num2;
      cout << "Answer: " << answer << endl;
      break; // Exit the switch statement after above code
    case 0:
      cout << "Exiting program..." << endl;
      break;
    default:
      // Code inside default will only run if there are no matches
      cout << "Invalid option" << endl;
  }
  cout << "Thank you for using my calculator" << endl; // This gets ran regardless

  return 0;
}
```

Output 1:

```
Calculator v0.1 beta
Choose an operation
[1] Addition
[2] Subtraction

[0] Exit Program

2
[Subtraction] Input 2 numbers
Num1: 5
Num2: 7
Answer: -2
Thank you for using my calculator!
```

Try copying and pasting the above code and play around with different inputs. 

### Removing the break statement

You might also be wondering what happens if you don't put break statements in switches. See what happens in the example below:

Example 2:

```cpp
int main() {
  int choice;
  int num1, num2;
  int answer;

  cout << "Calculator v0.1 beta" << endl;
  cout << "Choose an operation" << endl;
  cout << "[1] Addition" << endl;
  cout << "[2] Subtraction" << endl << endl;
  cout << "[0] Exit Program" << endl << endl;

  cin >> choice; // Ask for user input and store it to choice

  switch (choice) { // Case depends on the variable choice
    case 1:
      cout << "[Addition] Input 2 numbers" << endl;
      cout << "Num1: ";
      cin >> num1;
      cout << "Num2: ";
      cin >> num2;

      answer = num1 + num2;
      cout << answer << endl;
    case 2:
      cout << "[Subtraction] Input 2 numbers" << endl;
      cout << "Num1: ";
      cin >> num1;
      cout << "Num2: ";
      cin >> num2;

      answer = num1 - num2;
      cout << "Answer: " << answer << endl;
    case 0:
      cout << "Exiting program..." << endl;
    default:
      cout << "Invalid option" << endl;
  }
  cout << "Thank you for using my calculator" << endl; // This gets ran regardless

  return 0;
}
```

Output 2:

```
Calculator v0.1 beta
Choose an operation
[1] Addition
[2] Subtraction

[0] Exit Program

1
[Addition] Input 2 numbers
Num1: 4
Num2: 5
Answer: 9
Invalid option
Thank you for using my calculator!
```

Removing the break statements makes the switch statement continue until all matches are satisfied, in our situation, the next matching case will be the default case. Most of the time this isn't what you intend, so most of the time the break statements are at the end of each case except the default.

## Related:

- [Input and Output](/posts/cpp-input-output)
- [Variables and Data Types](/posts/cpp-variables)
- [If Statements](/posts/cpp-if-statements)
- [If Statements Advanced](/posts/cpp-if-statements-advanced)
