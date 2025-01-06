import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const NavigationBar = ({ setUser }) => {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Container> */}
      <Navbar.Brand as={Link} to="/">
        Movie App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link style={{ padding: "20px" }} to="/signup">Sign Up</Link>
          <Link style={{ padding: "20px" }} to="/login">Login</Link>
          <Link style={{ padding: "20px" }} to="/profile">Profile</Link>
          <Link style={{ padding: "20px" }} to="/">Home</Link>
          {/* <a  to="#" className="logout-button" onClick={() => { setUser(null); localStorage.clear() }}>Logout</a> */}
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};