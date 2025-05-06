import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div>
                <p><b>FishingCo&trade;</b></p>
                <Link to="/copyright"><p>&copy; Can't sue us</p></Link>
            </div>
        </footer>
    );
}

export default Footer;