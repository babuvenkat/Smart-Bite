import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Favourite from './components/Favourite';
import StartersPage from './components/StartersPage';
import MainCourses from './components/MainCourses';
import Desserts from './components/Desserts';
import ContactUs from './components/ContactUs';
import FavouriteProvider from './context/FavouriteProvider'; 
import Payment from './components/Payment'; // Import FavouriteProvider
import Footer from './components/Footer';

const App = () => {
  return (
    <FavouriteProvider> {/* Wrap the entire app with the provider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/starters" element={<StartersPage />} />
          <Route path="/main-courses" element={<MainCourses />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer/>
      </Router>
      
    </FavouriteProvider>
  );
};

export default App;
