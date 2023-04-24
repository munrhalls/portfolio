import { Navbar, Container, Nav, NavDropdown, Collapse } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Brand>Munrhalls</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/">Home</Link>

            <Link to="/web-applications">Web applications</Link>
            <Link to="/articles">Articles</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Root;
