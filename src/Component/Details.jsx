import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BsTrash3 } from "react-icons/bs";
// import './cart.css'
const Details = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  const removeFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (index, event) => {
    const { value } = event.target;
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = parseInt(value, 10) || 1;
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setCartItems(updatedItems);
  };

  const calculateSuper = () => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.price * (item.quantity || 1));
    }, 0);
  };



  const [selectedOption, setSelectedOption] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectChange = (event) => {
    const selectedPrice = parseInt(event.target.value);
    setSelectedOption(event.target.value);
    setTotalPrice(selectedPrice + calculateSuper());
  };


  return (
    <div  className='container shadow-lg  cart1' style={{ backgroundColor:"#fff" , zIndex:5 , overflowY:"scroll" , overflowX:"hidden"}}>
    <h1 className='my-5 mx-auto text-center ' dir='rtl' style={{borderBottom:"3px solid #000" , lineHeight:"60px"}}> المنتجات </h1>



    <div className='pro'>
        {cartItems.map((item, index) => (
          <div key={index} className='my-5 p-2 pro ' style={{display: "flex", justifyContent: "space-between" , border:"1px solid #434242" , alignItems:"center" }}>
          <div className='d-flex gap-1 align-items-end '>
              <img src={item.img} alt="Item" width={40} />
              <p style={{minWidth:"70px"}}>{item.description}</p>
          </div>
            {/* <p className='me-5' style={{ color: "red" }}>Price: ${item.price}</p> */}
            <input className='me-2' type="number" style={{width:"50px" ,height:"25px"}} value={item.quantity || 1} onChange={(e) => handleQuantityChange(index, e)} />
<div className='align-items-end mt-3 d-flex'>
              <p>شيكل</p>  <p className='me-5'>   {item.price * (item.quantity || 1)}  </p> 
  
</div>           
            <button onClick={() => removeFromCart(index)}><BsTrash3 /></button>
          </div>
        ))}
      </div>
  

<p className='d-flex  justify-content-between' dir='rtl'> السعر الكلى : <span>{calculateSuper()} شيكل</span> </p>


    <div dir='rtl' className='my-5'>
      <select className='my-5' style={{fontSize:"12px"}} value={selectedOption} onChange={handleSelectChange}>
        <option value=""> طلب التوصيل </option>
        <option value="20">الضفة - 20 شيكل </option>
        <option value="30">القدس - 30 شيكل</option>
        <option value="70">الداخل - 70 شيكل</option>
      </select>
      {selectedOption && (
        <p>السعر النهائي:  {totalPrice} شيكل</p>
      )}
    </div>

<div className='px-5'>
      <button className='rounded-5 w-100 mx-auto ' style={{backgroundColor:"#39e37d" , marginTop:"50px"}}> أطلب الأن </button>
  
</div>    </div>

    
  )
}

export default Details