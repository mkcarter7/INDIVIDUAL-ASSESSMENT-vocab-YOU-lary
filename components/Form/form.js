import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWord = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="word">Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="word" placeholder="Enter Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="description">Language</label>
        <textarea class="form-control" placeholder="Language" id="language" style="height: 100px">${obj.language || ''}</textarea>
      </div>
      </div>
      <button type="submit" id="submit-word" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addWord;
