import React from 'react'
import Card from '../../Component/Card'
// import Card from '../../../../fast/src/pages/1-Home/Card'

const Products = () => {
  return (
    <div>
      


      <div className='container my-5'>

   <div className='row  justify-content-between   container my-5 '>
<div className=" col-lg-4  ">
       <Card  img="/p (1).jpeg" price1="123" price2="$200" dis="SALE" description=" اسم المنتج  " />
  
</div>     
<div className=" col-lg-4  ">
  <Card className=" col-lg-2" img="/p (2).jpeg" dis="SALE"  price1="1960" description="اسم المنتج "/>
  
</div>  
<div className=" col-lg-4 ">
     <Card className=" col-lg-2" img="/p (3).jpeg" dis="SALE"  price1=" 550"  description="اسم المنتج "/>
  
</div>   


 </div>
</div>






      <div className='container my-5'>

   <div className='row justify-content-between   container my-5 '>
<div className=" col-lg-4  ">
       <Card   img="/p (4).jpeg" price1="260"  price2="$360"   description="اسم المنتج " dis="SALE"/>
  
</div>     
<div className=" col-lg-4  ">
  <Card className=" col-lg-2" img="/p (5).jpeg"  price1="960"  price2=" $1160"  description="اسم المنتج " dis="SALE"/>
  
</div>  
<div className=" col-lg-4 ">
     <Card className=" col-lg-2" img="/p (6).jpeg"  price1=" 160"  price2="$170"  description="اسم المنتج " dis="SALE"/>
  
</div>   


  </div>
</div>


<div className='container my-5'>

<div className='row justify-content-between   container my-5 '>
<div className=" col-lg-4  ">
    <Card   img="/p (7).jpeg" price1="260"  price2="$360"  dis="SALE"  description="اسم المنتج " />

</div>     
<div className=" col-lg-4  ">
<Card className=" col-lg-2" img="/p (8).jpeg"  price1="960" dis="SALE"  price2=" $1160"  description="اسم المنتج "/>

</div>  
<div className=" col-lg-4 ">
  <Card className=" col-lg-2" img="/p (9).jpeg"  price1=" 160" dis="SALE"  price2="$170"  description="اسم المنتج "/>

</div>   
{/* <div className=" col-lg-3 ">
 <Card className=" col-lg-2" img="/card4.png"   price1="360"  description="اسم المنتج "  />

</div>  */}

</div>
</div>
    </div>
  )
}

export default Products
