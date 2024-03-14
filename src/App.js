import './App.css';
import { NavBar } from './Component';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Home } from './Pages';
function App() {
  return (
 
<BrowserRouter>
 <NavBar />
 <Routes>
  <Route path='/' element={<Home />} />
  
 </Routes>

</BrowserRouter>

  );
}

export default App;
