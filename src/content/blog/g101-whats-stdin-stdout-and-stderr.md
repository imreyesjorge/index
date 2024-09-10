---
title: "GNU/Linux 101: What's stdin, stdout and stderr?"
author: reyes
pubDate: 2021/09/04
tags: ["tech", "web", "linux"]
---

Usually, when using a terminal emulator we don't think about the data flow ([data streams](<https://en.wikipedia.org/wiki/Stream_(computing)>)), we just type some commands and expect an output right in the screen. In this brief article I'll try to explain what's **stdin**, **stdout** and **stderr**.

First of all, lets see the definition of Input/Output of [TheFreeDictionary](https://www.thefreedictionary.com/Input+and+output):

> **input/output:** _(Computer Science)_ the data or information that is passed into or out of a computer. Abbreviation: **I/O**

We can see Input as all the data that flows **into** a computer or process, and the output as the complete opposite because the data flows **from** the computer or process.

![Desktop - 2 (1).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1630810220037/UTjL5A1wz.png)

> **TL;DR:** **Stdin** is all the input normally via keyboard, but can be via a file or an output redirection. **Stdout** is the expected output of the process, while the **Stderr** is the unexpected output of the process, the error ones.

![Desktop - 1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1630813456614/NTviFs-yT.png)

> This is the big picture of the stdin, stdout and stderr

## What's stdin (Standard Input)?

While communicating with the process, the _stdin_ is all the input normally received via keyboard. Note the word "normally", this is because the keyboard is not the only media to give a process some input, this can be achieved with files or outputs redirection too, but we are going to talk about this in another article.

## What's stdout (Standard Output)?

After the command receives the Input (via stdin), it processes that information and then, with the final result, the command wishes to return the Output. This is when _stdout_ comes at handy, serving as the way the data can flow to the end point, in this case, the terminal.

## Then, what's stderr (Standard Error)?

The _stderr_ is pretty similar to stdout, basically is the same, but in this case this data stream is not carrying the expected output, in this case this Output is carrying the errors, if any.

## Conclusion

Three default data streams in GNU/Linux are the _stdin_, _stdout_ and _stderr_. This are the tools used for communicating with a process, and understanding what each one does it's simple.

Hope you find this article useful and helpful, see you next time 👋.

**If you noticed any error, please let me know. I'm always up to learning or relearning if necessary.**

– [@imreyesjorge](https://twitter.com/imreyesjorge)
