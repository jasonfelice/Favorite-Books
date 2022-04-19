const addButton = document.getElementById('add-book');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
let booksArray = [];

if (localStorage.books) {
  booksArray = JSON.parse(localStorage.books);
}

function addBook(title, author) {
  const booksWrapper = document.querySelector('.books-wrapper');
  const book = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('p');
  const remove = document.createElement('button');
  remove.setAttribute('type', 'button');
  remove.setAttribute('value', `${title}`);
  remove.textContent = 'Remove';
  remove.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    booksArray = booksArray.filter((v) => !(v.title === e.target.attributes.value.value));
    localStorage.setItem('books', JSON.stringify(booksArray));
  });
  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  book.appendChild(bookTitle);
  book.appendChild(bookAuthor);
  book.appendChild(remove);
  book.appendChild(document.createElement('hr'));
  booksWrapper.appendChild(book);
}

if (booksArray.length > 0) {
  for (let i = 0; i < booksArray.length; i += 1) {
    addBook(booksArray[i].title, booksArray[i].author);
  }
}

function updateBooks() {
  booksArray.push({
    title: `${inputTitle.value}`,
    author: `${inputAuthor.value}`,
  });
  localStorage.setItem('books', JSON.stringify(booksArray));
}

addButton.addEventListener('click', updateBooks);
addButton.addEventListener('click', () => {
  addBook(inputTitle.value, inputAuthor.value);
});