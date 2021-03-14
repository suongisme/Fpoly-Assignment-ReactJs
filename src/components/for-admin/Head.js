import { Link, Route, useRouteMatch} from 'react-router-dom'

function Head(props) {
    let match = useRouteMatch();
    return (
        <ul className='head-admin'>
            <li>
                <Link to={match.url+'/product'} className='head-admin__text'>Product</Link>
            </li>
            <li>
                <Link to={match.url+'/category'} className='head-admin__text'>Category</Link>
            </li>
            <li>
                <Link to={match.url+'/order'} className='head-admin__text'>Order</Link>
            </li>
        </ul>
    )
}

export default Head;