import {Link} from "react-router-dom";
import style from './landing.module.css'

const Landing = () => {
    return (
        <div>
          <div className={style.blur}></div>
          <div className={style.container}> 
            <div className={style.wh}>
                <h1 className={style.welcome}>WELCOME TO THE RECIPES WORLD</h1>
            </div>
            <Link to={"/Home"}>
            <button className={style.boton}>Explore</button>
            </Link>
          </div>
        </div>
    )
}

export default Landing;