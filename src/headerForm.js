import React, { Component } from "react";
import "./css/headerform.css";
import RecipeSearch from "./RecipeSearch";
class HeaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      foodItem: "",
    };
  }

  getRecipe = (e) => {
    e.preventDefault();

    var item = document.getElementById("text").value;

    this.setState({
      searched: true,
      foodItem: item,
    });
  };

  render() {
    return (
      <div>
        <div className="header-container">
          <h1 className="heading">Recipe Finder</h1>
          <form className="input-form">
            <input
              type="text"
              placeholder="Enter the name of the dish"
              id="text"
            />
            <input
              type="submit"
              value="Get Recipes"
              onClick={this.getRecipe}
            />
          </form>
        </div>
       {this.state.searched ? (
          <RecipeSearch foodItem={this.state.foodItem} />
        ) : (
          <h2 className="center">
            Type a Dish Name to search for its ingredients
          </h2>
        )}
      </div>
    );
  }
}
export default HeaderForm;
