import { Container, Navbar, Nav, Image } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useMediaQuery } from "react-responsive";
import Logo from "./../../assets/LOGO.png";

function Root() {
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return (
    <>
      <Navbar
        style={{
          background: "#fff",
          borderBottom: "3px solid #000",
          padding: "12px",
        }}
        expand="md"
      >
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
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={isMobile ? { paddingTop: "8px" } : {}}
          >
            <Nav>
              <div
                style={{
                  borderBottom: `${
                    isMobile ? "1px solid rgba(0, 0, 0, 0.55)" : "none"
                  }`,
                  borderRight: `${
                    isMobile ? "none" : "1px solid rgba(0, 0, 0, 0.55)"
                  }`,
                  paddingRight: `${isMobile ? "" : "8px"}`,
                  paddingLeft: `${isMobile ? "" : "8px"}`,
                  marginRight: `${isMobile ? "" : "8px"}`,
                  marginLeft: `${isMobile ? "" : "8px"}`,
                }}
              >
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </div>
              <LinkContainer to="/portfolio">
                <Nav.Link>Portfolio</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/articles">
                <Nav.Link>Articles</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
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
