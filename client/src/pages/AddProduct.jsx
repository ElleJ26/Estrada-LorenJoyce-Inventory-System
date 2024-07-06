import { useState } from "react";
import { addProducts } from "../api/products";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    const handleAdd = async () => {
        const response = await addProducts(productId, productName, quantity, unit, price);
        console.log(response)
        alert("Added Successfully!");
        if (response) {
            navigate('/inventory');
        }

    }

    return (
        <>
            <div className="w-screen h-screen text-white bg-black p-5 flex justify-center">
                <div className="rounded border border-blue-700 m-5 p-5 w-[600px] h-[600px]">

                    <h1 className="text-5xl text-center">Add Product</h1>

                    <div className="flex gap-5 m-10">
                        <label className="text-3xl">Product ID: </label>
                        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} className="rounded border border-grey-400 text-black" />
                    </div>

                    <div className="flex gap-7 m-10">
                        <label className="text-3xl">Product Name: </label>
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className="rounded border border-grey-400 text-black" />
                    </div>

                    <div className="flex gap-5 m-10">
                        <label className="text-3xl">Quantity: </label>
                        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="rounded border border-grey-400 text-black" />
                    </div>

                    <div className="flex gap-7 m-10">
                        <label className="text-3xl">Unit: </label>
                        <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} className="rounded border border-grey-400 text-black" />
                    </div>

                    <div className="flex gap-7 m-10">
                        <label className="text-3xl">Price: </label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="rounded border border-grey-400 text-black" />
                    </div>

                    <div className="flex justify-center">
                        <button type="button" onClick={handleAdd} className="bg-blue-700 text-white p-3 rounded hover:bg-blue-500 hover:text-black">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}





export default AddProduct