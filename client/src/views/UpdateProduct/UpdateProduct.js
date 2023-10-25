import axios from 'axios'
import React, {useEffect, useState} from 'react'
import "./UpdateProduct.css"
import { useParams} from 'react-router-dom';

function UpdateProduct() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [productimg, setProductimg] = useState('');
  const [brand, setBrand] = useState('');

  const { _id } = useParams();

  const loadProduct = async () => {
    const response = await axios.get(`/product/${_id}`)

    const {name, description, price, productimg, brand} = response?.data?.data
    setName(name)
    setDescription(description)
    setPrice(price)
    setProductimg(productimg)
    setBrand(brand)
  }

  useEffect(() =>{
    loadProduct()
  }, [])
 
   const UpdateProduct = async () =>{
     
    const updatedDetails = {
        name,
        description,
        price,
        productimg,
        brand
      }
      const response = await axios.put(`/product/${_id}`, updatedDetails);
    alert(response?.data?.message)

   }
  return (
    <div className='back'>
      <h1 className='text-center'>Update Products</h1>

      <form className='form-container'>

        <input type='text'
          placeholder='Name'
          className='form-input'
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }} />

        <input type='text'
          placeholder='description'
          className='form-input'
          value={description}
          onChange={(e)=>{
            setDescription(e.target.value)
          }} />

        <input type='text'
          placeholder='price'
          className='form-input'
          value={price}
          onChange={(e)=>{
            setPrice(e.target.value)
          }} />

        <input type='text'
          placeholder='product img url'
          className='form-input'
          value={productimg}
          onChange={(e)=>{
            setProductimg(e.target.value)
          }} />

        <input type='text'
          placeholder='brand'
          className='form-input'
          value={brand}
          onChange={(e)=>{
            setBrand(e.target.value)
          }} />

        <button
          type='button'
          className='form-btn'
          onClick={UpdateProduct}
          >
            update Product
          </button>
      </form>
    </div>
  )
}

export default UpdateProduct