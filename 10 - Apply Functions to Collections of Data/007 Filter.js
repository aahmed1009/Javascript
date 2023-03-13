//creates a new array with all elements that pass the test implemented by provided function
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter((n) => n % 2 === 1);
// console.log(odds);
const evens = nums.filter((n) => n % 2 === 0);
// console.log(evens);

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
const highestRating = books.filter((h) => h.rating >= 4);
// console.log(highestRating);

// Simple search functionality:
const query = "The";
const results = books.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});
console.log(results);
