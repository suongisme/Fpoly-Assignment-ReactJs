import {Link} from 'react-router-dom'

function PayPage({pay, setPay}) {
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPay({
            ...pay,
            [name]: value
        })
    }

    return (
        <form  className='info-customer'>
            <input onChange={handleChange} type="text" value={pay.Name} name='Name' placeholder='Name'/>
            <input onChange={handleChange} type="text" value={pay.SDT} name='SDT' placeholder='SDT'/>
            <input onChange={handleChange} type="text" value={pay.Addr} name='Addr'placeholder='Address'/>
            <Link to="/">
                Luu thong tin & quay lai
            </Link>
        </form>
    );
}

export default PayPage;