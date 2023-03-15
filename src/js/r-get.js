const BASE_URL = 'http://localhost:3000';
function fetchBooks() {
  return fetch(`${BASE_URL}/books`)
    .then(respons => respons.json())
    .then(console.log);
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
    .then(respons => respons.json())
    .then(console.log);
}

console.log(fetchBooks());

fetchBookById(2);
fetchBookById(4);
