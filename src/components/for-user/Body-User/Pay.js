import OrderApi from '../../ap/OrderApi'

import {Link} from 'react-router-dom'

function Pay(props) {
    const customer = props.pay;
    const ok = () => {
        const od = {
            Customer_Name: customer.Name,
            Customer_Address: customer.Addr,
            Customer_Phone: customer.SDT,
            Date: new Date(),
            Products: props.data
        }
        OrderApi.insert(od)
        props.setCart([]);
    }

    
    if (customer.Addr === '' || customer.Name === '' || customer.SDT === '') {
        return <Link className="btn__pay pay--has-link" to='/thanh-toan'>Nhap thong tin de thanh toan</Link>
    } else {
        return <button onClick={ok} className="btn__pay">Thanh Toan</button>
    }
}
export default Pay;