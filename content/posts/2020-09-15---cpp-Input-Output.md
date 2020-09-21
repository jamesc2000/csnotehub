---
title: Input and Output 
date: "2020-09-15T12:50:03"
template: "post"
draft: false 
slug: "cpp-input-output"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "I/O"
  - "Input Output"
  - "cin"
description: "Input and output in C++ are done with cin >> and cout << respectively. Before using them, be sure to include the iostream library header."
---

- [Output](#output)
- [Input](#input)
- [Using them with variables](#using-them-with-variables)
- [Related](#related)

Input and output in C++ are done with cin >> and cout << respectively. Before using them, be sure to include the iostream library header.

On the top of almost all programs written in c++, you would see the include statement `#include <iostream>`. The iostream library header is what enables us to use `cin` and `cout`, while `using namespace std;` makes it possible to omit `std::` before `cin` and `cout`. Without `using namespace std;` you need to use `std::cin` and `std::cout`.

## Output

Output with C++ is done with `cout` which is short for console output. Take note of the direction of the arrows `<<`.

Example 1:

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Hello world!" << endl;

    return 0;
}
```

Output 1:

```
Hello world!
```

You can output any [data type](/cpp-variables), in this case "Hello world!" is a string, but it can even be a variable. The `endl` after another `<<` denotes a line ending. Take note that everytime you want to output another thing, you can chain or stream your outputs using the `<<` operator.

Example 2:

```cpp
int main() {
    cout << "Hello world!" << " another thing" << endl << "Now this should be on the next line";

    return 0;
}
```

Output 2:

```
Hello world! another thing
Now this should be on the next line
```

## Input

Input on the other hand is done with `cin` which is short for console input. Take note of the direction of the arrows `>>`. You always definitely need to use [variables](/cpp-variables) together with `cin` as you need something to store the user input to.

Example:

```cpp
#include <iosteram>

using namespace std;

int main() {
    int input1;

    cout << "Please enter a number" << endl;
    cin >> input1;

    cout << "You have entered " << input1;

    return 0;
}
```

Output:

```
Please enter a number
50
You have entered 50
```

See how the program first asked the user to input a number? After asking the program, it awaits our input and it will not proceed until we entered our input, in this case I entered `50`. The number we inputted then gets **stored** to an int called `input1`. When we output `input1` it outputs `50` which was what was stored in that variable.

## Related:

- [Variables and Data Types](/posts/cpp-variables)
- [Hello World](/posts/cpp-hello-world)
