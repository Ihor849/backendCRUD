const BASE_URL = 'http://localhost:3000';

// const options = {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ title: 'ОГРОМНАЯ Тестовая книга по HTML' }),
// };
// fetch(`${BASE_URL}/books/8`, options)
//   .then(res => res.json())
//   .then(console.log);

function updateBookId(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}
updateBookId({ title: 'Тест БОЛЬШЕЙ КНИГИ по React JS' }, 8);
updateBookId({ rating: 50 }, 31);
updateBookId({ author: 'Leo ', rating: 51 }, 32);
