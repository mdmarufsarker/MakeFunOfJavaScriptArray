let productReview = [
  {
    name: "Md. Ashraf",
    response: "newbie",
    review: "5",
  },
  {
    name: "Jalal Uddin",
    response: "newbie",
    review: "3",
  },
  {
    name: "Saiful Islam",
    response: "pupil",
    review: "4",
  },
  {
    name: "Md. Rayhan",
    response: "newbie",
    review: "5",
  },
];

const positiveReview = productReview.every((value) => value.review >= 3);
// console.log(positiveReview); // false
let ans1 = (positiveReview) ? "Maximum review are positive" : "Not all reviews are positive";
console.log(ans1); // Maximum review are positive

let contestRating = [
  {
    name: "Md. Ashraf",
    rating: "1189",
  },
  {
    name: "Jalal Uddin",
    rating: "632",
  },
  {
    name: "Saiful Islam",
    rating: "799",
  },
  {
    name: "Md. Rayhan",
    rating: "1043",
  },
];

const rating = contestRating.some((value) => value.rating > 1000);
// console.log(rating); // true
let ans2 = (rating) ? "Some of them are expert" : "None of them are expert";
console.log(ans2); // "Some of them are expert"