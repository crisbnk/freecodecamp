var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var Recipe = require("../components/recipe");
var AddForm = require("../components/addForm");

var RecipeContainer = React.createClass({
  getInitialState: function() {
    var storage = localStorage.getItem("recipes") || [];
    console.log(typeof storage, storage);
    return {
      recipes: [
        "Spaghetti al pomodoro",
        "Fettuccine ai funghi",
        "Pollo alla Diavola",
        "Parmigiana di melanzane"
      ]
    }
  },

  addRecipeToList: function(rec) {
    console.log(rec);
    this.state.recipes.push(rec);
    console.log(this.state.recipes);
    this.setState({
      recipes: this.state.recipes
    });
    localStorage.setItem("recipes", this.state.recipes);
  },

  render: function() {
    return (
      <div className="container row">
        <div className="col-md-6">
          <Recipe recipeList={this.state.recipes} />
        </div>
        <div className="col-md-6">
          <AddForm addRecipe={this.addRecipeToList} />
        </div>
      </div>
    )
  }
});

module.exports = RecipeContainer;
