import './App.css';
import { Footer, NavBar } from './Component';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import {  Home, Items, Products } from './Pages';
import Details from './Component/Details';
function App() {
  return (
 
<div style={{overflowX:"hidden"}}>
  <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/items' element={<Items />} />
    <Route path='/products' element={<Products />}/>
    <Route path='/details' element={<Details  />} />
    
    
   </Routes>
  
  <Footer />
  </BrowserRouter>
  
  
</div>
  );
}

export default App;
