---
title: Hello World! 
date: "2020-09-10T06:24:34"
template: "post"
draft: false 
slug: "cpp-hello-world"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Beginner"
description: "First time learning programming? Start here! A C++ tutorial for beginners, learn how to write \"Hello World\" and how it works in C++"
---

- [Setting up](#setting-up)
- [Code](#code)
- [Explanation](#explanation)
- [References](#references)

## Setting up

If this is your first time programming, you probably have not installed Visual Studio (or other IDEs and c++ compilers). If you have skip to the [Code part](#code).

If you are running Windows then I would recommend using Visual Studio since it's simple and straightforward to install.

1. [Download Visual Studio Community 2019 for free.](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16) You will be redirected to the download page.
2. After clicking the link you will be presented with the screen below. Feel free to save the installer anywhere you want. !["Visual Studio download page"](/media/screenshot-cpp-hello-world-1.PNG)
3. When it finishes downloading, run the downloaded installer. A progress bar should appear, when it finishes press **continue** when prompted.
4. Wait for the installer to fetch the files required. This could take around 2 minutes depending on your internet connection. !["Installer getting ready"](/media/screenshot-cpp-hello-world-2.PNG)
5. When the installer finishes fetching, this should pop up. !["Check .NET, Desktop with C++, Universal Windows Platform"](/media/screenshot-cpp-hello-world-3.PNG) I recommend checking the following items. You can check other items out if you like but you can always install them at a later time.
    - .NET desktop development
    - Desktop development with C++
    - Universal Windows Platform development
6. Wait for the installation to finish. This will take some time depending on your internet connection.
!["Visual studio community 2019 installing"](/media/screenshot-cpp-hello-world-4.PNG)
7. Once the installation finishes you can now open up Visual Studio. Upon opening it choose **Create a new project**.
!["Choose create a new project"](/media/screenshot-cpp-hello-world-5.PNG)
8. Choose **Console App**.
!["Choose console app that has a C++ tag](/media/screenshot-cpp-hello-world-6.PNG)
9. For now we are naming our project **HelloWorld** so put that on both the *Project Name* and *Solution Name*.
10. The project will be created with the *boilerplate* code.
  

## Code

    #include <iostream>
    
    namespace std;

    int main() {
        std::cout << "Hello World!";
        return 0;
    }

## Explanation

This is the boilerplate code that you will get when you create a console app with Visual Studio (other IDEs might be similar). You can try running your code with `CTRL + F5` or by clicking **Build** then choosing **Build Solution**.

Let's try to cover the code line by line.
1. `#include <iostream>`

This include statement tells the compiler (the program that translates your code to something the computer can understand) that we will be using the `iostream` library.

2. `using namespace std;`

In order to avoid confusing the compiler on potential naming conflicts (i.e. duplicate names), we specify the namespaces that we will use in our program. In this case we specified that we will be using functions, variables, etc from the `std` namespace.

3. `int main()`

This is your very first encounter of a function declaration(more on that on another topic). The main function is a special function because it is the first thing that runs in your program. For now, we will put the body of our code inside the scope of main()

Scope - every function declaration gets followed by that function's scope; 
the scope of a function is everything inside the { }

4. `std::cout << "Hello World!";`

If you ran the program before reading this, congrats! You might already know what this line does. It makes your program output to the console `Hello World!`

5. `return 0;`

All functions (except void functions) must return something. Returns in general will be covered in the *functions* topic. For the main function in particular `return 0;` tells your program to terminate.
*As an experiment, try putting another `std::cout << "foo";` after `return 0;` then run your program again. You don't see `foo` outputted because your program terminated before it can output it.

## Related

- [Variables and Data Types](/cpp-variables)
