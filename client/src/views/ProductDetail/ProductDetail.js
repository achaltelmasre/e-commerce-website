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
        <h1 className="text-center">Add productdetails</h1>
        <div className="detail">
        <h2>Product id : {_id}</h2>
        <h1>Name : {Product.name}</h1>
        <p className="prod-description">Description : {Product.description}</p>
        <p className="prod-price">Price :{Product.price} </p>
      
        <img src={ Product.productimg} height={400} />
 
        </div>
        </>
    )
}
export default ProductDetail;