---
title: Reading and Writing Files
date: "2020-10-26T16:25:03+08:00"
template: "post"
draft: false
slug: "cpp-reading-and-writing-files"
category: "C++"
tags:
  - "C++"
  - "Tutorial"
  - "Switch"
  - "Flow"
description: "The fstream class in c++ enables us to input and output to a file stored on the disk. Similar to how iostream is used in console input/output, fstream can do the same but to files."
---

- [Syntax](#syntax)
- [open() Parameter Flags](#open-parameter-flags)
- [Error Handling](#error-handling)
- [Related](#related)

The fstream class in c++ enables us to input and output to a file stored on the disk. Similar to how iostream is used in console input/output, fstream can do the same but to files.

## Syntax

To use `fstream` we need to include it in our header includes.

If you read our [C++ Input and Output Tutorial](/posts/cpp-input-output), then you might be already familiar with `iostream`. In this tutorial we will use both `iostream` and `fstream`.

For writing to a file:

```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main() {
  ofstream fileName;
  fileName.open("filename.txt");

  fileName << "Hello file!\n";

  fileName.close();

  return 0;
}
```

For reading from a file:

```cpp
#include <iostream>
#include <fstream>
#include <string> // This header is necessary for getline()

using namespace std;

int main() {
  ifstream fileName;
  fileName.open("filename.txt");

  string fileContents;
  getline(fileName, fileContents);
  cout << "The file contained: " << fileContents;

  fileName.close();

  return 0;
}
```

If you are both reading and writing:

```cpp
#include <iostream>
#include <fstream>
#include <string> // This header is necessary for getline()

using namespace std;

int main() {
  fstream fileName;
  fileName.open("filename.txt");

  fileName << "Some text\n";

  string fileContents;
  getline(fileName, fileContents);
  cout << "The file contained: " << fileContents;

  fileName.close();

  return 0;
}
```

1. `fstream` - the fstream header (filestream) is necessary for doing operations with files
2. `fstream fileName` - declare fileName as a new file stream
*fileName can be any valid variable name, for better readability try to match it with the filename of your file*
3. `fileName.open(string)` - opens your file from the disk, if writing, the file will automatically be created
4. `fileName << "Hello world!"` - follows the same syntax as console input/output
5. `string fileContents` - declares an empty variable to be used later
6. `getline(fileName, fileContents)` - reads the current line from the object `fileName` and stores it to the variable `fileContents`
7. `cout << fileContents` - outputs the data inside the variable `fileContents` to the console
8. `fileName.close()` - closing files after using them is a good practice as it frees up memory

## open() Parameter Flags

The method `fstream.open()` can take 2 parameters:

```cpp 
fstream fileName
fileName.open("filename.txt", ios::in | ios::out | ... )
```

The second parameter of the method can take the following:

| Parameter     | Description  |
| ------------ :| ------------ |
| ios::in       | Opens for input operations. Not necessary when using ifstream |
| ios::out      | Opens for output operations. Not necessary when using ofstream |
| ios::binary   | Open in binary mode. For non-text files |
| ios::ate      | Set initial position at end of file |
| ios::app      | Append to file. All outputs automatically appended to the end of file |
| ios::trunc    | Remove existing contents when opened |

You can mix and match these parameters to your liking

Example:

```cpp
fstream testFile
testFile.open("testfile.txt", ios::app | ios::out)
```

By default, `fstream` enables us to do both input and output. But in our case, we specified only `ios::out` so we can only write to the file.

When we write to testfile.txt, all new data will automatically added at the end of the file.

## Error Handling

In the event that the file fails to open, we should handle it accordingly

```cpp
int main() {
  fstream myFile;
  myFile.open("myfile.txt");

  if (myFile.is_open()) {
    // do stuff
  } else {
    cout << "Unable to open file";
  }

  return 0;
}
```

`is_open()` is a function that returns a boolean. `true` if the file is open, `false` if the file is not open.

## Related:

- [Input and Output](/posts/cpp-input-output)
- [Variables and Data Types](/posts/cpp-variables)
- [If Statements Advanced](/posts/cpp-if-statements-advanced)