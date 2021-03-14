import CategoryApi from '../../ap/CategoryApi'

function ListCategory(props) {
    const handleClick = (value) => {
        props.setCategoryForm({id: value.id, Name: value.Name});
        props.setEdit(true);
    }

    const handleDelete = (event,id) => {
        event.stopPropagation();
        CategoryApi.delete(id).then(function(resp) {
            console.log('success')
            props.setCategory(function(oldState) {
                return oldState.filter((value, index) => {
                    return value.id !== id;
                });
            })
        }).catch(function(error) {
            console.log('fail')
        })
    }
    return (
        <div className="admin-category__list">
            <div className="admin-list__row admin-list__row--large">
                <p>ID</p>
                <p>NAME</p>
                <p>ACTION</p>
            </div>
            {props.category.map((value, index) => {
                return <div key={index} onClick={function(event) {
                    handleClick(value);
                }} className="admin-list__row">
                    <p>{value.id}</p>
                    <p>{value.Name}</p>
                    <p onClick={function(event) {
                        handleDelete(event,value.id)
                    }} className="row__action">click to delete</p>
                </div>
            })}
        </div>
    );
}

export default ListCategory;