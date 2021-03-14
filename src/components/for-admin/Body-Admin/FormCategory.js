import CategoryApi from '../../ap/CategoryApi'

function FormCategory(props) {

    const handleChange = (event) => {
        const { name, value } = event.target;
        props.setCategoryForm({
            ...props.categoryForm,
            [name]: value
        });
    }

    const handle = () => {
        if (props.edit) {
            CategoryApi.update(props.categoryForm.id, props.categoryForm).then(function (resp) {
                console.log('success')
                props.setCategory(function (oldState) {
                    return oldState.map((value, index) => {
                        return value.id === props.categoryForm.id ? props.categoryForm : value;
                    })
                })
                props.setCategoryForm({id: '', Name: ''});
                props.setEdit(false)
            }).catch(function (error) {
                console.log('fail')
            })
        } else {
            CategoryApi.insert(props.categoryForm).then(function (resp) {
                console.log('success')
                props.setCategory([...props.category, resp.data])
            }).catch(function (error) {
                console.log('fail')
            })
        }

    }

    return <div className="admin-category__form">
        <input onChange={handleChange} type="text" name="Name" value={props.categoryForm.Name} placeholder='enter name to add' />
        <button onClick={handle}>Submit</button>
    </div>
}

export default FormCategory;