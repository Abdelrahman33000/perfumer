import React from 'react'
import './Home.css'
import { Slider } from '../../Component'
import Swipe from '../../Component/Swiper1/Swiper1'
import Swipe2 from '../../Component/Swiper2/Swiper2'
const Home = () => {
  return (
    <div dir='rtl'>
      {/* <div className='main'>
<div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , height:"100vh"}}>
    <p style={{fontSize:"30px"}}> <b> محلات عرفه للعطاره  </b></p>
    <button style={{margin:"200px", border:"1px solid #000"}}> اشترى الأن </button>
</div>
      </div> */}

      <Slider />

<div style={{margin:"0px auto" ,textAlign:"center", alignItems:"center" , display:"flex" , justifyContent:"space-around" ,padding:"30px" , backgroundColor:"#59725cb9", flexWrap:"wrap"}}>

    <img src="/النبذة.jpg" alt="" height={300} className='my-2' />
    <div dir='rtl'>
        
<p className='text-center' style={{fontSize:"30px"}}> <b>محلات عرفة للعطارة</b>
 </p>
<br />

تأسست محلات عرفة للعطارة عام1980 من قبل الحاج عرفة.

<br />

تبيع محلات عرفة مجموعة واسعة من الأعشاب  .والتوابل والبهارات والمنتجات الطبيعية

 <br />

بالإضافة إلى منتجات العناية بالبشرة والشعر.

<br />
تتمتع محلات عرفة بسمعة طيبة في فلسطين  لبيعها منتجات عالية الجودة بأسعار مناسبة.

    </div>
</div>

<Swipe />


<Swipe2 />


<div style={{backgroundColor:"#98a199b8" ,padding:"30px"}}>
    <h2 className='text-center'> الوصفات </h2>
<div style={{margin:"0px auto" ,textAlign:"center", alignItems:"center" , display:"flex" , justifyContent:"space-around" ,padding:"30px" , flexWrap:"wrap"}}>

<div dir='rtl'>
    
<p className='text-center' > <b>  وصفة ورق العنب  </b>
</p>
<br />

<button className='rounded-5 my-5' style={{backgroundColor:"#59725cb9"}}> للمزيد </button>
</div>
<img src="/ورق عنب.jpg" alt="" height={300} width={300} className='my-2 rounded-3 shadow-lg' />

</div>  
</div>
    </div>
  )
}

export default Home
