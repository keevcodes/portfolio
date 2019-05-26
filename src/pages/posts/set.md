---
date: May 26th, 2019
readTime: 5
category: "blog"
path: "/blog/sets"
title: "The JavaScript Set Object"
description: "What the Set?"
---

While doing some work the other day, I had a bit of a problem and learned of something I found quite useful, so I thought "Eh what the hell, why not create a post about this?

My team has integrated a **WYSIWYG** (btw...this apparently stands for What You See Is What You Get, three years in this industry I just now learned this. &#1F648;)
into our React application's backend to create posts. These posts have two columns, which can return either _markdown_, _buttons_ or _assets_ (images and videos). This data gets returned from our **GraphQl** API as an array of two items, something like this

```Array [Object{type: "text"}, Object{type: "asset"}]```

Now, these two bits of data will get wrapped into a component with a two-column layout and based on its type (eg: _text_, _asset_ or _button_) we render a different component.

## So... what's the problem?
In our **WYSIWIG** editor, any text written inside our first column that overflows maximum word length, the text wraps into our second column, giving our data back a
```{type: "text"}``` field. Well, if you're familiar at all with React, returning **markdown** we use the ```dangerouslySetInnerHTML```prop on our element and pass in our markdown data.

So if I use ```Array.filter()``` method to get render the appropriate ```<Image />```, ```<Text />```or ```<Button />```component, if the ```Array``` contains two objects with the text type, I'll end up rendering the markdown twice...obviously not desired.

## So just like, remove duplicates from your array dude?


So I need to remove any duplicates from my posts array, which is simple enough to do. We could first use ```Array.Map()``` over our posts array to to get each post's type and then use the ```Array.filter()``` method to compare the previous item to the current item, giving us a new array that we could then test to the original array to make sure we've got our intended result.

```
let postTypes = posts.map({post} => post);
let filteredPosts = postTypes.filter((type, i) => types.indexOf(type) === i));

```

There's nothing at all wrong here with this code. It's fairly simple to reason about, we're not doing any data mutation and we're keeping out side effects from our map. However, there's an even simpler way to return a unique list of Objects (well, any primitive actually) in JavaScript... the ```Set``` object.

## What's Set?

```Set``` is an object that can store any type of JavaScript primitive (think _booleans_, _strings_, _numbers_ here), but it will only store **unique** primitives. _**Wait... what???**_ That's awesome! **Yeah**, my fellow developer, **yeah**.

Instead of using the filter method, all we have to do is pass our ```postTypes``` array into the ```Set``` object and wrap it into an array.

``` let filteredPosts = [... new Set(postTypes)];```

and _**BAM!**_ a whole new array with its duplicates removed. But, that's not all folks! The ```Set```object also comes with some handy as hell methods to it as well like ```add()``` and ```includes()``` to add or find objects in your set.

I recommend taking a look at the [Mozilla Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) documentation at all the cool methods you have at your disposal with ```Set```.
