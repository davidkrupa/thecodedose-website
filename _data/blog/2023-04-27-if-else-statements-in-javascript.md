---
template: BlogPost
path: /blog/if-else-statements-in-javascript
date: 2023-04-27T11:37:42.146Z
title: If/Else Statements in JavaScript
tags:
  - javascript
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/if_else_in_js.png
---

Read the previous post in this series here: [Working with Operators in JavaScript](https://www.thecodedose.com/blog/operators-in-javascript)

# Introduction to If / Else Statements

When programming, there might be situations where you want to run a certain piece of code only when a certain condition is satisfied.
If/else conditional statements let you do exactly that!

These statements give us a way to make decisions in our code and execute different blocks of code depending on whether a condition is `true` or `false`.

```js
if (/* enter condition here */) {
  // run this code if condition is met
} else {
  // run this code if condition is not met
}
```

Here's a simple example:

```js
let num = 10;

if (num > 0) {
  console.log('The number is positive.');
} else {
  console.log('The number is not positive.');
}
```

In this example, we're checking whether the value of the `num` variable is greater than 0, i.e., it's a positive number.
If it is, we'll execute the code inside the first set of curly braces (which prints "The number is positive.").
If it's not, we'll execute the code inside the second set of curly braces (which prints "The number is not positive.").

The `if` statement accepts a logical expression that evaluates to a `true` or `false` and runs it's code block if it is in fact `true`.
If it's not, then it passes the execution to the `else` block.

# Else If Statements

You can also chain `else if` statements to check multiple conditions, like so:

```js
let num = 10;

if (num > 0) { // 1
  console.log('The number is positive.');
} else if (num < 0) { // 2
  console.log('The number is negative.');
} else { // 3
  console.log('The number is zero.');
}
```

In this example, the first block condition is evaluated first, if it's not met, the control is passed onto the second block and so on.
These conditions are evaluated from top to bottom.
The first one that evaluates to `true` gets to execute its block and the execution steps out of the if/else statements, skipping the later blocks all together.

# Truthy & Falsy

It's important to note that the conditions in if/else statements are evaluated as boolean values (i.e., `true` or `false`). I
In JavaScript, there are some "truthy" (truth-like) and "falsy" (false-like) values that we'll explore in a future post.

Read the next post in this series here: [Ternary Operator in JavaScript](https://www.thecodedose.com/blog/ternary-operator-in-javascript)