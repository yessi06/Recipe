const { Router } = require('express');
const { reNaHandler } = require('../handlers/recipeHandlers/reNaHandler');
const { getId } = require('../handlers/recipeHandlers/idHandler');
const { getDiet } = require('../controllers/dietControllers/getDiet');
const { getPost } = require('../controllers/recipeControllers/postRecipe');






const recipeRouter = Router();

recipeRouter.get("/", reNaHandler);
recipeRouter.get("/diet", getDiet);
recipeRouter.get("/:id", getId);
recipeRouter.post("/", getPost);






// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = recipeRouter;
