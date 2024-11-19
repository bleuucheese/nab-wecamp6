// Welcome to the Digital Library Catalog Creator!
// Follow the TODO instructions to build your library catalog and learn about JavaScript data types.

// #TODO 1: Create a string variable called 'libraryName' with the name of your library
let libraryName = 'Lmao Library';
// #TODO 2: Create a number variable called 'totalBooks' with the total number of books
let totalBooks = 420;
// #TODO 3: Create a boolean variable called 'isOpen' to indicate if the library is currently open
let isOpen = true;
// #TODO 4: Create an array called 'bookCategories' with at least 5 book categories
let bookCategories = ['scientific', 'comics', 'maths', 'history', 'romance'];
// #TODO 5: Create an object called 'featuredBook' with properties: title, author, and year
let featuredBook = {
    title: 'Introduction to the Design and Analysis of Algorithms',
    author: 'Anany Levitin',
    year: 2003};

// #TODO 6: Create a null variable called 'specialExhibit' (imagine we don't have one right now)
let specialExhibit = null;
// #TODO 7: Create an undefined variable called 'nextEvent'
let nextEvent = undefined;
// Display initial library info
console.log("Library Catalog Information:");
console.log(`Name: ${libraryName}`);
console.log(`Total Books: ${totalBooks}`);
console.log(`Is Open: ${isOpen}`);
console.log(`Book Categories: ${bookCategories}`);
console.log("Featured Book:", featuredBook);
console.log(`Special Exhibit: ${specialExhibit}`);
console.log(`Next Event: ${nextEvent}`);

// #TODO 8: Use typeof to check the data type of each variable and log it to the console
console.log("\nVariable Types:");
console.log(`libraryName: ${typeof libraryName}`);
console.log(`totalBooks: ${typeof totalBooks}`);
console.log(`isOpen: ${typeof isOpen}`);
console.log(`bookCategories: ${typeof bookCategories}`);
console.log(`featuredBook: ${typeof featuredBook}`);
console.log(`specialExhibit: ${typeof specialExhibit}`);
console.log(`nextEvent: ${typeof nextEvent}`);

// #TODO 9: Add a new category to the 'bookCategories' array
bookCategories.push('fantasy');
// #TODO 10: Change the 'specialExhibit' from null to a string value
specialExhibit = 'Cosmos by Carl Sagan';
// #TODO 11: Add a new property 'isbn' to the 'featuredBook' object
featuredBook['isbn'] = '978-0132316811';
// #TODO 12: Create a template literal to welcome customer to visit our library (hint: using `${}`)
let libraryDescription = `Welcome to ${libraryName}! We have ${totalBooks} books in our collection, including the featured book "${featuredBook.title}" by ${featuredBook.author}.`;

console.log("\nLibrary Description:");
console.log(libraryDescription);

// #TODO 13: Use the Array.isArray() method to check if 'bookCategories' is an array
console.log(`\nIs bookCategories an array? ${Array.isArray(bookCategories)}`);

// #TODO 14: Use the isNaN() function to check if 'totalBooks' is a valid number
console.log(`Is totalBooks a valid number? ${!isNaN(totalBooks)}`);

// Bonus Challenge:
// #TODO 15: Create a Set called 'uniqueAuthors' with at least 3 author names (including the featured book's author)
let uniqueAuthors = new Set();
uniqueAuthors.add('Anany Levitin');
uniqueAuthors.add('Carl Sagan');
uniqueAuthors.add('J.K. Rowling');
console.log("\nUnique Authors:", uniqueAuthors);

// #TODO 16: Create a Map called 'bookStock' with at least 3 entries of book titles and their stock quantities
let bookStock = new Map();
bookStock.set('Introduction to the Design and Analysis of Algorithms', 5);
bookStock.set('Cosmos', 3);
bookStock.set('Harry Potter and the Philosopher\'s Stone', 10);

console.log("\nBook Stock:");
bookStock.forEach((stock, title) => {
    console.log(`${title}: ${stock}`);
});