const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((books)=> {
  console.log(
`${books.authorFirst} ${books.authorLast} wrote ${books.name} in ${books.publishDate}`
  );
}); 
//Sort books from oldest to most recent
 console.log("sort books from oldest to most");
books
.sort((a, b) => a.publishDate - b.publishDate)
.forEach((book) => {
  console.log(book.name);
});
//sort books alphabetically
console.log("SORT BOOKS ALPHABETICALLY");
books.sort((a, b)=> {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if(nameA > nameB) {
    return 1;
  }
  return 0;

})
.forEach((book) => {
  console.log(book.name);
});
//Find who wrote War and Peace
console.log("WHO WROTE WAR AND PEACE");
books
.filter((book) => book.name == "War and Peace")
.forEach((book) => {
  console.log(book.authorFirst, book.authorLast);
});
//how many books were written before 1900?
console.log("HOW MANY BOOKS WERE WRITTEN BEFORE 1900");
books
.filter((book) => book.publishDate <1900)
.forEach((book) => {
  console.log(book.name);
});

const booknumber = books.filter((book)=> book.publishDate< 1900);
console.log(booknumber.length);
//was there at least one book published within the last 100 years?
console.log("WAS THERE AT LEAST ONE BOOK PUBLISHED WITHIN THE LAST 100 YEARS?");
if (books.some((book)=> new Date().getFullYear() - book.publishDate <=100)){
  console.log("yes");

} else {
  console.log("no");
}
//was every book published within the last 100 years?
console.log("was every book published within the last 100 years?");
if (books.every((book) => new Date().getFullYear() - book.publishDate <=100)) {
  console.log("yes");
} else {
  console.log("no");
}
//print a list of books that "includes" the genre historical
console.log("print a list of books that includes the genre historical");
books
.filter((book) => book.genre.includes("historical"))
.forEach((book) => {
 console.log(book.name);
});
