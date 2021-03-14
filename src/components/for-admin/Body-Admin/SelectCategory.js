import {useState} from "react";

function SelectCatogory({category, setProduct, setForm}) {
    
    const handleChange = (event) => {
        const vl = event.target.value;
        setProduct(vl);
        setForm({id: '', CategoryId: vl,Name: '', Image: '', Price: ''})
    }
    return (
        <select onChange={handleChange}>
            {category.map((v, i) => {
                return (
                    <option key={i} value={v.id}>{v.Name}</option>
                );
            })}
        </select>
    );
}

export default SelectCatogory;