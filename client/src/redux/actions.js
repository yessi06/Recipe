import axios from "axios";
import {
    GET_RECIPE,
    ORDER_AZ,
    SEARCH_BAR,
    GET_DIETS,
    GET_BY_DIET,
    FILTER_API_DB,
    FILTER_HEALTH_SCORE,
    DETAIL,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_FAILURE,
} from "./action_types.js";

export const getRecipe = () => {
    return async function (dispatch) {
        const response = await axios('http://localhost:3001/recipe');
        return dispatch({ type: GET_RECIPE, payload: response.data })
    }
};

export const searchBar = (payload) => {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/recipe?title=${payload}`);
        return dispatch({ type: SEARCH_BAR, payload: response.data })
    }
};

export const orderAz = (payload) => {
    return { type: ORDER_AZ, payload: payload };
};

export const getDiets = () => {
    return async function (dispatch) {
        const response = await axios("http://localhost:3001/recipe/diet");
        return dispatch({ type: GET_DIETS, payload: response.data })
    }
};

export const getByDiet = (payload) => {
    return { type: GET_BY_DIET, payload };
};

export const filterHealthScore = (payload) => {
    return {
        type: FILTER_HEALTH_SCORE,
        payload: payload
    };
};

export function filterApiDb(payload) {
    return {
        type: FILTER_API_DB, payload: payload
    }
};

export const detail = (id) => {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/recipe/${id}`)
        return dispatch({ type: DETAIL, payload: response.data })
    }
};

export const createRecipe = (recipeData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/recipe', recipeData);
            dispatch({ type: CREATE_RECIPE_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CREATE_RECIPE_FAILURE, error });
        }
    };
};