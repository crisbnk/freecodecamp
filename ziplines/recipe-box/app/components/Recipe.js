var React = require('react');
var RecipeModalBox = require("../components/recipeModalBox");
var Modal = require('react-bootstrap').Modal;
var Image = require('react-bootstrap').Image;
var PropTypes = React.PropTypes;

function Recipe(props) {
  return (
    <div className="recipesList">
      {props.recipeList.length === 0 ?
        <div className="zeroPage">Your recipe-box is empty!<br></br>Add a new recipe...</div>
        :
        props.recipeList.map(function(recipe, id) {

        function editRecipe(id) {
          props.editRecipe(id);
        }

        function deleteRecipe() {
          props.deleteRecipe(id);
        }

        function saveTheIngredient(id, ingredient) {
          props.saveTheIngredient(id, ingredient);
        }

        function cancelIngredient(ingrId, id) {
          props.cancelIngredient(ingrId, id);
        }

        function showRecipeModal() {
          props.showRecipeModal(id);
        }

        function hideRecipeModal(id) {
          props.hideRecipeModal(id);
        }

        function saveModifiedRecipe(title, description) {
          props.saveModifiedRecipe(id, title, description);
        }

        return (
          <div key={id} className="singleRecipe" onClick={showRecipeModal}>
            <div>
              <span className="recipeTitle">
                {recipe.title}
              </span>
              <span onClick={deleteRecipe} className="recipeTrash"><i className="fa fa-trash-o"></i></span>
            </div>
            <Image src="http://www.marcellofotia.it/wp-content/uploads/2014/06/pizza.jpg" responsive />
            <RecipeModalBox id={id} recipe={recipe} hideRecipeModal={hideRecipeModal} editRecipe={editRecipe} cancelIngredient={cancelIngredient} saveTheIngredient={saveTheIngredient} saveModifiedRecipe={saveModifiedRecipe} />
          </div>
        )
      })}
    </div>
  )
}

Recipe.propTypes = {
  recipeList: PropTypes.array
}

module.exports = Recipe;
