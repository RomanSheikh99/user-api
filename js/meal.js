
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
        let mealDisc = meal.strInstructions
        let mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${mealDisc.slice(0, 125)}</p>
                    <button class="btn btn-outline-warning fw-bolder" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="displayMealInfo('${meal.strMeal}')">Learn More</button>
                </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv);

        
    })
}


function displayMealInfo(name){
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(ref => ref.json())
    .then(data => displayMealDetails(data))
}

function displayMealDetails(meals){
    let meal = meals.meals[0];
    let mealTitle = document.getElementById('meal-title');
    mealTitle.innerText = `${meal.strMeal}`
    let modalIMG = document.getElementById('meal-modal-img');
    modalIMG.setAttribute('src',`${meal.strMealThumb}`)
    let mealTutorial = document.getElementById('meal-tutorial');
    mealTutorial.setAttribute('href',`${meal.strYoutube}`)
    let mealArea = document.getElementById('meal-area');
    mealArea.innerHTML = `
       <span cl>${meal.strMeal}</span>
        is an 
        <span class="text-warning">${meal.strArea}</span>
        Food.
    `
    console.log(meal);
}