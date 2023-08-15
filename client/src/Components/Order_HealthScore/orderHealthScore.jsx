import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterHealthScore } from "../../redux/actions";
import style from "./orderHealthScore.module.css";

const HealthScoreFilter = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState("asc");

    const handleFilterChange = (newOrder) => {
        setOrder(newOrder);
        dispatch(filterHealthScore(newOrder));
    };

    return (
        <div className={style.container}>
            <h2>Filter Health Score</h2>
            <p>Ordenar por puntuación de salud:</p>
            <button
                onClick={() => handleFilterChange("asc")}
                className={style.boton}
            >
                100 - 0
            </button>
            <button
                onClick={() => handleFilterChange("desc")}
                className={style.boton}
            >
                0 - 100
            </button>
        </div>
    );
};

export default HealthScoreFilter;
