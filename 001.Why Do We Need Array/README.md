# Array

Let's assume that I have a crush 🐱. Now I can easily store her into my memory.

```js
let crushMemory = {"sadia"}
```

But what if I have more than one crush? Do I need to create a lot of variables? Something like this?

```js
let crushMemory1 = {"sadia"}
let crushMemory2 = {"sumaiya"}
let crushMemory3 = {"sabrina"}
```

What if I have 100 crushes? Do I need to create 100 variables?

The answer is **NO**. I can easily store all of my crushes into a single variable. And that variable is called **Array**.

```js
let crushMemory = ["sadia", "sumaiya", "sabrina"]
```

Now I can easily access any of my crushes by using their index number. Normally we count from 1. But in programming we count from 0. So the index number of the first crush is 0, the index number of the second crush is 1 and the index number of the third crush is 2.

```js
let crushMemory = ["sadia", "sumaiya", "sabrina"]
console.log(crushMemory[0]) // sadia
console.log(crushMemory[1]) // sumaiya
console.log(crushMemory[2]) // sabrina
```

According to wikipedia, an array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. An array is stored so that the position of each element can be computed from its index by a mathematical formula.
