function ListOrder(props) {

    const handleClick = (data) => {
        props.setDetailOrder(data);
    }

    return <div className="admin-order__list">
        <h2 className="admin-list__heading">List Order</h2>
        {props.order.map((value, index) => {
            return <p key={index} className="admin-list__order-date" onClick={() => {
                handleClick(value)
            }}>{value.Date}</p>
        })}
    </div>
}

export default ListOrder;