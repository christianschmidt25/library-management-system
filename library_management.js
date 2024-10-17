// Task 1: Create a Book Class
// This class will include books and their properties, as well as a method to return the books description when logged.

class Book {
    constructor(title, author, ISBN, isAvailable) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }

    getDetails() {
        console.log(`${this.title}, written by ${this.author}, is ISBN ${this.ISBN}.`);
    }

    get isAvailable() {
        return this._isAvailable;
    }

    set isAvailable(status) {
        if(typeof status === Boolean) {
            this._isAvailable = status; 
        }
        else {
            console.log("Invalid. Please change availability status to true or false.")
        }
    }
};