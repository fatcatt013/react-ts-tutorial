import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <BSNavbar className="bg-white shadow mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </BSNavbar>
  );
}
