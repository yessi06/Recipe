import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={style.container}>
            <Link to={"/"}>
                <button className={style.boton}>Landing</button>
            </Link>
            <Link to={"/Home"}>
                <button className={style.boton}>Home</button>
            </Link>
            <Link to={"/form"}>
                <button className={style.boton}>Form</button>
            </Link>
        </div>
    )
}

export default NavBar;