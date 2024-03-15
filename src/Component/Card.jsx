import React from 'react';
import './Card.css';
import { BsCart3 } from "react-icons/bs";

import { Rating } from 'react-simple-star-rating'
const Card = (props) => {


  const addToCart = () => {
    const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const isItemInCart = existingItems.some(item => item.img === props.img && item.description === props.description && item.price === props.price1);

    if (!isItemInCart) {
      const updatedItems = [...existingItems, {
        img: props.img,
        description: props.description,
        price: props.price1
      }];

      localStorage.setItem('cartItems', JSON.stringify(updatedItems));

    
    } else {
      alert('This item is already in your cart!');
    }
  };


  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')



  return (
    <div className="card  my-3  " style={{height:"460px"}}>
         <div> <img src={props.img} alt="Card" className="card-image mb-3" style={{height:"300px"}} /> </div>
   
   
    <button  className='btn  w-50 mx-auto ' style={{position:"absolute" , top:"58%", right:"0", left:"0" , backgroundColor:"#39e37d"}} onClick={addToCart}> <BsCart3 className='mx-2' /> اضافه الى السله </button>


      <div className="card-icons ">
        

    <img src="/eye.png" alt="" width={20} />
      </div>



   <p className='ps-3 text-center '><b>{props.description}</b></p>


<div className='d-flex mx-auto ' style={{scale:".7" , marginRight:"200px" , alignItems:"center"}}>

<Rating 
 onPointerEnter={onPointerEnter}
 onPointerLeave={onPointerLeave}
   />
</div>

   <div className='ps-3 d-flex mx-auto ' style={{display:"flex ", gap:"10px"}}>
   شيكل <p > {props.price1}  </p>
       <p style={{textDecoration: 'line-through' , opacity:".5"}}>{props.price2}</p> 
   </div>


    

   

    </div>



  );
};

export default Card;
