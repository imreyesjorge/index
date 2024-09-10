---
title: "GNU/Linux 101: Differences between Terminal, Console and Shell"
author: reyes
pubDate: 2021/08/28
tags: ["tech", "web"]
---

When first diving into **GNU/Linux** there's three confusing concepts: _Terminal_, _Console_ and _Shell_. Doesn't all mean the same? well, technically it doesn't.

> TL;DR: The **shell** is the logic part that interpret all the commands, while nowadays **terminal** and **console** are synonyms, referring to the software that handles the Input and Output.

To explain the difference between **terminal**, **console** and **shell** we need to go back in time, when the first modern computers started appearing. Business didn't have [_Personal Computers (PCs)_](https://en.wikipedia.org/wiki/Personal_computer) for every employee they had, instead they used something called a [**Mainframe**](https://en.wikipedia.org/wiki/Mainframe_computer), which is (in simple terms) a "very big computer".

Now we can start explaining these concepts.

### What's the Shell?

The **shell** is the outermost layer of the [_Operating System_](https://en.wikipedia.org/wiki/Operating_system), is software that serve as the interface between the hardware and the person using the computer.

A shell can be both [_Graphical User Interface (GUI)_](https://en.wikipedia.org/wiki/Graphical_user_interface) or [_Command-Line Interface (CLI)_](https://en.wikipedia.org/wiki/Command-line_interface), and its job is to interpret all the input received, communicate with the hardware and give an output.

This software runs in the mainframe.

### What's the Terminal?

The **terminal** is the device that handles the Input and Output, its name was given because it was a terminal part of the mainframe, this was know also as [_dumb terminal_](https://en.wikipedia.org/wiki/Computer_terminal#Dumb_terminal) because its job was to only serve as the connection between the user and the mainframe.

The terminal receive the Input from the user, then sends that information to the shell and once the shell returns the response, the terminal print the output in the given display.

### What's the Console?

The **console** was strictly a physical terminal, a piece of hardware connected to the mainframe that consisted of a keyboard and a screen.

### Conclusion

During all this time, this concepts has suffered from abstractions. Nowadays, the vast majority of shells are running in the same PC, the job of the console was consumed by the same PC and what we know as "terminal" it's really a [**Terminal Emulator**](https://en.wikipedia.org/wiki/Terminal_emulator) running, again, in the same PC.

As you can see all the physical parts are now inside the same computer, making the understanding of this concepts a little blurry, and for practical use, now the Console and the Terminal are used as synonyms.

Hope you find this helpful to better understand what does these three concepts means. See you next time.

**If you noticed any error, please let me know. I'm always up to learning or relearning if necessary.**

– [@imreyesjorge](https://twitter.com/imreyesjorge)
