

let loadCategory = () => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/categories")
        .then(res => res.json())
        .then(json => {
            // console.log(json.categories)
            displayCategory(json.categories);
        })
}

let displayCategory = (categories) => {

    let categoryContainer = document.getElementById("category-container");

    categories.forEach((category) => {

        let btn = document.createElement("button");

        btn.innerHTML = `
        <button class="btn btn-block shadow btn-category">
            <img
              src="${category.categoryImg}"
              alt=""
              class="w-10"
            />${category.categoryName}
          </button>
        `
        categoryContainer.append(btn)
    })
}

loadCategory();