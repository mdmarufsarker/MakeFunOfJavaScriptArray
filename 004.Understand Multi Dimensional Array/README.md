# Understand Multi Dimensional Array

Here I have created an array of 3 elements and those elements are "sadia", "sumaiya" and "sabrina". All of those elements are names of my crushes. Now the question arises that `keya yea jamane me mene bas 3 crushes ka nam yad rakhtahu? or ya fer un 3 oka nam, favorite color, birthday, havit, favorite food etc yad rakhtahu. So, how can I store all of those information?`

Up to this point, we learned that we can store multiple values into a single variable by using an array. It's called 1D array. 1D means 1 dimensional. It's like a line. But what if we want to store multiple values into a single variable in a 2D way? It's like a table. We can do that by using a 2D array. Let's see how we can do that.

```js
let crushMemory = [
  ["sadia", "sumaiya", "sabrina"],
  ["red", "blue", "green"],
  ["1st January", "2nd February", "3rd March"],
  ["pizza", "burger", "hotdog"],
];
```

Let's visualize this 2D array in a table.

```md
| Name    | Favorite Color | Birthday     | Favorite Food |
| ------- | -------------- | ------------ | ------------- |
| sadia   | red            | 1st January  | pizza         |
| sumaiya | blue           | 2nd February | burger        |
| sabrina | green          | 3rd March    | hotdog        |
```

Now we can easily access any of the information by using the index number of the row and the column. Let's see how we can do that.

```js
let crushMemory = [
  ["sadia", "sumaiya", "sabrina"],
  ["red", "blue", "green"],
  ["1st January", "2nd February", "3rd March"],
  ["pizza", "burger", "hotdog"],
];

console.log(crushMemory[0][0]); // sadia
console.log(crushMemory[0][1]); // sumaiya
console.log(crushMemory[0][2]); // sabrina

console.log(crushMemory[1][0]); // red
console.log(crushMemory[1][1]); // blue
console.log(crushMemory[1][2]); // green

console.log(crushMemory[2][0]); // 1st January
console.log(crushMemory[2][1]); // 2nd February
console.log(crushMemory[2][2]); // 3rd March

console.log(crushMemory[3][0]); // pizza
console.log(crushMemory[3][1]); // burger
console.log(crushMemory[3][2]); // hotdog
```

Here we can see a variable with a lots of data. How can we use those data to make information? Let's see how we can do that.

```js
let crushMemory = [
  ["sadia", "sumaiya", "sabrina"],
  ["red", "blue", "green"],
  ["1st January", "2nd February", "3rd March"],
  ["pizza", "burger", "hotdog"],
];

console.log(crushMemory[0][0] + " loves " + " and her favorite color is " + crushMemory[1][0] + ". Her birthday is " + crushMemory[2][0] + "."); 
// sadia loves pizza and her favorite color is red. Her birthday is 1st January.
console.log(crushMemory[0][1] + " loves " + " and her favorite color is " + crushMemory[1][1] + ". Her birthday is " + crushMemory[2][1] + ".");
// sumaiya loves burger and her favorite color is blue. Her birthday is 2nd February.
console.log(crushMemory[0][2] + " loves " + " and her favorite color is " + crushMemory[1][2] + ". Her birthday is " + crushMemory[2][2] + ".");
// sabrina loves hotdog and her favorite color is green. Her birthday is 3rd March.
```

If you come up to this point than congratulations 🎉. You have learned how to use array to store multiple values into a single variable. You have also learned how to use 2D array to store multiple values into a single variable in a 2D way. And finally you have learned how to use those data to make information.
