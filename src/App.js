import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//import component 
import { Header } from './component/Header'
import { Footer } from './component/Footer'
//import pages
import { HomePage } from "./View/HomePage"
import { ContactUs } from './View/ContactUs';
import { Productpage } from './View/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/products" element={<Productpage />} />
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
