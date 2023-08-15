require('dotenv').config();
const { API_KEY, API_CERO, API_ONE, API_TWO, API_THEREE } = process.env;
const axios = require("axios");
const { Diet } = require("../../db");

const getDiet = async (req, res) => {
  try {
    const response = await axios.get(API_CERO);
    const dietsSet = new Set();

    response.data.results.forEach((diet) => {
      diet.diets.forEach((d) => dietsSet.add(d));
    });

    const uniqueDiets = Array.from(dietsSet);

    for (const diet of uniqueDiets) {
      await Diet.findOrCreate({
        where: { name: diet },
      });
    }
    res.json(uniqueDiets);
  } catch (error) {
    console.log("Error fetching and saving diets:", error);
    res.status(500).json({ error: "Error fetching and saving diets" });
  }
};

module.exports = { getDiet };