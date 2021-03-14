
function Product({data, cart, setCart}) {

    const addTocart = () => {
        setCart([...cart, data]);
    }

    return (
        <div className="user-products__item">
            <div className="user-block-top">
                <img src={data.Image} alt={data.Name}/>
            </div>
            <div className="user-block-bottom">
                <div className="user-item__info">
                    <p className="info__name">{data.Name}</p>
                    <p className="info__price">{data.Price}</p>
                </div>
                <div className="user-item__handle">
                    <button onClick={addTocart} className="user-handle__btn">+</button>
                </div>
            </div>
        </div>
    );
}

export default Product;