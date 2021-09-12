import axiosClient from "./axiosClient"

const productApi = {
    getAll: (params) => {
        const url = '/bbqs';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/products/${id}`
        return axiosClient.get(url);
    },
}

export default productApi;