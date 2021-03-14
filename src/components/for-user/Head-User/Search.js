import ProductApi from '../../ap/ProductApi';

function Search(props) {
    const handle = (event) => {
        const keyCodeEnterKey = 13;
        const keyCodeSpaceKey = 8;
        const keyCode = event.keyCode;
        const value = event.target.value;
        
        switch (keyCode) {
            case keyCodeSpaceKey:
                props.setProduct(props.categoryNow, props.page);
                break;
            case keyCodeEnterKey:
                ProductApi.search(props.categoryNow, value).then(function (resp) {
                   props.setPro(resp.data)
                }).catch(function (error) {
                    console.log(error);
                })
                break;
        }
    }
    return (
        <div className="search">
            <img className="icon-search" src="https://order.tocotocotea.com/assets/icons/icon-search.svg" alt="icon" />
            <input onKeyDown={handle} type="text" className='search-text' placeholder='Tim kiem san pham' />
        </div>
    );
}

export default Search;