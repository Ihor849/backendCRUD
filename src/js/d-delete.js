const BASE_URL = 'http://localhost:3000';
function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(url, options).then(res => res.json());
}

removeBook(31);
removeBook(8);
