import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"


function Home() {
  const [products, setProducts] = useState([])

  const loadProduct = async () =>{
    const response = await axios.get("/products")
    setProducts(response?.data?.data)
  }

const deleteProduct = async (_id) => {
  const response = await axios.delete(`/product/${_id}`)
  if (response?.data?.success) {
    loadProduct();
  }

} 

  useEffect(()=>{
    loadProduct();
  }, [])

  return (
    <div>
      <h1 className='text-center'>All Products</h1>

      {
         products?.map((product, index) => {
          const {_id,name, description, price, productimg,brand} = product

          return (
            <div className='main-container'>

           <div key={index} className='product-card'>
               <img src={productimg} height={350} alt='product-img'/>
              <h3>{name} </h3>
              <p>{description}</p>
              <h4>{price}</h4>
              <p>{brand}</p>
              <a href={`productdetail/${_id}`} target='blank'> View Details</a>
              <button onClick={() => {deleteProduct(_id)}}>✖️</button>
              <a href={`updateProduct/${_id}`} target='_blank'> ✏️</a>

           </div>
        </div>
          )
        })
      }

    </div>
  )
}

export default Home