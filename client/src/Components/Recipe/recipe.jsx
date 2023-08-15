import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../redux/actions.js";
import Card from "../Card/card.jsx";
import style from "./recipe.module.css"

const Recipe = () => {
    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.recipe);

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getRecipe());
    }, [dispatch]);


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentRecipePage = recipe.slice(startIndex, endIndex);

    const totalPages = Math.ceil(recipe.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className={style.container}>
                {currentRecipePage.length > 0 ? (
                    currentRecipePage.map((recipe) => (
                        <Card
                            key={recipe.id || recipe.name}
                            title={recipe.title || recipe.name}
                            image={recipe.image}
                            diets={Array.isArray(recipe.diets) ? recipe.diets.map((diet) => diet.name).join(", ") : recipe.diets}
                            healthScore={recipe.healthScore}
                            createdInDb={recipe.createdInDb}
                            id={recipe.id}
                        />
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        className={style.boton}
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                      
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Recipe;
