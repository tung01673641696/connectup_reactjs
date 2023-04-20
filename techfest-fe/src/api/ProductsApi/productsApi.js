import axiosClient from '~/api/axiosClient';

const productsApi = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    getForUsingPagination(filter) {
        const url = `/products/all-paging?${filter}`;
        return axiosClient.get(url);
    },
    getProductById(id) {
        const url = `/products/get/${id}`;
        return axiosClient.get(url);
    },
    create(data) {
        const url = `/products`;
        return axiosClient.post(url, data);
    },
    delete(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
    edit(edit) {
        const url = `/products/${edit.id}`;
        return axiosClient.put(url, edit);
    },
    getProductByStore(id) {
        const url = `/products/all-paging?store_id=${id}`;
        return axiosClient.get(url);
    },
};

export default productsApi;
