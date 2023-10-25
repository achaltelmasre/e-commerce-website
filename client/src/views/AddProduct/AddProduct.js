import React, {useState} from 'react'
import "./AddProduct.css"
import axios from 'axios'

function AddProduct() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [productimg, setProductimg] = useState('')
  const [brand, setBrand] = useState('')


  const addProduct = async () => {
    if(!name || !description || !price || !productimg || !brand) {
      alert('Please enter all fields')
      return
    }

    const product = {
      name,
      description,
      price,
      productimg,
      brand
    }

    const response = await axios.post('/product', product);

    alert(response.data.message)

    setName('')
    setDescription('')
    setPrice('')
    setProductimg('')
    setBrand('')
  }

  return (
    <div className='back'>
      <h1 className='text-center'>Add Products</h1>

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
          onClick={addProduct}
          >
            Add Product
          </button>
      </form>
    </div>
  )
}

export default AddProduct