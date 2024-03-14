import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#59725cb9", display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"30px" }}>
      <img src="/logaa.png" width={200} alt="" className='' style={{borderRadius:"50%"}} />
      <p style={{fontSize:"30px"}}> <b> محلات عرفة للعطارة </b></p>
      <p> <b> ‪+970 566 187 204‬ </b></p>
      <p> <b> فلسطين -الخليل -رأس الجورة </b></p>
      <div className='d-flex gap-5 my-3'>
        <img width={50} src="/facebook.png" alt="" />
        <img width={50} src="/instagram.png" alt="" />
        <img width={50} src="/whatsapp.png" alt="" />
      </div>
    </div>
  )
}

export default Footer
