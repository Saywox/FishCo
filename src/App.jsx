import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Blog from './pages/blog/blog'
import Contact from './pages/contact/contact'
import Galery from './pages/gallery/galery'
import Home from './pages/home/home'
import Info from './pages/info/info'
import Rules from './pages/rules/rules'
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import CopyRight from "./pages/copyright/copyright";
import NotFound from "./pages/404";
function App() {
  useEffect(() => {
    fetch("https://api.inaturalist.org/v1/taxa?q=fish")
    .then(response => response.json())
    .then(data => console.log(data.results))
    .catch(error => console.error("Error fetching fish data:", error));

  }, []);

  return (
    <div className="app-container">
      <Router>
        <Navigation />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Galery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/copyright" element={<CopyRight />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
