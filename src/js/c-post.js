const BASE_URL = 'http://localhost:3000';

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

addBook({
  title: 'Тестовая книга по HTML',
  author: 'Я',
  genres: ['HTML'],
  rating: 57,
})
  .then(renderBook)
  .catch(error => console.log(error));

addBook({
  title: 'КНИГА HTML',
  author: 'КНИГА',
  genres: 25,
  rating: 53,
})
  .then(renderBook)
  .catch(error => console.log(error));

function renderBook(book) {
  console.log('Пришел ответ от бекенда можно рисовать');
  console.log(book);
}
