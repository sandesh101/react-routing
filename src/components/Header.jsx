import { Link } from "react-router";

function Header() {
  return (
    <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
      <ul
        style={{ display: "flex", listStyle: "none", gap: "1rem", margin: 0 }}
      >
        <li>
          {/* <Link to="/">Home</Link> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
