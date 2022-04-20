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
    book.classList.add('book');
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
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
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    book.appendChild(bookInfo);
    book.appendChild(remove);
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

document.querySelector('.list-button').addEventListener('click', () => {
  document.querySelector('#book-list').style.display = 'block';
  document.querySelector('#ADD').style.display = 'none';
  document.querySelector('#contact').style.display = 'none';
});

document.querySelector('.add-book-button').addEventListener('click', () => {
  document.querySelector('#book-list').style.display = 'none';
  document.querySelector('#ADD').style.display = 'block';
  document.querySelector('#contact').style.display = 'none';
});

document.querySelector('.contact-button').addEventListener('click', () => {
  document.querySelector('#book-list').style.display = 'none';
  document.querySelector('#ADD').style.display = 'none';
  document.querySelector('#contact').style.display = 'block';
});