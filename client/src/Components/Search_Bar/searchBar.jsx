import React, { useState } from "react"; 
import { useDispatch } from "react-redux";
import { searchBar } from "../../redux/actions";
import style from "./searchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(""); 

    const handleInput = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = title.toLowerCase(); 
        dispatch(searchBar(searchTerm)); 
        setTitle(""); 
    };

    return (
        <div className={style.searchbar}>
            <h2>SEARCH BY NAME</h2>
            <input className={style.input} onChange={handleInput}  placeholder="Search" type="text" value={title} />
            <button className={style.boton} onClick={handleSubmit}>SEARCH</button>
        </div>
    );
};

export default SearchBar;
