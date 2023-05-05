import { Container, Navbar, Nav } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";

function Root() {
  return (
    <>
      <Navbar fixed="top" bg="light" expand="md">
        <Container>
          <Navbar.Brand>Munrhalls</Navbar.Brand>
          <Navbar.Toggle style={{ outline: "none" }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/software">
                <Nav.Link>Software</Nav.Link>
              </LinkContainer>

              {/* <NavDropdown title="Software">
                <LinkContainer to="/web-applications">
                  <NavDropdown.Item>Web applications</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/websites">
                  <NavDropdown.Item>Websites</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/learning-projects">
                  <NavDropdown.Item>Learning projects</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown> */}

              <LinkContainer to="/articles">
                <Nav.Link>Articles</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Root;
