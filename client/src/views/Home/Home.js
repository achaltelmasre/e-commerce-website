import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"

function Home() {
  const [products, setProducts] = useState([])

  const loadProduct = async () =>{
    const response = await axios.get("/products")
    setProducts(response?.data?.data)
  }

  useEffect(()=>{
    loadProduct();
  }, [])

  return (
    <div>
      <h1 className='text-center'>All Products</h1>

      {
         products?.map((product, index) => {
          const {name, description, price, productimg,brand} = product

          return (
            <div className='main-container'>

           <div key={index} className='product-card'>
               <img src={productimg} height={350} alt='product-img'/>
              <h3>{name} </h3>
              <p>{description}</p>
              <h4>{price}</h4>
              <p>{brand}</p>
           </div>

           </div>
          )
        })
      }

    </div>
  )
}

export default Home