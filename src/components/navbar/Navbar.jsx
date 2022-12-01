import { Link } from 'react-router-dom';
import './navbar.styles.scss';
function Navbar() {
  return (
    <div className="navbar-container">
      <ul>
        <Link to="/" className="link">
          <li>Counter</li>
        </Link>
        <Link to="/blog" className="link">
          <li>Blog</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
