import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav>
        <div className="navbar">
            <div className="navbar-brand>">
                <Link to="/">Movie App</Link>
            </div>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
        </div>
    </nav>
  );
}

export default NavBar;