---
title: What’s the difference between URI, URN and URL?
author: reyes
pubDate: 2021/08/26
tags: ["tech", "web"]
---

While browsing the web we encounter words like **URL**, this is a common tech term, but as we go deeper in the tech field, there's another terms that shows up, that's **URI** and the least common **URN**.

## What the fork are these terms?

The first thing to understand is the wider term, the **Uniform Resource Identifier (URI)**. It does what it says, it's just the identifier of a resource in the internet like a _hyper-text document_, a _file_, an _image_, or anything that can be stored.

> Think about the URI as group term, it can refer to an URN or a URL.

![Venn Diagram (1).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1630037373598/U8XW1ezOl.png)

### The Uniform Resource Name (URN)

This is a formal way of naming a resource, ensuring that this resource name is unique. It's made by following a predefined [scheme](https://en.wikipedia.org/wiki/List_of_URI_schemes).

![urn.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1630038165419/JTm4CfqJF.png)

> For example, we can use the [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) scheme as: `urn:isbn:0451450523`

### The Uniform Resource Locator (URL)

Imagine we want to access the contents of an specific resource, say a book (`.pdf` for example), we will need not only need the information about this resource location, we also need information about _how_ we can access it, that's when the **Uniform Resource Locator (URL)** comes at hand, because it appends a prefix about _how_ we can access this resource.

Using a **protocol** before the resource location gives to us the URL.

![protocl.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1630037515330/BySzTSibG.png)

> For example, we can use the Hashnode address: `https://hashnode.com`

## Conclusion

All the **URNs** and **URLs** are **URIs**, and while the URN only identifies resources without telling you how to access them, the URL do tell you where and how to access the desired resource.

Hope you find this useful, see you next time 👋.

> If you noticed any error, please let me know. I'm always up to learning or relearning if necessary.
