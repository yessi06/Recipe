const { Router } = require('express');
const  recipeRouter  = require ('./recipe.routes');



const routerPi = Router();

routerPi.use("/recipe", recipeRouter);




module.exports = routerPi;
