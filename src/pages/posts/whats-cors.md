---
layout: ../../layouts/Post.astro
title: What's CORS (Cross-Origin Resource Sharing)?
author: reyes
pubDate: 2021/02/26
tag: tech
---

When building a web service that uses the [HTTP protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP) for transmitting [hypermedia](https://en.wikipedia.org/wiki/Hypermedia) documents, we can upload resources to the same server, that way we can use them in the service we're building. In fact, we can't use resources from another server by default, this is restricted by the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

> This is a security measure implemented in browsers, if the petition comes from a CLI there will be no CORS.

Trying to access to another server information/resources is called a Cross-Origin Request. And whenever we want to use them in another [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) (server) we need the help of a technology called **Cross-Origin Resource Sharing** or **CORS** for short.

## What does CORS do?

Using the [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) the main server needs to specify if others domains should be able to fetch data from itself. This is achieved using the `Access-Control-Allow-Origin` header, then, you have something like this in the header response:

```
Acces-Control-Allow-Origin: <other origin(s)>
```

> If you want anyone to have access you can use the `*` wildcard.

Having this in mind, we can now see an example. Imagine we have a domain called `domain-a.com` without any CORS declared, and we want to fetch some data from `domain-a.com` in our `domain-b.com`. The browser will prevent this fetch to happens with a CORS error, because by default all of these petitions are restricted.

But, when we add `Acces-Control-Allow-Origin: http://domain-b.com` to our `domain-a`.com server, the fetch petition from the second domain to the first one will succeed, the browser will now allow this fetch request because `domain-a.com` told the browser to permit the petitions from `domain-b.com`.

This was a brief description of what is CORS, more information can be found at the [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

Thanks for reading 🥳.
