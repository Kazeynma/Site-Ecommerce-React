import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//import component 
import { Header } from './component/Header'
import { Footer } from './component/Footer'
//import pages
import { HomePage } from "./View/HomePage"
import { ContactUs } from './View/ContactUs';
import { Productpage } from './View/ProductPage';
import { Login } from './View/Login';
import { CreateAccoount } from './View/CreateAccount';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/products" element={<Productpage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/account/create" element={<CreateAccoount />} />
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
