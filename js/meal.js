
const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(ref => ref.json())
    .then(data => displayAllMeals(data))
}

loadMeals();

const displayAllMeals = meals => {
    let allMeals = meals.meals;
    let mealsContainer = document.getElementById('meals-container');
    allMeals.forEach(meal => {
        console.log(meal.strMealThumb);
        console.log(meal.strMeal);
        let mealDisc = meal.strInstructions
        console.log(mealDisc.slice(0, 125));

        let mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${mealDisc.slice(0, 125)}</p>
                    <button class="btn btn-outline-warning fw-bolder">Learn More</button>
                </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv);

        
    })
}