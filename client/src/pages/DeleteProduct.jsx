import { useState, useEffect } from "react";
import { deleteProducts, getProducts } from "../api/products";
import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    });

    const getAllProducts = async () => {
        const response = await getProducts();
        setProducts(response);
    }

    const [product_id] = useState('');
    const [product_name] = useState('');
    const [quantity] = useState('');
    const [unit] = useState('');
    const [price] = useState('');


    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteProducts(product_id);
        } catch (error) {
            console.error(error);
            throw error;
        }

        alert("Deleted Successfully!");
        if (response) {
            navigate('/inventory');
        }

    }

    return (
        <>
            {
                products.map((element, index) => {
                    return (
                        <div className="w-screen h-screen text-white bg-black p-5 flex justify-center">
                            <div className="rounded border border-blue-700 m-5 p-5 w-[600px] h-[600px]">

                                <h1 className="text-5xl text-center" >Delete Product</h1>

                                <div className="flex gap-5 m-10"key={index}>
                                    <label className="text-3xl">Product ID: </label>
                                    <h1 className="text-3xl">{element.product_id}</h1>
                                </div>

                                <div className="flex gap-7 m-10">
                                    <label className="text-3xl">Product Name: </label>
                                    <h1 className="text-3xl">{element.product_name}</h1>
                                </div>

                                <div className="flex gap-5 m-10">
                                    <label className="text-3xl">Quantity: </label>
                                    <h1 className="text-3xl">{element.quantity}</h1>
                                </div>

                                <div className="flex gap-7 m-10">
                                    <label className="text-3xl">Unit: </label>
                                    <h1 className="text-3xl">{element.unit}</h1>
                                </div>

                                <div className="flex gap-7 m-10">
                                    <label className="text-3xl">Price: </label>
                                    <h1 className="text-3xl">{element.price}</h1>
                                </div>

                                <div className="flex justify-center">
                                    <button type="button" onClick={handleDelete} className="bg-blue-700 text-white p-3 rounded hover:bg-blue-500 hover:text-black">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


export default DeleteProduct