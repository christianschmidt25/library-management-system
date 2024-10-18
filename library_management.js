// Task 1: Create a Book Class
// This class will include books and their properties, as well as a method to return the books description when logged.

class Book {
    constructor(title, author, ISBN, isAvailable) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; //having true here will make the default book status be available.
    }

    getDetails() {
        console.log(`${this.title}, written by ${this.author}, is ISBN ${this.ISBN}.`);
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(status) {
        if(typeof status === 'Boolean') { //shows that the status has to be Boolean (true or false)
            this._isAvailable = status; 
        }
        else {
            console.log("Invalid. Please change availability status to true or false.")
        }
    }
};


// Task 2: Create a Section Class
// This class will divide books by genre, and be able to tell which books are in this category. We can also add books, see available books, and see all books with this class.

class Section {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book); //adds book to the Book class
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length; //will filter out books availability status to only include those that are true, and count them using .length.
    }

    listBooks() {
        return this.books;
    }
    
    calculateTotalBooksAvailable() {
        return this.books.filter(book => book.isAvailable).length;
    }

}


// Task 3: Create a Patron Class
// This class will create a customer, with their name and the books they are currently borrowing. We will be able to create methods for them to successfully borrow and return books.

class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (!book.isAvailable) {
            return (`This book is currently being borrowed by another patron.`)}
        else {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            return `${book.title} is now being borrowed by ${this.name}.`
        }
    }

    returnBook(book) {
        if (book.isAvailable) {
            return "This book is currently not being borrowing. Please try a different book."
        }
        else {
            book.isAvailable = true;
            this.borrowedBooks = this.borrowedBooks.filter(book => book.title !== book.title);
            return `${book.title} has now been returned by ${this.name}.`
        }
    }
}


// Task 4: Create a VIPPatron Class that inherits from Patron class
// This class will be better than the regular patrons. We will allow our VIPs to have priority over regular patrons if both of them want to borrow th same book.

class VIPPatron extends Patron {
    constructor(name) {
        super(name);
        this.priority = true;
    }

    borrowBook(book, priority = true) {
        if (!book.isAvailable && priority) {
            return ("This book is currently unavailable, and a VIP patron has priority to borrow once it returns. Please try a different book.")
        }
        else if(!book.isAvailable) {
            return ("This book is currently unavailable. Please try a different book.")
        }
        else {
            return ("You are now borrowing this book.")
        }
    }
}


// Task 5: Handle Books Borrowing and Returning
// We will add a new method to the section class, calculating the total books in the section.

// I have added this method into task 2, but it looks like the same function as getAvailableBooks. I have duplicated what is inside that method and added to our new one.


// Task 6: Create and Manage Sections and Patrons
// We are now adding variables into each class! Let's see if our methods work.

const fiction = new Section("Fiction");
const science = new Section("Science");

const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

const regularPatron = new Patron("Jane Doe");
const vipPatron = new VIPPatron("John Smith", true);

regularPatron.borrowBook(book1);
vipPatron.borrowBook(book1);

regularPatron.returnBook(book1);

fiction.listBooks();

console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);