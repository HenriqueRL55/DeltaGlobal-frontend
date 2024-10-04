// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home/home';
import ContactForm from '../pages/ContactForm/contactForm';
import SearchPage from '../pages/SearchPage/searchPage';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
