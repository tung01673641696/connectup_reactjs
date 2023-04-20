import axiosClient from '../axiosClient';

const storeApi = {
    async getAllField() {
        const url = `/fields`;
        return axiosClient.get(url);
    },
    async getAllStoreByField(data) {
        const url = `/stores/all-paging?page_index=1&page_size=4&field_id=${data}`;
        return axiosClient.get(url);
    },
    async getAllStore() {
        const url = `/stores`;
        return axiosClient.get(url);
    },
    async createField(data) {
        const url = `/fields`;
        return axiosClient.post(url, data);
    },
    async createStore(data) {
        const url = `/stores`;
        return axiosClient.post(url, data);
    },
    async getMyStore() {
        const url = `/stores/my-store`;
        return axiosClient.get(url);
    },
};

export default storeApi;
