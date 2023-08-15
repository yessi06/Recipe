import DietFilter from "../../Components/Get_Diets/getDiets.jsx";
import OrderAz from "../../Components/Order_AZ/order_Az.jsx";
import HealthScoreFilter from "../../Components/Order_HealthScore/orderHealthScore.jsx";
import Recipe from "../../Components/Recipe/recipe.jsx";
import SearchBar from "../../Components/Search_Bar/searchBar.jsx";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import FilterCreated from "../../Components/Filter_API_DB/filterApiDb.jsx";
import style from "./home.module.css";

const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.blur}></div>
            <NavBar></NavBar>
            <div className={style.filters}>
            <SearchBar />
                <OrderAz />
                <DietFilter />
                <FilterCreated />
                <HealthScoreFilter />
            </div>
            
            <Recipe />
        </div>
    )
}

export default Home;