import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="navbar">
    <h1>Flight Booker</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tickets">Tickets</Link>
    </nav>
  </header>
);

export default Navbar;