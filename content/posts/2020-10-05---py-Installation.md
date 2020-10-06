---
title: Python Installation and Hello World
date: "2020-10-06T16:25:03+08:00"
template: "post"
draft: false 
slug: "py-installation"
category: "Python"
tags:
  - "Python"
  - "Tutorial"
  - "Install"
  - "Introduction"
  - "Hello World"
description: "Python is an interpreted programming language that was released by Guido van Rossum in 1991. Python's syntax and dynamic typing makes it easier to learn than other languages. In this tutorial we will tackle on how to install Python."
---

- [Installing Python](#installing-python)
- [Choosing an editor](#choosing-an-editor)
- [Hello World](#hello-world)
- [Related](#related)

Python is an interpreted programming language that was released by Guido van Rossum in 1991. Python's syntax and dynamic typing makes it easier to learn than other languages. In this tutorial we will tackle on how to install Python.

## Installing Python

To install python follow the instructions below:

NOTE: If you have already installed Visual Studio from the [C++ Tutorial](/posts/cpp-hello-world), then you might have
already installed Python. You can check it by looking at the start menu. If you see a Python 3.x folder then you don't need to follow the instructions below.

1. [Download the latest version of Python for your platform.](https://www.python.org/downloads/)
2. Run the downloaded installer. You will be greeted by this window.
![Python installer, check add to PATH](/media/screenshot-py-installation-1.PNG)
3. Check the box labeled **Add Python 3.x to PATH**.
4. Wait for the installation to finish, restart your computer when prompted.
![Wait for installation to finish](/media/screenshot-py-installation-2.PNG)

## Choosing an editor

After setting up Python, you can choose a text editor. For the purposes of this tutorial, you can choose from these three text editors.

- IDLE - built-in with python, requires no further installation
- [PyCharm](https://www.jetbrains.com/pycharm/) - an integrated development environment (IDE), this will give you a similar experience to Visual Studio. [Set up PyCharm by following the instructions on their page.](https://www.jetbrains.com/help/pycharm/installation-guide.html)
- [Visual Studio Code (vscode)](https://code.visualstudio.com/) - this is different from plain Visual Studio, vscode is more of a text editor with support for extensions rather than an IDE

For this tutorial, we'll only use IDLE as it takes little time to set up.

## Hello World

You can open IDLE by looking for the Python folder in the start menu or searching for it. Once opened it should look like this.

![IDLE Python interactive shell](/media/screenshot-py-installation-3.PNG)

This window is only an interactive shell, you can't edit and save your code here. To enter the editor and create a new file, go to File > New File or press `CTRL + N`. An untitled window should pop up.

Hello world in Python can be written in just one line like so

```python
print("Hello world!")
```

Save your code by going to File > Save or `CTRL + S`. After saving you can now run it by going to Run > Run Module or `F5`. You should see the output back at the interactive shell.

## Related:

- [C++ - Hello World](/posts/cpp-hello-world)