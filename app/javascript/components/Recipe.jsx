import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Recipe(props) {
  const [recipe, setRecipe] = useState({ ingredients: "" });
  const navigate = useNavigate();
  let { id } = useParams();
  let ingredientList = "No ingredients available";

  useEffect(() => {
    const url = `/api/v1/recipes/show/${id}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Response was not ok");
      })
      .then((response) => setRecipe(response))
      .catch(() => navigate("/recipes"));
  }, []);

  function addHtmlEntities(str) {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  }

  function deleteRecipe() {
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/recipes"))
      .catch((error) => console.log(error.message));
  }

  if (recipe.ingredients.length > 0) {
    ingredientList = recipe.ingredients.split(",").map((ingredient, index) => (
      <li key={index} className="list-group-item">
        {ingredient}
      </li>
    ));
  }
  const recipeInstruction = addHtmlEntities(recipe.instruction);

  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={recipe.image}
          alt={`${recipe.name} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {recipe.name}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="mb-2">Ingredients</h5>
              {ingredientList}
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Preparation Instructions</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: `${recipeInstruction}`,
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-2">
            <button type="button" className="btn btn-danger" onClick={deleteRecipe}>
              Delete Recipe
            </button>
          </div>
        </div>
        <Link to="/recipes" className="btn btn-link">
          Back to recipes
        </Link>
      </div>
    </div>
  );
}
