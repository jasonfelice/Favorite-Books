const addButton = document.getElementById('add-book');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static booksArray = [];

  addBook() {
    const booksWrapper = document.querySelector('.books-wrapper');
    const book = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const remove = document.createElement('button');
    remove.setAttribute('type', 'button');
    remove.setAttribute('value', this.title);
    remove.textContent = 'Remove';
    remove.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      const eventValue = e.target.attributes.value.value;
      Book.booksArray = Book.booksArray.filter((v) => !(v.title === eventValue));
      localStorage.setItem('books', JSON.stringify(Book.booksArray));
    });
    bookTitle.textContent = this.title;
    bookAuthor.textContent = this.author;
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(remove);
    book.appendChild(document.createElement('hr'));
    booksWrapper.appendChild(book);
  }
}

function updateBooks() {
  Book.booksArray.push({
    title: `${inputTitle.value}`,
    author: `${inputAuthor.value}`,
  });
  localStorage.setItem('books', JSON.stringify(Book.booksArray));
}

if (localStorage.books) {
  Book.booksArray = JSON.parse(localStorage.books);
}

if (Book.booksArray.length > 0) {
  for (let i = 0; i < Book.booksArray.length; i += 1) {
    const currentObj = new Book(Book.booksArray[i].title, Book.booksArray[i].author);
    currentObj.addBook();
  }
}

addButton.addEventListener('click', () => {
  const currentObj = new Book(inputTitle.value, inputAuthor.value);
  currentObj.addBook();
  updateBooks();
});