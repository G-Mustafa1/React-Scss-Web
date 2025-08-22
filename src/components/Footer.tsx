import { Link } from 'react-router-dom'
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>MyWebsite</h3>
          <p>
            A colorful React + SCSS website demo. Built with ❤️ for learning and creativity.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
            <Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
            <Link to="https://www.linkedin.com/in/g-mustafa1/"><i className="fab fa-linkedin-in"></i></Link>
            <Link to="https://github.com/G-Mustafa1"><i className="fab fa-github"></i></Link>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ghulam Mustafa. All Rights Reserved.</p>
      </div>
    </footer>
    )
}

export default Footer
