import Axios from "../config/axios";
import { HOST } from "../config/variables";

export const getProducts = async () => {
    try {
        const response = await Axios.get(`${HOST}/products/get-all`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addProducts = async (product_id, product_name, quantity, unit, price) => {
    try {
        const response = await Axios.post(`${HOST}/products/add-product`, { product_id, product_name, quantity, unit, price });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const editProducts = async (product_id, product_name, quantity, unit, price) => {
    try {
        const response = await Axios.post(`${HOST}/products/update-by-id`, { product_id, product_name, quantity, unit, price });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

};

export const deleteProducts = async (product_id) => {
    try {
        const response = await Axios.delete(`${HOST}/products/delete-by-id`, {product_id} );
        console.log(`Product has been deleted successfully`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting product`);
        throw error;
    }
};