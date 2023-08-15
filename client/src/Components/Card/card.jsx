import { Link } from "react-router-dom";
import style from "./card.module.css";

const Card = ({ id, title, image, diets, healthScore, createdInDb}) => {
  return (
    <div className={style.container}>
      <div className={style.blur}></div>
      <Link to={`/recipe/${id}`} className={style.link}>
        <img className={style.image} src={image} alt={title} />
        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
          <h3 className={style.diets}>{diets}</h3>
          <h3 className={style.healthScore}>{healthScore}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
