# Debugging Segmentation Faults

## What is a Segmentation Fault?

A segmentation fault is a common error that occurs when a program tries to access a memory location that it is not allowed to access. Segmentation faults are often caused by dereferencing a null pointer, or by trying to access memory that has been freed.

Here is an example of a segmentation fault:

```cpp
int main() {
    int *p = nullptr; // p is a pointer to an integer, and it is initialized to null
    *p = 5; // This line causes a segmentation fault because p is a null pointer
    return 0;
}
```

When we run this program, we get the following output:

```bash
$ ./segfault
Segmentation fault (core dumped)
```

The segmentation fault occurs when we try to dereference the null pointer `p`. The program tries to access the memory location that `p` points to, but `p` is a null pointer, so it is not allowed to access that memory location.

Another common case is indexing a vector out-of-bounds

```cpp
#include <vector>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3};
    v[3] = 4; // This line causes a segmentation fault because v only has 3 elements
    return 0;
}
```

## How to Debug Segmentation Faults

### Using Print Statements

Another way to debug segmentation faults is to use print statements. Print statements allow you to print the value of variables at different points in your program. This can be useful for finding the line of code that caused the segmentation fault.

Let's look at an example of a program that has a segmentation fault:

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
  // create a vector of integers
  vector<int> integers;

  cout << "Adding 10 elements to the vector" << endl;

  // add 10 elements to the vector
  for (size_t i = 0; i < 10; i++) {
    integers.push_back(i);
  }

  // print out each element
  for (size_t i = 0; i < 10; i++) {
    cout << integers[i] << endl;
  }

  // add last element to the first
  integers[0] = integers[0] + integers[10] // This line causes a segmentation fault;

  cout << "Doubled each element" << endl;

  // double each element
  for (size_t i = 0; i < 10; i++) {
    integers[i] = integers[i] * 2;
  }

  // print out each element
  for (size_t i = 0; i < 10; i++) {
    cout << integers[i] << endl;
  }

  return 0;
}
```

This line causes a segmentation fault because we are trying to access the 11th element of the vector, but the vector only has 10 elements:

```cpp
integers[0] += integers[10];
```

When we run this program, we get the following output:

```bash

$ ./segfault
Adding 10 elements to the vector
0
1
2
3
4
5
6
7
8
9
Segmentation fault (core dumped)
```

Notice that the program crashes before it prints out the line `Doubled each element`. This is because the program crashes when it tries to access the 11th element of the vector. To find the line of code that caused the segmentation fault, we can add print statements to the program:

```cpp
int main() {
  // create a vector of integers
  vector<int> integers;

  cout << "Adding 10 elements to the vector" << endl;

  // add 10 elements to the vector
  for (size_t i = 0; i < 10; i++) {
    integers.push_back(i);
  }

  // print out each element
  for (size_t i = 0; i < 10; i++) {
    cout << integers[i] << endl;
  }

  cout << "I will print" << endl;

  // add last element to the first
  integers[0] += integers[10]; // This line causes a segmentation fault;

  cout << "I will not print" << endl;

  cout << "Doubled each element" << endl;

  // double each element
  for (size_t i = 0; i < 10; i++) {
    integers[i] = integers[i] * 2;
  }

  // print out each element
  for (size_t i = 0; i < 10; i++) {
    cout << integers[i] << endl;
  }

  return 0;
}

```

When we run this program, we get the following output:

```bash

$ ./segfault
Adding 10 elements to the vector
0
1
2
3
4
5
6
7
8
9
I will print
Segmentation fault (core dumped)
```

Since the program crashes before it prints out the line `I will not print`, but after it prints out the line `I will print`, we know that the line that caused the segmentation fault is `integers[0] += integers[10];`.

By this way of adding print statements to our code, we can find the line of code that caused the segmentation fault.

### Using GDB

The easiest way to debug segmentation faults is to use GDB. GDB is a debugger that allows you to step through your program line-by-line and inspect the state of your program at any point. You can use GDB to find the line of code that caused the segmentation fault.

To use GDB, first compile your program with debugging symbols:

```bash
$ g++ -g segfault.cpp -o segfault
```

Then, run GDB on your program:

```bash
$ gdb segfault
```

GDB will start and you will be dropped into a GDB prompt. To run your program, type `run`:

```bash
(gdb) run
Starting program: /home/username/segfault
[Inferior 1 (process 12345) exited normally]
```

The program exited normally, but we didn't see any output. This is because GDB is running your program in a separate process, so it is not printing the output to the terminal. To print the output, type `print`:

```bash
(gdb) print
$1 = 0
```

The output is `0`, which is the return value of the `main` function. To print the output of the program, we need to add a `printf` statement:

```cpp
#include <stdio.h>

int main() {
    int *p = NULL;
    *p = 5;
    printf("%d\n", *p);
    return 0;
}
```

Now, when we run GDB, we see the output:

```bash
(gdb) run
Starting program: /home/username/segfault
5
[Inferior 1 (process 12345) exited normally]
```

The program exited normally, but we still didn't see the segmentation fault. To see the segmentation fault, we need to tell GDB to stop when the program encounters a segmentation fault. To do this, type `handle SIGSEGV nostop`:

```bash
(gdb) handle SIGSEGV nostop
Signal        Stop	Print	Pass to program	Description
SIGSEGV       No	Yes	Yes		segmentation fault
```

Now, when we run GDB, we see the segmentation fault:

```bash
(gdb) run
Starting program: /home/username/segfault
5
Program received signal SIGSEGV, Segmentation fault.
0x00005555555551a0 in main () at segfault.cpp:5
5	    *p = 5;
```

The program crashed on line 5 of `segfault.cpp`, which is the line that caused the segmentation fault. To see the value of `p`, type `print p`:

```bash
(gdb) print p
$1 = (int *) 0x0
```

`p` is a null pointer, so it is not allowed to access the memory location that it points to. To see the value of `*p`, type `print *p`:

```bash
(gdb) print *p
Cannot access memory at address 0x0
```
