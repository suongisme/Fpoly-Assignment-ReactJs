import Product from './Product'

function ListProduct({data, cart, setCart, page, setPage, categoryNow, setProduct}) {
    
    function next() {
        setPage(page+1)
        setProduct(categoryNow, page+1)
    }

    function previous() {
        if (page == 1) return;
        setPage(page-1)
        setProduct(categoryNow, page-1)
    }

    return (
        <div className="user-product__list">
            <h3 className="user-list__heading">San Pham</h3>
            <div className="user-list__products">
                {data.map((value,index) => {
                    return (
                        <Product key={index} data={value} setCart={setCart} cart={cart}></Product>
                    );
                })}
            </div>
            <div className="user-product__pagination">
                <button onClick={previous} className="pagination__pre">Previous</button>
                <p className="pagination__page">{page}</p>    
                <button onClick={next} className="pagination__next">Next</button>
            </div>
        </div>
    );
}

export default ListProduct;