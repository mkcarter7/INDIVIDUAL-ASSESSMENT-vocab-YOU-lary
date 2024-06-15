import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#cards', domString);
};

const showWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-word-btn">Add Word</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-definition">${item.definition}</h6>
        <hr>
        <i class="fas fa-edit btn btn-info" id="edit-word-btn--${item.firebaseKey}">Edit</i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-word-btn--${item.firebaseKey}">Delete</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#cards', domString);
};

export { showWords, emptyWords };
