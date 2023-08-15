import React from "react";
import { connect } from "react-redux";
import { filterApiDb } from "../../redux/actions";
import style from "./filterApiDb.module.css";

const FilterCreated = ({ filterApiDb }) => {
    const handleFilter = (filterOption) => {
        filterApiDb(filterOption);
    };

    return (
        <div className={style.container}>
            <h2 className={style.filter}>Filter Created</h2>
            <button className={style.boton} onClick={() => handleFilter("created")}>BDD</button>
            <button className={style.boton} onClick={() => handleFilter("not-created")}>API</button>
        </div>
    );
};

const mapDispatchToProps = {
    filterApiDb, 
};

export default connect(null, mapDispatchToProps)(FilterCreated);