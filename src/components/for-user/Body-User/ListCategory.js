import Category from './Category'


function ListCategory(props) {
    return (
        <div className="user-category__list">
            <h3 className="categories__headding">Danh Muc</h3>
            <ul>
                {props.data.map(function(value,index) {
                    return (
                        <Category key={index} categoryNow={props.categoryNow} setCategoryNow={props.setCategoryNow}  data={value} setProduct={props.setProduct} page={props.page} setPage={props.setPage}></Category>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListCategory;