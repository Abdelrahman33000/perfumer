import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const NavBar = () => {

    
  const [isOpen, setIsOpen] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (index) => {
    setIsOpen(index);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(null);
    setIsHovering(false);
  };

  return (
    <div style={{display:"flex" , gap:"30px" , alignItems:"center" , padding:"10px 30px" }}>
      <img src="/shopping-cart.png" alt="" height={30}  />
<span style={{ flexGrow:"1"}} />
      <div className='mt-3' style={{display:"flex" , gap:"15px" , alignItems:"start"  }} dir='rtl'>
<Link to={"/"} >
            <span> الرئيسيه </span>
    
</Link>     


   <div onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave()}>
      <p className='link' style={{cursor:"pointer"}}> الأصناف <img width={15} src="/down-arrow-backup-2-svgrepo-com.svg" alt="" />    </p>
        {isOpen === 1 && isHovering && (
          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave()}
            style={{
              position: 'absolute',
              top: '7%',
              // left: 0,
              backgroundColor: 'white',
              padding: '10px',
              border: '1px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              width:"50%",
              zIndex:5
            }}
          >

            <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'>  بهارات </span> </Link>
            <hr className=' m-0' />
            <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'>  بقوليات </span> </Link>
          <hr className='m-0' />
            <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'> مكسرات  </span>  </Link>
           <hr className='m-0' />
            <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'>  أعشاب </span> 
             </Link>
         <hr  className='m-0'/>
            <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'> بذور </span>    </Link>
          <hr className='m-0' />
            <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'> اللبن </span> 
               </Link> <hr  className='m-0 ' />

               <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'> زيوت طبيعية  </span> 
               </Link> <hr  className='m-0 ' />

               <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'> مواد غذائية   </span> 
               </Link> <hr  className='m-0 ' />

               <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'> أنواع من الشاي و القهوة   </span> 
               </Link> <hr  className='m-0 ' />

               <Link to="#" style={{textDecoration:"none" , color:"#000"}}> <span className='link'> فواكه مجففة </span> 
               </Link> 
               {/* <hr  className='m-0 ' /> */}
          </div>
        )}
      </div>








   
        <span> الوصفات </span>
        
      </div>

<Link to={"/"}>
          <img src="/logaa.jpg" alt="" height={35}  />
    
</Link>   

 </div>
  )
}

export default NavBar
