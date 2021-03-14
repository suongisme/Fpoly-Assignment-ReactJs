function DetailOrder({ data }) {
    return <div className="admin-order__detail-order">
        <p>Name: {data.Customer_Name}</p>
        <p>Address: {data.Customer_Address}</p>
        <p>Phone: {data.Customer_Phone}</p>
        <p>Date: {data.Date}</p>
        <p>Products</p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {data.Products.map((value, index) => {
                    return <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.Name}</td>
                        <td>{value.Price}</td>
                    </tr>

                })}
            </tbody>
        </table>
    </div>
}

export default DetailOrder;