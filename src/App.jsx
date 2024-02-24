import LocomotiveScroll from 'locomotive-scroll';
import {
  Route,
  BrowserRouter,
  Routes
  
} from "react-router-dom"; 
import Home from './pages/Home';
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index  element={<Home />}/>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    
   
    </div>
  )
}

export default App