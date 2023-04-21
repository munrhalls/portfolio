import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Collapse } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import bgImg from "../assets/fa1.png";
import "bootstrap/dist/css/bootstrap.min.css";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-menu {
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out;
  }
  &.show {
    .dropdown-menu {
      opacity: 1;
    }
  }
`;

const Root = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const dropdownClassName = dropdownShow ? "show" : "";

  return (
    <>
      <Navbar bg="light" fixed="top" expand="md" className="shadow">
        <Navbar.Brand href="#">My Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <StyledNavDropdown
              title="What I can do for you"
              className={dropdownClassName}
              onClick={() => setDropdownShow(!dropdownShow)}
            >
              <Collapse in={dropdownShow}>
                <div>
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Something else here
                  </NavDropdown.Item>
                </div>
              </Collapse>
            </StyledNavDropdown>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <div className="row">
          <div className="col">
            <h1>works</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur explicabo suscipit enim. Dolorum minus soluta,
              tempore esse fuga magni expedita iure explicabo sapiente inventore
              voluptatibus, et, saepe repellendus doloremque fugiat.
            </p>
          </div>
          <div className="col">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur explicabo suscipit enim. Dolorum minus soluta,
              tempore esse fuga magni expedita iure explicabo sapiente inventore
              voluptatibus, et, saepe repellendus doloremque fugiat.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Root;
