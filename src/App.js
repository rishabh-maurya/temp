import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavbarComponent from './components/navbar/NavbarComponent';
// react-slick css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import ShowBlogPost from './components/showBlogPost/ShowBlogPost';
import Services from './pages/services/Services';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<ShowBlogPost />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Pricing' element={<h1>Pricing Page</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
