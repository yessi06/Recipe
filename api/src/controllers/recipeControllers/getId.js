require('dotenv').config();
const axios = require("axios");
const { API_KEY, API_CERO, API_ONE, API_TWO, API_THEREE } = process.env;
const { Recipe, Diet } = require("../../db");

const getRecipe = async () => {
  try {
    const response = await axios.get(API_CERO);
    const results = response.data.results.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary.replace(/<[^>]+>/g, ""),
      healthScore: recipe.healthScore,
      steps: recipe.analyzedInstructions[0]?.steps?.map(step => step.step) || [],
      diets: recipe.diets.join(', '),
      createdInDb: recipe.createdInDb
    }));
    return results;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener las recetas de la API');
  }
}


const getDb = async () => {
  try {
    const recipeDb = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      }
    });
    return recipeDb;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener las recetas de la base de datos');
  }
}


const getAllRecipes = async () => {
  try {
    const api = await getRecipe();
    const db = await getDb();
    const allRecipes = api.concat(db);
    return allRecipes;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener todas las recetas');
  }
}

module.exports = {
  getAllRecipes,
}