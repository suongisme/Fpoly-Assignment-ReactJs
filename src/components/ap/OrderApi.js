import Axios  from 'axios'

const api = 'https://600d4823f979dd001745c9fe.mockapi.io/api/order';
const OrderApi = {
    getAll: function() {
        return Axios.get(api);
    },

    getById: (id) => {
        return Axios.get(api+'/'+id);
    },

    insert: function(data) {
        Axios.post(api, data);
    },

    update: function(id,data) {
        Axios.put(api+'/'+id, data)
    },

    remove: function(id) {
        Axios.delete(api+'/'+id);
    }
}

export default OrderApi;