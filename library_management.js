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
        return this.books.filter(book => book._isAvailable === 'true').length; //will filter out books availability status to only include those that are true, and count them using .length.
    }

    listBooks() {
        return this.books;
    }

}