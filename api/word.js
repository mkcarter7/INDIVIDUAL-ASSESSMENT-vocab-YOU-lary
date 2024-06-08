import client from '../utils/client';

const endpoint = client.databaseURL;

// GET WORD
const getWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
export default getWords;
// // DELETE WORD
// const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/word/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });
// // CREATE WORD
// const createWord = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/word.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload)
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// // UPDATE WORD
// const updateWord = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/books/${payload.firebaseKey}.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload)
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });
export {
  getWords,
//   createWord,
//   deleteWord,
//   updateWord
};
