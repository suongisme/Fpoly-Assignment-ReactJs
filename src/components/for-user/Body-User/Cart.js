import { useState } from 'react'

function Cart({ data, setCart }) {

    const handleDelete = () => {
        setCart(function (oldState) {
            return oldState.filter((value, index) => {
                let i = oldState.indexOf(data);
                return i !== index;
            })
        })
    }

    return (
        <div className="cart">
            <div className="cart__info">
                <p className="cart-info__name">{data.Name}</p>
                <p className="cart-info__price">{data.Price}</p>
            </div>
            <div className="cart__handle">
                <button onClick={handleDelete} className="cart-handle__btn">X</button>
            </div>
        </div>
    );
}

export default Cart;