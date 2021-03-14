import ProductApi from '../../ap/ProductApi';

function Category({ data, setProduct, page, setPage, categoryNow ,setCategoryNow }) {
    function setProducts() {
        setPage(1);
        setCategoryNow(data.id)
        setProduct(data.id, page)
    }
    return (
        <li className="user-list__category" onClick={setProducts}>
            <a href="#" className="category__name">{data.Name}</a>
            <a href="#" className="category__amount">{data.Products.length}</a>
        </li>
    );
}

export default Category;