import renderToDOM from '../../utils/renderToDom';

const createButton = () => {
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Create an Entry</button>';
  renderToDOM('#add-button', btnString);
};
export default createButton;
