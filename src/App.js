import './App.css'
import './components/for-admin/admin.css'
import './components/for-user/user.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import HeadUser from "./components/for-user/Head";
import BodyUser from "./components/for-user/Body";

import HeadAdmin from './components/for-admin/Head';
import BodyAdmin from './components/for-admin/Body';

import PayPage from './components/for-user/PayPage'

import ProductApi from './components/ap/ProductApi';
import CategoryApi from './components/ap/CategoryApi';
import OrderApi from './components/ap/OrderApi';

function App() {

  const [products, setProducts] = useState([]);
  const [orders, setOders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [carts, setCarts] = useState([]);
  const [pay, setPay] = useState({Name: '', SDT: '', Addr: ''});
  const [page, setPage] = useState(1);
  const [categoryNow, setCategoryNow] = useState();

  useEffect(() => {
    CategoryApi.getAll().then(function (resp) {
      setCategories(resp.data);
      setCategoryNow(resp.data[0].id);
      setProduct(resp.data[0].id, page);
    }).catch(function (error) {
      console.log(error)
    });

    OrderApi.getAll().then(function (resp) {
      setOders(resp.data)
    }).catch(function (error) {
      console.log(error)
    });
  }, []);

  function setProduct(id, page) {
    ProductApi.getByCategoryIDPagination(id,page).then(function(resp) {
      setProducts(resp.data)
    }).catch(function(error) {
      console.log(error)
    })
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/admin'>
          <div>
            <HeadAdmin></HeadAdmin>
            <BodyAdmin product={products} setProduct={setProducts} category={categories} setCategory={setCategories} order={orders}></BodyAdmin>
          </div>
        </Route>

        <Route path='/thanh-toan'>
          <PayPage pay={pay} setPay={setPay}></PayPage>
        </Route>
        
        <Route path='/'>
          <div>
            <HeadUser categoryNow={categoryNow} page={page} product={products} setPro={setProducts} setProduct={setProduct}></HeadUser>
            <BodyUser categoryNow={categoryNow} setCategoryNow={setCategoryNow} page={page} setPage={setPage} pay={pay} category={categories} product={products} setProduct={setProduct} cart={carts} setCart={setCarts} setOrder={setOders}></BodyUser>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
