import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          Puppy Bowl
        </Link>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Link to="/new-player" className="nav-button">
          Add New Player
        </Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Navbar; 