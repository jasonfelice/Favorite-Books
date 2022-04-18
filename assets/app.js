const addButton = document.getElementById('add-book');

function addBook() {
    if((document.getElementById('title').value) && (document.getElementById('author').value)){
      const booksWrapper = document.querySelector('.books-wrapper');
      const book = document.createElement('div');
      const bookTitle = document.createElement('h2');
      const bookAuthor = document.createElement('h4');
      bookTitle.textContent = document.getElementById('title').value;
      bookAuthor.textContent = document.getElementById('author').value;
      book.appendChild(bookTitle);
      book.appendChild(bookAuthor);
      book.appendChild(document.createElement('hr'));
      booksWrapper.appendChild(book);
 }
}

addButton.addEventListener('click', addBook);