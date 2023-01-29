---
sidebar_position: 2
---

# Getting Started

Installing `g++` and `WSL`.

## Introduction

This guide will cover installing `g++` for your computer. `g++` is the compiler we'll be using to compile our C++ code in this course. It's not necessary to have it on your computer if you only intend to use the lab computers, but it's highly recommended since that is not a pleasant experience.

- *Mac Users* - You can skip to the [Installing `g++`](#installing-xcode-command-line-tools-g) section
- *Windows Users* - Read on

:::tip

*Windows Users* - This guide will cover installing `WSL`, which is a Linux virtual machine specifically for Windows. It can be a bit annoying to set up, but it's the only way you can get a Unix experience on Windows without SSH, which is important **if you're a CS major**. Otherwise, I would skip the to the [Installing `g++` without WSL](#installing-g-without-wsl) section instead. `WSL` is not necessary for this course or to install `g++`.

**Bottom line**: If you want to have a Unix environment on your own computer (way more comfortable than using SSH to do that), then install WSL. If you don't care about that, then you can skip it.

:::

## Windows Users

For Windows users, we'll need to install WSL (Windows Subsystem for Linux).

### Installing WSL

1. Navigate to the start menu in the bottom left corner, and find the Powershell application. Right click and *run as administrator*.

![start menu](/info/s1.png)

2. Once the shell is open, copy and enter the following line

    ```bash
    wsl --install
    ```
    ![note about WSL](/info/note1.png)

3. Once WSL is installed, **restart your computer**. I recommend running Ubuntu (the default Linux distribution that's installed) and setting up your new Linux system. It should look like this

    ![ubuntu](/info/s2.png)

    Once started, it should prompt you to create a username/password. Once you've done that, you're set!

### Installing `g++`

Now we'll need to install `g++`, which is the compiler we'll be using to compile our C++ code in this course.


Now that you have Ubuntu opened, enter the following line

```bash
sudo apt update && sudo apt install g++ vim -y
```

It'll prompt you to enter a password because of the `sudo` command. Enter it, and wait for the installation to finish. If there are no errors then you're good to go!

### Final Steps

This isn't necessary but you can test it for fun if you'd like!

Now that you've installed `g++` on your Linux system, let's test it out to make sure everything is working.

In your home directory, enter the following command

```bash
vim test.cpp
```

Now you should be in a very barebones text editor. From here, press `i` and enter the following code

```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Hello world!\n";

    return 0;
}
```

Once all that is typed out, press `esc`, and type `wq`, then hit enter.

Now you should be back to the plain terminal screen. From here, enter the following line

```bash
g++ -o test test.cpp
```

Now your program should be compiled into an executable which you can run to see the results of your code by typing

```bash
./test
```

Don't forget the `.` !

If it prints "Hello world!" to your screen, then you've set everything up correctly.

Since you've installed `WSL` and the Linux version of `g++`, you basically get the lab experience on your own computer, which is useful because you have full control, you can use any text editor of your choice, and you will rarely have to use SSH/SCP to transfer files to/from the lab computers. You can stop here or go to the [If you installed `WSL`](#if-you-installed-wsl) section to make your life even easier.

### Installing `g++` without WSL

If you don't want to install `WSL`, that's fine, we can still install `g++` without it.

To install, follow the instructions at [this link](https://code.visualstudio.com/docs/cpp/config-mingw#_prerequisites). It's **imperative** that you follow the instructions exactly, as it's very easy to mess up and then not know why nothing is working. As long as you read the instructions and follow them in order, you should be fine.

After the instruction where it says to do `g++ --version` in the command prompt, you can stop. If you installed `g++` correctly, then running `g++ --version` should print a bunch of version information.

## Mac Users

For Mac users, we just need to install `g++` for compiling our C++ programs, but first we'll need a couple of things

### Installing Xcode Command Line Tools (`g++`)

1. press `cmd + space` and type `terminal`, then press enter to open the terminal.
2. Once opened, type and enter the following line

    ```
    xcode-select --install
    ```

    This will install the Xcode command line tools. It might take awhile, so sit still while it's installing.

Once installed, you should now be able to compile C++ programs and run them. Restart the terminal application, and enter the following line

```bash
g++ --version
```

If it prints a bunch of version information, then you've successfully installed `g++` and you can stop here!

## If you installed `WSL`...

If you installed `WSL` and have completed the steps above, then I recommend you install the **Remote - WSL** extension for VSCode. It'll allow you to open VScode from your Linux (`WSL`) terminal, which is a lot more convenient than using `vim`.

If you're not familiar with VScode or extensions, then read the [Pre-setup](/docs/general/pre-setup).

Lastly, I recommend installing Microsoft's official [Terminal emulator](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) for Windows. It's a lot more convenient than command prompt or powershell.