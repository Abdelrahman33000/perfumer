import React from 'react'
import './Home.css'
import { Slider } from '../../Component'
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

<div style={{margin:"100px auto" ,textAlign:"center", alignItems:"center" , display:"flex" , justifyContent:"space-around" ,padding:"30px" , backgroundColor:"#59725cb9"}}>

    <img src="/النبذة.jpg" alt="" height={300} />
    <div dir='rtl'>
        
<p className='text-center'> <b>محلات عرفة للعطارة</b>
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





    </div>
  )
}

export default Home
