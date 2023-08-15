const {getRecipe, getName} = require ("../../controllers/recipeControllers/getRecipe");

const reNaHandler = async  (req, res) => {
    const { title } = req.query;
    try {
        const result = title ? await getName(title) : await getRecipe()

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: "Ocurrió un error en el servidor" });
    }
}

module.exports ={
    reNaHandler,
}