import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useState } from "react";

import ListProduct from "./Body-Admin/ListProduct";
import FormProduct from "./Body-Admin/FormProduct";
import ListCategory from "./Body-Admin/ListCategory";
import FormCategory from "./Body-Admin/FormCategory";
import ListOrder from "./Body-Admin/ListOrder";
import DetailOrder from "./Body-Admin/DetailOrder";

function Body(props) {
    let match = useRouteMatch();

    const [form, setForm] = useState({ id: '', CategoryId: '', Name: '', Image: '', Price: '' });
    const [editProduct, setEditProduct] = useState(false);
    const [editCategory, setEditCategory] = useState(false);
    const [detailOrder, setDetailOrder] = useState({
        id: '',
        Customer_Name: '',
        Customer_Phone: '',
        Customer_Address: '',
        Date: null,
        Products: []
    })
    const [categoryForm, setCategoryForm] = useState({ id: '', Name: '' });
    return (
        <Switch>
            <Route path={match.path + '/product'}>
                <div className='admin-product'>
                    <FormProduct edit={editProduct} setEdit={setEditProduct} form={form} setForm={setForm} product={props.product} setProduct={props.setProduct}></FormProduct>
                    <ListProduct setEdit={setEditProduct} setForm={setForm} product={props.product} setProduct={props.setProduct} category={props.category}></ListProduct>
                </div>
            </Route>
            <Route path={match.path + '/category'}>
                <div className='admin-category'>
                    <FormCategory edit={editCategory} setEdit={setEditCategory} categoryForm={categoryForm} setCategoryForm={setCategoryForm} category={props.category} setCategory={props.setCategory}></FormCategory>
                    <ListCategory setEdit={setEditCategory} setCategoryForm={setCategoryForm} setCategory={props.setCategory} category={props.category}></ListCategory>
                </div>
            </Route>
            <Route path={match.path + '/order'}>
                <div className='admin-order'>
                    <DetailOrder data={detailOrder}></DetailOrder>
                    <ListOrder order={props.order} setDetailOrder={setDetailOrder}></ListOrder>
                </div>
            </Route>
            <Route path={match.path}> <h1 className="greeting">welcome to admin's page</h1> </Route>
        </Switch>
    )
}

export default Body;