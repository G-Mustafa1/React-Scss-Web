import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <h2 className="logo">MyWebsite</h2>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
