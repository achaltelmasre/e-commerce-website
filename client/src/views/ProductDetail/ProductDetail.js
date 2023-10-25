import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetail(){
    const [Product, setProduct] = useState('')

    const {_id} = useParams();

    const loadProduct = async () =>{
        const response = await axios.get(`/product/${_id}`);
        setProduct(response?.data?.data)
    }

    useEffect(() =>{
        loadProduct();
    },[])

     return(
        <>
        <h1>Add productdetails</h1>
        <h2>Product id : {_id}</h2>
        <h4>Name : {Product.name}</h4>
        <p>Description : {Product.description}</p>
        <img src={ Product.productimg} height={250} />
        <h5>Price : {Product.price}</h5>
        </>
    )
}
export default ProductDetail;