const recipeInput = document.getElementById("gIdea");
const ingredientsInput = document.getElementById("gName");
const instructionInput = document.getElementById("gSubmit");
const btnSubmit = document.getElementById("addButton");
const tableElement = document.getElementById("tableLine");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    let tableRow = document.createElement("tr");
    let recipeIdea = document.createElement("td");
    let ingredientIdea = document.createElement("td");
    let instructionIdea = document.createElement("td");
    
    const newRecipe = recipeInput.value;
    const newIngredient = ingredientsInput.value;
    const newInstruction = instructionInput.value;
     
  
    recipeIdea.innerText = newRecipe;
    ingredientIdea.innerText = newIngredient;
    instructionIdea.innerText = newInstruction;

    
    tableRow.appendChild(recipeIdea);
    tableRow.appendChild(ingredientIdea);
    tableRow.appendChild(instructionIdea);

 
    tableElement.appendChild(tableRow);


    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.id = "removeAllButton";
    

  
});

const removeAllButton = document.getElementById("removeAllButton");
removeAllButton.addEventListener("click", () => {
    tableElement.innerHTML = '';  
});

