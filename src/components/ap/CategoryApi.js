import Axios from "axios";
const api = 'https://600d4823f979dd001745c9fe.mockapi.io/api/Category';
const CategoryApi = {
    getAll: () => {
        return Axios.get(api);
    },

    getById: (id) => {
        return Axios.get(api+'/'+id);
    },

    insert: (data) => {
        return Axios.post(api,data);
    },

    update: (id, data) => {
        return Axios.put(api+'/'+id, data);
    },

    delete:(id) => {
        return Axios.delete(api+'/'+id)
    }
}

export default CategoryApi;