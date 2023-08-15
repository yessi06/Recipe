import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detail } from "../../redux/actions";
import styles from "./detail.module.css";
import NavBar from "../NavBar/NavBar";

const Detail = () => {
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(detail(id));
  }, [id, dispatch]);

  const renderDiets = () => {
    if (Array.isArray(recipeDetail[0]?.diets)) {
      return recipeDetail[0]?.diets.map((diet) => diet.name).join(", ");
    }
    return recipeDetail[0]?.diets;
  };

  return (
    <div className={styles.detailContainer}>
      <NavBar />
      <div className={styles.header}>{recipeDetail[0]?.title}</div>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <img
            className={styles.detailImage}
            src={recipeDetail[0]?.image}
            alt={recipeDetail[0]?.title}
          />
          <div className={styles.healthScore}>
            Health Score: {recipeDetail[0]?.healthScore}
          </div>
          <p className={styles.detailDiets}>{renderDiets()}</p>
        </div>
        <div className={styles.rightColumn}>
          <h2 className={styles.titulo}>Summary</h2>
          <p className={styles.detailSummary}>{recipeDetail[0]?.summary}</p>
          <h2 className={styles.titulo}>Steps</h2>
          <p className={styles.detailSteps}>
            {recipeDetail[0]?.steps} {recipeDetail[0]?.step}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
