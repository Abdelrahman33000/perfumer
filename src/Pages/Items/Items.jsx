import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'
const Items = () => {
    const items=[
        {title:"زيوت طبيعية " , img:"/زيوت .png" , id:"1" },
        {title:" بهارات " , img:"/بهارات .png" , id:"2"},
        {title:" بقوليات" , img:"/بقوليات.png" , id:"3"},
        {title:" بذور" , img:"/بذور.jpg" , id:"4"},
        {title:" أعشاب" , img:"/اعشاب .png" , id:"5"},
        {title:" مكسرات" , img:"/المكسرات .png" , id:"6"},
        {title:"فواكه مجففة " , img:"/فواكه مجففة .png" , id:"7"},
        {title:" أنواع من الشاي و القهوة " , img:"/انواع من الشاي و القهوة .png" , id:"8"},
        {title:" اللبن" , img:"/اللبن.png" , id:"9"},
        {title:" مواد غذائية " , img:"/المواد الغذئيه.jpeg" , id:"10"},
    ]
 




  return (
    <div className='row mx-auto d-flex align-items-center py-5 ' style={{flexWrap:"wrap"}}>
      {items.map((item)=><div className='col-lg-4   justify-content-center d-flex  mx-auto' key={item.id} style={{ flexWrap:"wrap" ,flexDirection:"column"}}>

<div className='my-5'> <img  className='mx-auto d-flex ' style={{borderRadius:"50%"}} src={item.img} alt="" width={200}
  height={200}/> </div>
   <Link className='mx-auto w-50' to={"/products"}>
    <button className='rounded-5 w-100 mx-auto ' style={{backgroundColor:"#59725cb9" , marginTop:"50px"}}> 

    {item.title} 
    
    </button>
   </Link>
  
  
      </div>)}



    </div>
  )
}

export default Items
