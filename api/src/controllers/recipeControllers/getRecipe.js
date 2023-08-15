require('dotenv').config();
const axios = require("axios");
const { Op } = require('sequelize');
const { Recipe, Diet } = require("../../db");
const { API_KEY, API_CERO, API_ONE, API_TWO, API_THEREE } = process.env;

const getRecipe = async () => {
    const response = await axios.get(API_CERO);
    const infoApi = response.data.results.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        diets: recipe.diets.join(', '),
        healthScore: recipe.healthScore,
        createdInDb: recipe.createdInDb,
    }));
    const infodb = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }
    })
    const allInfo = infoApi.concat(infodb)
    return allInfo;
}

const getName = async (title) => {
    const response = await axios.get(API_CERO);
    const infoApi = response.data.results
        .filter(recipe => recipe.title.toLowerCase().includes(title.toLowerCase()))
        .map(recipe => ({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            diets: recipe.diets.join(', '),
            healthScore: recipe.healthScore,
        }));
    const infoDb = await Recipe.findAll({
        where: {
            title: {
                [Op.iLike]: `%${title}%`,
            },
        },
        include:{
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    })
    allInfo = infoApi.concat(infoDb)
    return allInfo;
}
module.exports = {
    getRecipe,
    getName,
}
