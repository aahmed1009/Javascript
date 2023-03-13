//SORT
//By default, the sort() function sorts values as strings.
// SORT() MUTATES THE ORIGINAL ARRAY!
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
//it converts numbers to strings and sort them as strings ...
//based of strings rather than the actual value
//[ 12, 3000, 35.99, 400.5, 9500, 99.99 ]

console.log(prices.sort());
//customizing sort behavior
// arr.sort(compareFunc(a,b))
// If compareFunc(a,b) returns less than 0
// Sort a before b
// If compareFunc(a,b) returns 0
// Leave a and b unchanged with respect to
// each other
// If compareFunc(a,b) returns greater than 0
// Sort b before a
const ascendingOrder = prices.sort((a, b) => a - b);
console.log(ascendingOrder);
const descindingOrder = prices.sort((a, b) => b - a);
console.log(descindingOrder);
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];
// const arrangeFromLowestToHighestRating = books.sort(
//   (a, b) => a.rating - b.rating
// );
// console.log(arrangeFromLowestToHighestRating);
const arrangeFromHighestToLowestRating = books.sort(
  (a, b) => b.rating - a.rating
);
console.log(arrangeFromHighestToLowestRating);
