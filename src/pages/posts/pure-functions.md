---
date: June 8th, 2019
title: Pure Functions in React
category: "blog"
readTime: 4
path: "/blog/purefunctions"
description: Pure functions and their relationship in React
---

# Motivation

Pure functions are getting thrown around a lot recently, largely due to the popularity of React and its use of pure components. When I first began learning React I knew that pure components always returned the same output given the same input, but I didn't really understand where pure components originated from or their true value. Sure, I had heard "pure components make testing easier" and I would spit out this reasoning in interviews or when speaking to fellow developers, but I didn't truly understand why.

"React will make you a better programmer" was referenced a lot as well in my earlier learnings of React. This sentiment drove my motivation to learn the framework, but it wasn't until I began learning more about functional programming and React's compositional relationship with it that this statement became much more clear.

One of the many parts that React shares with functional programming is the idea of pure functions; components in Reacts case.


# What are pure functions?

Pure functions take an input value (a parameter or argument) and depending on that input, produce an output value, that's all. They do one thing only, but they do it well. It should be that whenever you give a pure function the same input it will return the same output every single time.


```javascript
const myPureFunction = number => return number * 4
```

You'll likely come across a similar code snippet to the one above if you search across these interwebs of ours for an explanation of pure functions, and for good reason. Functions need to meet a couple of requirements in order to be pure.

## Pure functions must
* Contain no _side effects_
* When given the _same input_, return the _same output_.


While they're wonderful examples, they don't explain the whole story. For example...

```javascript
const isThisPure = number => {
  console.log(number);
  return number * 4
}
```

the above function is nearly identical to to our `myPureFunction`, but this time we've got a nice little `console.log()` in there, perhaps just to check what we're receiving. While console.log() won't seriously affect our code base, it's still considered a _side effect_ in this function.

# Side effects ? Impure : Pure

 A side effect is anything that our function mutates that is outside of its scope (our browser's console for example), _effecting_ other parts of our application. Let's look at another example of this.

```javascript
const globalNumber = 4;

const multiply = (x) => {
  return globalNumber *= x
}
```

Here we're updating a variable  (globalNumber) which is defined outside of our `multiplyByThree` function. If we were then to want to access our `globalNumber` variable later on by another function, but that function was expecting our global variable to be a particular value (e.g a user id) we can see how this will causes issues in the pipeline.

Pure components in React should follow suit and never manipulate global state that other components maybe depending on as well. Pure components should take in props and depending on those props, output a component.

Side effects aren't a bad thing, however. They're quite necessary in nearly all projects, especially in those that update often based on user interaction. Where to put and handle your side effects is the important part to keep your project clear and easy to find any bugs that may occur. State changes in React, for example, are usually left to a few components only or in an entirely separate part of an application.

# Return the same value when given the same input value.

The goal of our pure function is to keep our code predictable. To make sure of this, a pure function should return the same output based on the same input; if a function does anything else it's no longer pure.

```javascript
const multiplyNumber = (x) => {
  return x * 2;
}
```
Here, we're always going to take in a number and receive that number multiplied by two. This function is incredibly easy to test and reason about. Pure components in React behave in the exact same way; they receive some props and based on those props, return a component. A pure component avoids any use of state.

```javascript
const HeadlineComponent = props => return <h1>{props.headline}</h1>
```
Testing components like these are simpler, because we only need to see what's being passed in as props if there's an error. We don't have to check to see where  the state is being updated in this component or worry about some sort of logic in our `HeadlineComponent` incorrectly updating our state; if our headline is wrong, we know it's because the props are wrong.

# Conclusion

Function composition laid the foundation for many of the concepts in React, including pure components. Once we understand the principles behind functional programming, we can structure our React code base into a more predictable, testable application. I hope you've come away with a better idea of why pure components exist and how they can make you a better programmer. Feel to provide any feedback and criticisms.


 _This post is a quick and dirty look into the ideas of functional programming/composition that much greater developers than myself have written about. If you'd like to learn more about functional composition I liked to recommend a few resources that I found really helpful_: [Alvin Alexander](https://alvinalexander.com/scala/fp-book/benefits-of-pure-functions), [Fun fun Function](https://www.youtube.com/watch?v=cUrEedgvJSk&t=2s), [Scotch.io](https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition)