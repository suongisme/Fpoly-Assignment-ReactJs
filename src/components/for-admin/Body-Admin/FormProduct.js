import ProductApi from '../../ap/ProductApi'

function FormProduct(props) {

    const handleChange = (event) => {
        const {name, value} = event.target;
        props.setForm({
            ...props.form,
            [name]: value
        })
    }

    const handleClick = () => {
        if (props.edit) {
            ProductApi.update(props.form.CategoryId, props.form.id,props.form).then(function(resp) {
                props.setProduct(function(oldState) {
                    return oldState.map((value, index) => {
                        if (value.id === props.form.id) {
                            return props.form;
                        }
                        return value;
                    });
                })
            }).catch(function(error) {
                console.log('fail')
            })
        } else {
            ProductApi.insert(props.form.CategoryId,props.form).then(function(resp) {
                props.setProduct([...props.product, resp.data])
            }).catch(function(error) {
                console.log('fail')
            })
        }
    }

    function reset() {
        props.setForm({ id: '',CategoryId: props.form.CategoryId, Name: '', Image: '', Price: '' });
        props.setEdit(false)
    }

    return(
        <div className='admin-product__form'>
            <input onChange={handleChange} type="text" placeholder='ID(disabled)' value={props.form.id} name='id' disabled/> 
            <input onChange={handleChange} type="text" placeholder='CategoryID' value={props.form.CategoryId} name='CategoryId' disabled/>
            <input onChange={handleChange} type="text" placeholder='Name' value={props.form.Name} name='Name'/>
            <input onChange={handleChange} type="text" placeholder='Image URL' value={props.form.Image} name='Image'/>
            <input onChange={handleChange} type="text" placeholder='Price' value={props.form.Price} name='Price'/>
            <button onClick={handleClick}>Submit</button>
            <button  onClick={reset}>Clear</button>
        </div>
    );
}

export default FormProduct;