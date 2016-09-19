var React = require('react');
var IngredientsList = require("./ingredientsList");
var Modal = require('react-bootstrap').Modal;
var AddForm = require("../containers/addForm");
var PropTypes = React.PropTypes;

function RecipeModalBox(props) {

  function saveTheIngredient() {
    var ingredient = document.getElementById('ingredient').value;
    props.saveTheIngredient(props.id, ingredient);
    document.getElementById('ingredient').value = "";
  }

  function hideRecipeModal() {
    props.hideRecipeModal(props.id);
  }

  function editRecipe() {
    props.editRecipe(props.id);
  }

  function cancelIngredient(ingrId) {
    props.cancelIngredient(ingrId, props.id);
  }

  function saveModifiedRecipe(title, description) {
    props.saveModifiedRecipe(title, description);
  }

  return (
    <Modal show={props.recipe.showModal} onHide={hideRecipeModal} bsSize="large" dialogClassName="modalStyle" aria-labelledby="contained-modal-title-lg">
      <AddForm recipe={props.recipe} editRecipe={editRecipe} saveModifiedRecipe={saveModifiedRecipe} />
    </Modal>
  )
}

RecipeModalBox.propTypes = {
  recipeList: PropTypes.array
}

module.exports = RecipeModalBox;
