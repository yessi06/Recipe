import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, getByDiet, getRecipe } from '../../redux/actions';
import style from "./getDiets.module.css"

const DietFilter = () => {
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);
  
    useEffect(() => {
      dispatch(getDiets());
    }, [dispatch]);
  
    const handleFilter = (selectedDiet) => {
      if (selectedDiet === "") {
      dispatch(getRecipe());
      } else {
      dispatch(getByDiet(selectedDiet));
      }
    };
  
    return (
      <div>
        <h2>Filtrar por Dieta</h2>
        <select  className={style.boton} onChange={(e) => handleFilter(e.target.value)}>
          <option  className={style.boton} value="">Todo</option>
          {diets.map((diet) => (
            <option  className={style.boton} key={diet} value={diet}>
              {diet}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default DietFilter;