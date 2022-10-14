import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link} from "react-router-dom"

const NavBarExample = () => {
  return(
    <>
    <Navbar className="navBg" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/" > Home </Nav.Link>
            <Nav.Link as={Link} to="/history" > History </Nav.Link>
            <Nav.Link as={Link} to="/" > Products </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <section>
       <Outlet></Outlet>
    </section> */}
  </>
  )
}

export default NavBarExample;
