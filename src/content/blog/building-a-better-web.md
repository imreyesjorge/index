---
title: "Building a better web"
author: "reyes"
pubDate: 2023/12/27
tags: ["tech", "a11y", "web"]
ai: "enhanced"
---

There's much to discuss when it comes to building better websites: performance, loading speed, memory efficiency, and more. However, one aspect I find particularly compelling is accessibility.

Realistically, not everyone prioritizes accessibility. Yet, many people care about [Search Engine Optimization (SEO)](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?visit_id=638392594764649191-1262035588&rd=1), a crucial component for creating a website with the potential to reach hundreds, thousands, or even millions of users. Interestingly, [semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/semantics) is appreciated by both accessibility and SEO advocates. But first, let's delve into what "semantic" means.

## Understanding Semantics and Semantic HTML

To grasp the concept of semantics, let's turn to the Cambridge Dictionary:

> "Syntax describes the rules by which words can be combined into sentences, while semantics describes what they mean."

Semantic HTML isn't far from this definition.

Syntax defines how something should be written. In HTML, tags have a well-defined syntax using `<tag-name></tag-name>` symbols to indicate where a block starts and ends. This standardization allows browsers to identify different tags. However, one piece of the puzzle is missing: semantic HTML, or the meaning of the tags.

Consider this:

```html
<yor-frem-glar-snur-jol>
  <sking-trum-drust-dol>truk-hupt-sop-stab-tob</sking-trum-drust-dol>
  <nez-swih-vunk-bev-pliv>snap-wist-plom-skid</nez-swih-vunk-bev-pliv>
</yor-frem-glar-snur-jol>
```

You can identify where a tag starts and ends, but the meaning of these scrambled characters is unclear. Remember, a computer doesn't "understand" words in the way humans do. This could be a perfectly fine HTML snippet, but it lacks meaning.

Semantic HTML provides the browser with the meaning of each tag. For example:

```html
<div>
  <div>Jorge Reyes</div>
  <div>24</div>
</div>
```

The internet follows a [certain standard](https://html.spec.whatwg.org/multipage/) given by the W3C Consortium, so the browser knows what a div is and how to handle it. But can you tell what the 24 stands for? It could be many things. Let's clarify:

```html
<person>
  <person-name>Jorge Reyes</person-name>
  <person-favorite-number>24</person-favorite-number>
</person>
```

Now it's clear!

## Why is Semantic HTML Great for Accessibility and SEO?

Two main players benefit from semantic HTML: screen-readers for accessibility and search engines for SEO. Both need semantic HTML to function properly.

Writing semantic HTML isn't difficult. You can refer to the Mozilla Developer Network (MDN) for a quick [HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) reference and try to use the most accurate tag for each piece of information in your HTML.

> Don't forget the power of `<meta />` tags in the header. They're often overlooked but can significantly enhance your website's performance.

By writing a semantic website, you'll not only boost your SEO but also enable screen-readers to accurately interpret your site for those who need it.

## Conclusion

While I hope accessibility will be the primary reason for writing semantic HTML (since the internet should be accessible to everyone), improved SEO is a beneficial side effect. So, whether you're aiming for better SEO or striving to make your website more accessible, semantic HTML is a win-win strategy.
