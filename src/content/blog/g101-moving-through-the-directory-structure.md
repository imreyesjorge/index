---
title: "GNU/Linux 101: Moving through the directory tree"
author: reyes
pubDate: 2021/02/13
tags: ["tech", "web", "linux"]
---

When first using Linux, the terminal can be a little bit intimidating and hard to understand. That's why I decided to start a short-post series called **GNU/Linux 101** where we'll talk about some common chores while being a Linux user.

First of all, let's get some concepts clear.

### Linux is the kernel

The short answer is that the [Operating System (OS)](https://en.wikipedia.org/wiki/Operating_system) is [**GNU**](https://www.gnu.org/) and [**Linux**](https://en.wikipedia.org/wiki/Linux) is just the kernel that the OS is using.

We can see GNU kind of a build-your-own OS using free software pieces like: _drivers, package manager, window manager, desktop environment, controllers, etc..._ While Linux is just one of that pieces, an important one, the [kernel](https://www.techopedia.com/definition/3277/kernel).

For popularity reasons the name Linux win the name war against using GNU/Linux, which is more longer to write and difficult to write/remember. So, anytime we use Linux to refer the OS, remember is just a short way of saying GNU/Linux.

### The directory tree

This is simply how the directories of Linux are distributed and named, something like this.

![Screenshot from 2021-02-13 22-55-20.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1613278536220/wyJP5qUUh.png)

> You can learn more about the directory structure [here](https://linuxhandbook.com/linux-directory-structure/).

# Moving through the directory tree

Now we can start learning the basics.

First of all, open your terminal and type the command `pwd`, this will tell us the name of the current working directory (the complete path to reach it).

```bash
$ pwd
/home/reyes
```

We now know where we are, but... What are the files that reside in the current directory and how we can see them? This is easy, that's why `ls` (list) was created. This command will list the directory contents.

```bash
$ ls
Desktop/    Downloads/  Pictures/  Public/  Templates/  Workspace/
Documents/  Music/   Videos/
```

Sweet, there are some directories but now we want to move inside `Pictures/`, and that's another easy task to complete, that's why `cd` (change directory) is for!

> The use of `cd` is `cd <Path to directory>`

```bash
$ cd Pictures/
$ pwd
/home/reyes/Pictures
```

Great, now let's see what's inside the directory, but now let's use `ls -l`

```bash
$ ls -l
-rw-rw-r-- 1 reyes reyes 17662 ene 22 22:42 avatar.jpg
drwxrwxr-x 2 reyes reyes  4096 feb  7 20:55 Wallpapers
```

What happened? we used `ls` with the `-l` flag to list all the directory content using the long listing format. This show us more information about the files, like the permissions, types and date.

So far it has been easy to move forward, but how about going backwards? This is an easy task too. Let's learn how to take just one step back in the directory structure using `cd ..`

```bash
$ pwd
/home/reyes
$ cd ..
$ pwd
/home/
```

While navigating between directories, there are two things to know:

- `.` stands for the current directory
- `..` stand for the parent directory (the previous one)

That's why `cd ..` let us go back one directory.

When using just `cd` without a parameter, it will take us to the user home directory (~). Let's try it!

```bash
$ pwd
/home/reyes/Pictures
$ cd
$ pwd
/home/reyes
```

One last thing to know is that so far we were using [**relative paths**](https://www.linux.com/training-tutorials/absolute-path-vs-relative-path-linuxunix/), this means that when we do `cd Pictures`, the command will look for the directory standing in the current one, but, what if we already know the path to the directory we want to visit? That's called an [**absolute path**](https://www.linux.com/training-tutorials/absolute-path-vs-relative-path-linuxunix/) and it needs to start with the root directory `/`.

Let's say we are in `/home/` but we want to go to the `Pictures/` directory, there are two ways of doing it.

**Relative Paths**

```bash
$ pwd
/home/
$ cd reyes/
$ cd Pictures/
$ pwd
/home/reyes/Pictures
```

We can also group the `cd` commands using something like `cd reyes/Pictures/`

**Absolute Paths**

```bash
$ pwd
/home/
$ cd /home/reyes/Pictures/
$ pwd
/home/reyes/Pictures/
```

The difference between relative and absolute paths it's that relative paths uses the current directory (`.`) as the base and absolute paths use the root directory (`/`) as the base.

Hooray! You learned how to move between directories in Linux using only your terminal (and also how to see the contents). This is the first step using your terminal, congratulations 🥳.
