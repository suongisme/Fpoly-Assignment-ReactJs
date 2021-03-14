import Product from "./Product";

function Products ({product, setProduct, setForm, setEdit}) {
    return (
        <div className='admin-list__products'>
            {product.map((value, index) => {
                return <Product key={index} data={value} product={product} setProduct={setProduct} setForm={setForm} setEdit={setEdit}></Product>
            })}
        </div>
    );
}

export default Products;