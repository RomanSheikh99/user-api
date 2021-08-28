
const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(ref => ref.json())
    .then(data => displayAllMeals(data))
}

loadMeals();

const displayAllMeals = meals => {
    console.log(meals);
    let allMeals = meals.meals;
    let mealsContainer = document.getElementById('meals-container');
    let nullSearchText = document.getElementById('search-box');
    let text = nullSearchText.value;
    mealsContainer.textContent = '';
    if(allMeals == null){
        mealsContainer.innerHTML = `
            <div class="col text-center my-3 fs-6 "><h1 cl>😭</h1</div>
            <div class="col-12">
                <h2 class="text-center fw-bold my-3 text-danger">${text} Not Found</h2>
            </div>
            <div class="col text-center my-3 fs-6">😭</div>
        `
        nullSearchText.value = ''
        console.log("kono kiso khuje pai nai");
    }
    else{
        allMeals.forEach(meal => {
            console.log(meal);
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
            nullSearchText.value = ''
            mealsContainer.appendChild(mealDiv);
        })
    } 
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
       <span class="fw-bold">${meal.strMeal}</span>
        is an 
        <span class="text-warning fw-bolder">${meal.strArea}</span>
        Food.
    `
    let mealCategory = document.getElementById('meal-category');
    mealCategory.innerText = `${meal.strCategory}`
    let mealIngredient1 = document.getElementById('meal-ingredient-1');
    let mealIngredient2 = document.getElementById('meal-ingredient-2');
    let mealIngredient3 = document.getElementById('meal-ingredient-3');
    let mealIngredient4 = document.getElementById('meal-ingredient-4');
    let mealIngredient5 = document.getElementById('meal-ingredient-5');
    let mealIngredient6 = document.getElementById('meal-ingredient-6');
    let mealIngredient7 = document.getElementById('meal-ingredient-7');
    let mealIngredient8 = document.getElementById('meal-ingredient-8');
    let mealIngredient9 = document.getElementById('meal-ingredient-9');
    let mealIngredient10 = document.getElementById('meal-ingredient-10');
    mealIngredient1.innerText = `${meal.strIngredient1}`
    mealIngredient2.innerText = `${meal.strIngredient2}`
    mealIngredient3.innerText = `${meal.strIngredient3}`
    mealIngredient4.innerText = `${meal.strIngredient4}`
    mealIngredient5.innerText = `${meal.strIngredient5}`
    mealIngredient6.innerText = `${meal.strIngredient6}`
    mealIngredient7.innerText = `${meal.strIngredient7}`
    mealIngredient8.innerText = `${meal.strIngredient8}`
    mealIngredient9.innerText = `${meal.strIngredient9}`
    mealIngredient10.innerText = `${meal.strIngredient10}`
    let mealInstructions = document.getElementById('meal-Instructions');
    mealInstructions.innerText = `${meal.strInstructions}`
    let mealTags = document.getElementById('meal-tags');
    mealTags.innerText = `${meal.strTags}`
    console.log(meal);
}


// fetch meal by name

document.getElementById('search-btn').addEventListener('click', function(){
    let searchBox = document.getElementById('search-box');
    let searchText = searchBox.value.toLowerCase();
    // console.log(searchText);
    loadMealsByName(searchText)
})

const loadMealsByName = mealName => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
    .then(ref => ref.json())
    .then(data => displayAllMeals(data))
}

