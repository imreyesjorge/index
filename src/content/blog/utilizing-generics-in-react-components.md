---
title: "Utilizing Generics in React Components"
author: "Reyes"
pubDate: 2024/03/08
tags: ["technology", "accessibility", "web"]
ai: "enhanced"
---

If you have experience with TypeScript, you are likely familiar with generics and their applications. However, let's revisit the concept briefly with a concise example.

### Understanding Generics:

<br />

```ts
// Declaring a type that utilizes a generic.
type Car<T> = {
  model: string;
  year: number;
  serialVIN: string;
  motorProperties: T;
};

// Safely working with different car motors while maintaining type safety.
type MotorOne = {
  /*...*/
};

type MotorTwo = {
  /*...*/
};

// Both cars share typing for `model`, `year`, and `serialVIN`.
// However, the `motorProperties` field has distinct typing for each.
let carOne: Car<MotorOne>;
let carTwo: Car<MotorTwo>;
```

This functionality allows the reuse of types, enabling composition into more intricate structures. Furthermore, the versatility of generics extends to typing React components, offering an even more powerful development toolset.

### Typing React Components with Generics:

<br />

```tsx
/**
 * Component and type declaration
 */

type TMyComponent<T> = {
  value: T;
  onChange: (arg: T) => void;
};

const MyComponent = ({ value, onChange }) => {
  return <section onChange={onChange}>{/* ... */}</section>;
};

/**
 * Usage
 */

<MyComponent
  values={{ name: "John", age: 48 }}
  onChange={(arg) => {
    // The type of `arg` is inferred as `{ name: string, age: number }`.
  }}
/>;

// Explicitly typing the component when needed:
type TPerson = {
  name: string;
  age: number;
};

<MyComponent<TPerson>
  values={{ name: "John", age: 48 }}
  onChange={(arg) => {
    // Here, `arg` is explicitly typed based on the generic passed to the component.
  }}
/>;
```

Incorporating generics into function components enhances your developer toolkit. The next time you create a component intended for use in various type contexts, remember that generics can be seamlessly applied here too.
