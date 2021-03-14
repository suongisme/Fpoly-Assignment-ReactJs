import Axios  from 'axios'



const api = 'https://600d4823f979dd001745c9fe.mockapi.io/api/Category/';
const ProductApi = {
    getByCategoryID: function(id) {
        return Axios.get(api+id+'/product');
    },

    getByCategoryIDPagination: function(id, page) {
        return Axios.get(api+id+'/product'+'?page='+page+'&limit='+6);
    },

    getById: (categoryId, productid) => {
        return Axios.get(api+categoryId+'/product/'+productid);
    },

    insert: function(categoryID, data) {
        return Axios.post(api+categoryID+'/product', data);
    },

    update: function(categoryID, productID ,data) {
        return Axios.put(api+categoryID+'/product/'+productID, data);
    },

    delete: function(categoryID, productID) {
        return Axios.delete(api+categoryID+'/product/'+productID);
    },

    search: function(categoryId, value) {
        return Axios.get(api+categoryId+'/product?Name='+value);
    }
}
export default ProductApi;
