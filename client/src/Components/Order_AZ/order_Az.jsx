import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderAz } from "../../redux/actions";
import style from "./order_Az.module.css"

const OrderAz = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState("asc"); 

    const handleOrder = (selectedOrder) => {
        dispatch(orderAz(selectedOrder));
        setOrder(selectedOrder);
    };

    return (
        <div>
            <h2>ORDER A - Z</h2>
            <button
                onClick={() => handleOrder("asc")}
                className={style.boton}
            >
                A - Z
            </button>
            <button
                onClick={() => handleOrder("desc")}
                className={style.boton}
            >
                Z - A
            </button>
        </div>
    );
};

export default OrderAz;
