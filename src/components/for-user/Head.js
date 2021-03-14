import Search from './Head-User/Search';

function Head(props) {
    return(
        <div className="head-user">
            <img className="logo" src="https://order.tocotocotea.com/assets/imgs/logo.png" alt="icon"/>
            <Search setPro={props.setPro} categoryNow={props.categoryNow} page={props.page} product={props.product} setProduct={props.setProduct}></Search>
            <button className="login">Dang nhap</button>
        </div>
    );
}

export default Head;