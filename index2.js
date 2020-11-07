let mealsDetails = [];
const section = document.querySelector("#Recipes");
let recipeBtns = document.querySelectorAll("button[data-id]");

for (let i = 0; i < recipeBtns.length; i++) {
  recipeBtns[i].index = i;

  recipeBtns[i].addEventListener("click", getRecipe);
  section.innerHTML.value = "";
}

function getRecipe(e) {
  idx = e.target.index;
  fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeBtns[idx].dataset.id}`
  )
    .then(function (res1) {
      return res1.json();
    })
    .then(function (obj1) {
      mealsDetails.push(...obj1.meals);
      section.innerHTML = mealsDetails
        .map(
          (obj1) => `
                <h1 class="title is-1">${obj1.strMeal}</h1>
                <div class="content">
                  <div class="tags">
                    <span class="tag">Dutch</span><span class="tag">Snack</span>
                  </div>
                </div>
                <main class="level">
  
                  <div class="level-left">
                    <div class="level-item">
                      <img
                        src="${obj1.strMealThumb}"
                        alt="${obj1.strMeal}"
                      />
                    </div>
                  </div>
  
                  <div class="level-right">
                    <div class="content">
                      <h2 class="title is-2">Ingredients</h2>
                      <ul>
                        <li>250 Grams Fries</li>
                        <li>500 Grams Doner Meat</li>
                        <li>Topping Garlic sauce</li>
                        <li>Topping Hotsauce</li>
                        <li>1 Bulb Lettuce</li>
                        <li>1 Tomato</li>
                        <li>3rd Cucumber</li>
                        <li>100 Grams Gouda cheese</li>
                      </ul>
                      <br />
                      <a
                        class="button is-large is-fullwidth is-primary"
                        href="https://www.youtube.com/watch?v=UIcuiU1kV8I"
                        >View Youtube Video</a
                      >
                    </div>
                  </div>
                </main>
  
                <div class="content">
                  <h2 class="title is-2">Directions</h2>
                  <div class="block">
                    <p>
                      Cut the meat into strips. Heat oil in a pan and fry the
                      strips for 6 minutes until it's ready.
                      <br /><br />Bake the fries until golden brown in a deep
                      fryrer. When ready transfer to a backing dish. Make sure the
                      fries are spread over the whole dish. <br /><br />Cover the
                      fries with a new layer of meat and spread evenly.
                      <br /><br />Add a layer of cheese over the meat. You can
                      also use grated cheese. When done put in the oven for a few
                      minutes until the cheese is melted. <br /><br />Chop the
                      lettuce, tomato and cucumber in small pieces and mix
                      together. for a basic salad. As extra you can add olives
                      jalapenos and a red union. <br /><br />Dived the salad over
                      the dish and Serve with garlicsauce and hot sauce
                    </p>
                  </div>
                </div>

           `
        )
        .join("");
      console.log(obj);
    });
}
