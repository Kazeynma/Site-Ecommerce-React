import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//import component 
import { Header } from './component/Header'
import { Footer } from './component/Footer'
//import pages
import { HomePage } from "./View/HomePage"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
