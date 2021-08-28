
const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(ref => ref.json())
    .then(data => displayAllMeals(data))
}

loadMeals();

const displayAllMeals = meals => {
    meals.forEach( meal => {
        console.log(meal);
    });
}