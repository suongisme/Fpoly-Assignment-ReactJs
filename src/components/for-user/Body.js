import ListCategory from './Body-User/ListCategory'
import ListProduct from './Body-User/ListProduct'
import ListCart from './Body-User/ListCart'

import { useState } from 'react'
import ProductApi from '../ap/ProductApi';

function Body(props) {
    return (
        <div className="body-user">
            <ListCategory categoryNow={props.categoryNow} setCategoryNow={props.setCategoryNow} page={props.page} setPage={props.setPage} data={props.category} setProduct={props.setProduct}></ListCategory>
            <ListProduct categoryNow={props.categoryNow} setCategoryNow={props.setCategoryNow} page={props.page} setPage={props.setPage}  data={props.product} setProduct={props.setProduct} cart={props.cart} setCart={props.setCart}></ListProduct>
            <ListCart pay={props.pay} data={props.cart} setCart={props.setCart}></ListCart>
        </div>
    );
}

export default Body;