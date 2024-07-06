import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import DeleteProduct from './pages/DeleteProduct.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inventory from './pages/Inventory.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-by-id" element={<EditProduct />} />
        <Route path="/delete-by-id" element={<DeleteProduct />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
