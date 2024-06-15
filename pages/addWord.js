import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addWord = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-Vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="defination">definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition"value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="language">language</label>
        <input type="text" class="form-control" id="language" placeholder="Language"value="${obj.language || ''}" required>
      </div>
        </select>
    </div>

      <button type="submit" class="btn btn-primary mt-3">Submit Vocab</button>
    </form>`;

  renderToDOM('#form-container', domString);
};
export default addWord;
