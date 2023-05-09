import { Container, Navbar, Nav, Image } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "./../../assets/LOGO.png";

function Root() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand
            style={{
              border: "1px solid #000",
              padding: "0 .5rem",
              borderRadius: "5px",
            }}
          >
            <Image
              style={{
                height: "2.5rem",
                width: "2.5rem",
                border: "1px solid #000",
                padding: "0 .25rem",
              }}
              rounded
              src={Logo}
              alt="Munrhalls"
            />
            <span
              style={{
                letterSpacing: "2px",
                marginLeft: "0.75rem",
                fontSize: ".85rem",
              }}
            >
              Munrhalls
            </span>
          </Navbar.Brand>
          <Navbar.Toggle style={{ outline: "none" }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <Nav.Link>Portfolio</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/articles">
                <Nav.Link>Articles</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
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
