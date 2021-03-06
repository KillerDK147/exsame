import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  SSRProvider,
} from "react-bootstrap";
import Link from "next/link";
const Menu = (props) => {
  return (
    <SSRProvider>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                {props.bruger && (
                  <Link href="/pages/login/logout.js" passHref>
                    <Nav.Link>logout</Nav.Link>
                  </Link>
                )}
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login">login</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>{props.children}</main>
      </div>
    </SSRProvider>
  );
};

export default Menu;
