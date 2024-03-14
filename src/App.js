import './App.css';
import { Footer, NavBar } from './Component';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Home } from './Pages';
function App() {
  return (
 
<div style={{overflowX:"hidden"}}>
  <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path='/' element={<Home />} />
    
   </Routes>
  
  <Footer />
  </BrowserRouter>
  
  
</div>
  );
}

export default App;
