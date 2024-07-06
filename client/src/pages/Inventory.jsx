import {  getProducts } from "../api/products";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    });

    const getAllProducts = async () => {
        const response = await getProducts();
        setProducts(response);
    }

    const navigate = useNavigate();

    const handleAddProduct = async () => {
        navigate('/add-product');
    }

    const handleEdit = async () => {
        navigate('/update-by-id');
    }

    const handleDelete = async () => {
        navigate('/delete-by-id');
    }

        

    return (
        <>
            <div className="w-screen h-screen text-white bg-black p-5 grid justify-center ">
                <div className="text-3xl my-1 text-center">Sample Inventory</div>

                <div className=" text-center">
                    <button onClick={handleAddProduct} className="my-3 p-2 rounded bg-blue-900 text-white hover:bg-blue-700 hover:text-black"> Add Product</button>
                </div>

                <table className=" border border-blue-800 w-[600px]">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((element, index) => {
                                return (
                                    <tr className="text-center" key={index}>
                                        <td>{element.product_id}</td>
                                        <td>{element.product_name}</td>
                                        <td>{element.quantity}</td>
                                        <td>{element.unit}</td>
                                        <td>{element.price}</td>
                                        <td>
                                            <button onClick={handleEdit} className="bg-blue-700 text-white p-1 mr-1 rounded hover:bg-blue-500 hover:text-black">Edit</button>
                                            <button onClick={handleDelete} className="bg-blue-700 text-white p-1 mr-1 rounded hover:bg-blue-500 hover:text-black">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Inventory