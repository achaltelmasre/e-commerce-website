import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AddProduct from './views/AddProduct/AddProduct';
import ProductDetail from './views/ProductDetail/ProductDetail.js';
import UpdateProduct from './views/UpdateProduct/UpdateProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/addproduct',
    element: <AddProduct />
  },
  {
    path: '/productdetail/:_id',
    element: <ProductDetail />
  },
  {
    path: '/updateproduct/:_id',
    element: <UpdateProduct />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);