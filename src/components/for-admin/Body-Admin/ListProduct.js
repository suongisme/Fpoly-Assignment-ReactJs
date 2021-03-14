import ProductApi from "../../ap/ProductApi";

import SelectCategory from './SelectCategory';
import Products from './Products';

function ListProduct({product, setProduct ,category, setForm, setEdit}) {
    function setById(id) {
        ProductApi.getByCategoryID(id).then(function (resp) {
            setProduct(resp.data)
        }).catch(function (error) {
            console.log(error)
        });
    }
    return (
        <div className='admin-product__list'>
            <SelectCategory setForm={setForm} category={category} setProduct={setById}></SelectCategory>
            <Products setEdit={setEdit} product={product} setProduct={setProduct} setForm={setForm}></Products>
        </div>
    );
}

export default ListProduct;