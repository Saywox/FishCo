import { Link } from "react-router-dom";
import "./navigation.css"
const Navigation = () => {
    return (
        <div className="navigation-div">
          <nav className="navbar">
            <div className="logo">
            <Link className="centered-logo" to="/"> 
              <img 
                src="https://www.shutterstock.com/image-vector/big-bass-fish-vector-cartoon-600nw-2315358649.jpg" 
                alt="Logo" 
              />
              <p><b>FishingCo&trade;</b></p>
              </Link>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/info">Info</Link></li>
              <li><Link to="/rules">Rules</Link></li>
            </ul>
          </nav>
        </div>
      );
}
export default Navigation 