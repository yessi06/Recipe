import { GET_RECIPE, ORDER_AZ, SEARCH_BAR, GET_DIETS, GET_BY_DIET, FILTER_API_DB, FILTER_HEALTH_SCORE, DETAIL } from "./action_types.js";

const ASCENDING = "asc";
const DESCENDING = "desc";

const initialState = {
    recipe: [],
    allRecipe: [],
    diets: [],
    recipesFiltered: [],
    recipeDetail: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPE:
            return {
                ...state,
                allRecipe: action.payload,
                recipe: action.payload,
                recipesFiltered: action.payload,
            };

        case SEARCH_BAR:
            return {
                ...state,
                recipe: action.payload,
                recipesFiltered: action.payload,
            };

        case ORDER_AZ:
            const order = action.payload;
            const sortedRecipe = sortRecipe([...state.allRecipe], order === ASCENDING ? ASCENDING : DESCENDING, "title");
            return {
                ...state,
                recipe: sortedRecipe,
                recipesFiltered: sortedRecipe,
            };

        case GET_DIETS:
            return {
                ...state,
                diets: action.payload,
            };

        case GET_BY_DIET:
            const selectedDiet = action.payload;
            const filteredRecipesByDiet = state.allRecipe.filter(recipe => {
                const recipeDiets = recipe.diets.split(", ").map(diet => diet.trim());
                return recipeDiets.includes(selectedDiet);
            });
            return {
                ...state,
                recipe: filteredRecipesByDiet,
                recipesFiltered: filteredRecipesByDiet,
            };

        case FILTER_HEALTH_SCORE:
            const healthOrder = action.payload;
            const sortedHealthRecipes = sortRecipe([...state.allRecipe], healthOrder === "desc" ? "asc" : "desc", "healthScore");
            return {
                ...state,
                recipe: sortedHealthRecipes,
                recipesFiltered: sortedHealthRecipes,
            };

        case FILTER_API_DB:
            const filterType = action.payload;
            const filteredByApiDb = state.allRecipe.filter(recipe =>
                (filterType === "not-created" && !recipe.createInDb) || (filterType === "created" && recipe.createInDb)
            );
            return {
                ...state,
                recipe: filteredByApiDb,
                recipesFiltered: filteredByApiDb,
            };

        case DETAIL:
            return {
                ...state,
                recipeDetail: action.payload,
            };

        default:
            return state;
    }
};

const sortRecipe = (recipe, order, field) => {
    const sortedRecipe = [...recipe];
    sortedRecipe.sort((a, b) => {
        const valueA = field === "healthScore" ? parseFloat(a[field]) : a[field].toString();
        const valueB = field === "healthScore" ? parseFloat(b[field]) : b[field].toString();

        if (field === "healthScore") {
            return order === ASCENDING ? valueA - valueB : valueB - valueA;
        } else {
            return order === ASCENDING ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }
    });
    return sortedRecipe;
};


export default reducer;
