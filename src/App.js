import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const mockData = [
    {
      id: 1,
      name: "Pasta",
      category: "Italian",
      ingredients: ["Pasta", "Tomato Sauce", "Cheese"],
      instructions: "Boil pasta. Add sauce.",
      comments: ["Great recipe!", "Needs more cheese."],
    },
    {
      id: 2,
      name: "Sushi",
      category: "Japanese",
      ingredients: ["Rice", "Fish", "Seaweed"],
      instructions: "Roll it all up.",
      comments: ["Excellent", "I love it"],
    },
    {
      id: 3,
      name: "Tacos",
      category: "Mexican",
      ingredients: ["Tortilla", "Meat", "Cheese"],
      instructions: "Cook meat. Assemble taco.",
      comments: ["Tasty!", "Could use some guacamole."],
    },
    {
      id: 4,
      name: "Pizza",
      category: "Italian",
      ingredients: ["Dough", "Tomato Sauce", "Cheese"],
      instructions: "Bake at 400°F for 20 minutes.",
      comments: ["Classic", "I added some mushrooms."],
    },
    // More recipes can go here...
  ];

  const categories = [...new Set(mockData.map((item) => item.category))];

  return (
    <div className="App">
      <div className="container">
        <h1>My Recipes</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="row">
              {mockData
                .filter(
                  (recipe) =>
                    recipe.category === category &&
                    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((recipe) => (
                  <div key={recipe.id} className="col-4 recipe-card">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{recipe.name}</h5>
                        <button
                          onClick={() =>
                            setExpandedId(
                              expandedId === recipe.id ? null : recipe.id
                            )
                          }
                        >
                          Read More
                        </button>
                        {expandedId === recipe.id && (
                          <>
                            <h6>Ingredients:</h6>
                            <ul>
                              {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                            <h6>Instructions:</h6>
                            <p>{recipe.instructions}</p>
                            <h6>Comments:</h6>
                            <ul>
                              {recipe.comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
