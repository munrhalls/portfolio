import { Container, Navbar, Nav, Image } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useMediaQuery } from "react-responsive";
import Logo from "./../../../public/assets/graphics/LOGO.png";
import styled from "styled-components";

const CustomNavbar = styled(Navbar)`
  border-bottom: 3px solid black;
`;

const CustomLinkContainer = styled(LinkContainer)`
  text-align: center;
  padding-bottom: 12px;
  margin-bottom: 3px;
  &:hover {
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    opacity: 0.9;
    box-shadow: inset 0 0 3px 5px #333;
  }
  &:hover&.active {
    background-color: #000;
    color: silver;
    cursor: not-allowed;
    border-radius: 5px;
    opacity: 0.9;
    box-shadow: none;
  }
  &.active {
    font-weight: bold;
    transform: scale(1.05);
  }
`;

function Root() {
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return (
    <>
      <CustomNavbar expand="md">
        <Container>
          <Navbar.Brand
            style={{
              // border: "1px solid #000",
              padding: "0 .5rem",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              overflow: "hidden",
              boxShadow: "#fefefe 3px 1px 7px 10px inset",
            }}
          >
            <Image
              style={{
                height: "2.5rem",
                width: "2.5rem",
                border: "1px solid #000",
                padding: ".25rem .25rem",
                borderRadius: "5px",
                margin: "0rem",
                transform: "rotate(45deg) skew(0, 15deg)",
              }}
              rounded
              src={Logo}
              alt="Munrhalls"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "2.15rem",
                borderRadius: "5px",
                padding: "0 0.25rem",
                width: "100%",
                marginLeft: "0.25rem",
              }}
            >
              <span
                style={{
                  letterSpacing: "2px",
                  fontSize: ".8rem",
                  padding: "0.1rem 0.25rem",
                  width: "100%",
                }}
              >
                Munrhalls
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle style={{ outline: "none" }} />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={isMobile ? { paddingTop: "8px" } : {}}
          >
            <Nav>
              <div
                style={{
                  margin: `${isMobile ? "0" : "0 1.5rem"}`,
                  borderBottom: "2px solid #000",
                }}
              >
                <CustomLinkContainer to="/">
                  <Nav.Link>Portfolio</Nav.Link>
                </CustomLinkContainer>
              </div>
              <div
                style={{
                  margin: `${isMobile ? "0" : "0 1.5rem"}`,
                  borderBottom: "2px solid #000",
                }}
              >
                <CustomLinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </CustomLinkContainer>
              </div>
              <div
                style={{
                  margin: `${isMobile ? "0" : "0 1.5rem"}`,
                  borderBottom: "2px solid #000",
                }}
              >
                <CustomLinkContainer to="/content">
                  <Nav.Link>Content</Nav.Link>
                </CustomLinkContainer>
              </div>
              <div
                style={{
                  margin: `${isMobile ? "0" : "0 1.5rem"}`,
                  borderBottom: `${
                    isMobile ? "2px solid transparent" : "2px solid #000"
                  }`,
                }}
              >
                <CustomLinkContainer to="/other">
                  <Nav.Link>Other</Nav.Link>
                </CustomLinkContainer>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </CustomNavbar>

      <Outlet />
    </>
  );
}

export default Root;
