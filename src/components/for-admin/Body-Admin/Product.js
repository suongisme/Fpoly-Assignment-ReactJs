import ProductApi from '../../ap/ProductApi';

function Product({data ,setProduct, setForm, setEdit}) {

    const handleClick = () => {
        setForm(data)
        setEdit(true)
    }

    const handleDelete = (event) => {
        event.stopPropagation();
        ProductApi.delete(data.CategoryId, data.id).then(function(resp) {
            setProduct(function(oldState) {
                return oldState.filter((value, index) => {
                    return value.id !== data.id;
                })
            })
        }).catch(function(error) {
            console.log('fail')
        })
    }

    return (
        <div className="admin-products__item" onClick={handleClick}>
            <div className="admin-block-top">
                <img className="admin-top__image" src={data.Image} alt={data.Name}/>
            </div>
            <div className="admin-block-bottom">
                <div className="admin-item__info">
                    <p className="info__name">{data.Name}</p>
                    <p className="info__price">{data.Price}</p>
                </div>
                <div className="admin-item__handle">
                    <button className="admin-handle__btn" onClick={handleDelete}>X</button>
                </div>
            </div>
        </div>
    );
}

export default Product;