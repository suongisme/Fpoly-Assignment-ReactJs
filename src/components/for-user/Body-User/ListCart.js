import Cart from './Cart'
import OrderApi from '../../ap/OrderApi'
import Pay from './Pay'
import { Link, Switch, Route } from 'react-router-dom'

function ListOrder({ data, pay, setCart }) {
    
    let listCart;

    if (data.length !== 0) {
        listCart = data.map((value, index) => {
            return <Cart key={index} data={value} setCart={setCart}></Cart>
        })
    } else {
        listCart = <h3 className="state__list-cart">Chua chon san pham</h3>
    }


    return (
        <div className="user-cart__list">
            <h3 className="cart__headding">Gio Hang</h3>
            <div className="cart__list">
                {listCart}
            </div>
            <Pay data={data} setCart={setCart} pay={pay}></Pay>
        </div>
    );
}

export default ListOrder;