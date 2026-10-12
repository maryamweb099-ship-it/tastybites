// ===================================
// TASTY BITES - CONTACT FORM
// ===================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        formMessage.style.display = "block";
        formMessage.style.color = "#4ade80";
        formMessage.style.backgroundColor = "#202020";
        formMessage.style.padding = "15px";
        formMessage.style.marginTop = "15px";
        formMessage.style.borderRadius = "8px";
        formMessage.style.border = "1px solid #4ade80";

        formMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

        contactForm.reset();
    });
}


// ===== RECIPE SEARCH =====

const recipeSearch = document.getElementById("recipeSearch");
const searchButton = document.getElementById("searchButton");
const noResults = document.getElementById("noResults");
const recipeCards = document.querySelectorAll(".recipe-card");

if (recipeSearch && searchButton && noResults && recipeCards.length > 0) {

    function searchRecipes() {
        const searchText = recipeSearch.value.trim().toLowerCase();
        let foundRecipes = 0;

        recipeCards.forEach(function (card) {
            const recipeName = card
                .querySelector("h3")
                .textContent.toLowerCase();

            const recipeDescription = card.textContent.toLowerCase();

            const matches =
                recipeName.includes(searchText) ||
                recipeDescription.includes(searchText);

            card.style.display = matches ? "" : "none";

            if (matches) {
                foundRecipes++;
            }
        });

        noResults.hidden = foundRecipes !== 0;
    }

    searchButton.addEventListener("click", searchRecipes);

    recipeSearch.addEventListener("input", searchRecipes);

    recipeSearch.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchRecipes();
        }
    });
}