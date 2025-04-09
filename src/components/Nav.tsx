import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/candidate-search">Candidate Search</Link>
        </li>
        <li>
          <Link to="/SavedCandidates">Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
