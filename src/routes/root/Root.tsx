import { Container, Navbar, Nav } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Root() {
  function onShowLogin() {
    console.log("show login");
  }

  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand>Munrhalls</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/web-applications">
                <Nav.Link>Web applications</Nav.Link>
              </LinkContainer>
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
