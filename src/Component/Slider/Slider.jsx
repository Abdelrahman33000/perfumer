import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function CarouselFadeExample() {
  return (
    <Carousel fade className='w-100 'style={{height:"500px"}}>
      <Carousel.Item style={{height:"500px"}}>
        <img src='/img4.jpg' alt='' style={{width:"100%" , height:"500px"}} />
        <Carousel.Caption >
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , height:"100vh"}}>
    <p style={{fontSize:"30px" , marginTop:"200px ",color:"#000"}}> <b> محلات عرفه للعطاره  </b></p>
<Link to={"/items"}>
      <button className='rounded-5 mt-5' style={{ border:"1px solid #000" , color:"#000"}}> اشترى الأن </button>
  
</Link></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"500px"}}>
        <img src='/slider_2.jpg' alt=''style={{width:"100%" , height:"500px"}} />
        <Carousel.Caption>
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , height:"100vh"}}>
    <p style={{fontSize:"30px",marginTop:"200px " , color:"#000"}}> <b> محلات عرفه للعطاره  </b></p>
<Link to={"/items"}>
      <button className='rounded-5 mt-5' style={{ border:"1px solid #000" , color:"#000"}}> اشترى الأن </button>
  
</Link></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"500px"}}>
        <img src='/slider_3.jpg' alt='' style={{width:"100%" , height:"500px"}} />
        <Carousel.Caption>
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , height:"100vh"}}>
    <p style={{fontSize:"30px" ,marginTop:"200px " , color:"#000"}}> <b> محلات عرفه للعطاره  </b></p>
<Link to={"/items"}>
      <button className='rounded-5 mt-5' style={{ border:"1px solid #000" , color:"#000"}}> اشترى الأن </button>
  
</Link></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;