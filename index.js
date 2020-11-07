const main = document.querySelector("#main");
let mealsArray = [];

const categories = document.querySelector("#categories");
let allBtns = document.querySelectorAll(".button.is-primary");

for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].index = i;

  allBtns[i].addEventListener("click", getMenu);
  main.innerHTML.value = "";
}

function getRecipe() {
  console.log("YES");
}

function empty() {
  mealsArray = [];
}

function getMenu(e) {
  empty();
  food = e.target.index;
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${allBtns[food].dataset.category}`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (obj) {
      mealsArray.push(...obj.meals);
      main.innerHTML = mealsArray
        .map(
          (obj) => `
          <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="${obj.strMealThumb}"
                alt="${obj.strMeal}"
                height="340"
                width="340"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-5">${obj.strMeal}</p>
              </div>
            </div>

            <div class="content">
              <button class="button is-fullwidth" data-id="${obj.idMeal}" onclick="location.href='indexPg2.html'">
                View Recipe
              </button>
            </div>
          </div>
        </div>
           `
        )
        .join("");
      console.log(obj);
    });
}
