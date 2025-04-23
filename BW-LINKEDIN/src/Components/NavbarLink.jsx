import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Form, FormControl, Nav, Container, NavDropdown } from "react-bootstrap";
import { HouseFill, PeopleFill, BriefcaseFill, ChatDotsFill, BellFill } from 'react-bootstrap-icons';

const NavbarLink = function() {
  return (
    <Navbar bg="light" className="px-3 py-2 shadow-sm" expand="lg">
      <Container fluid className="d-flex align-items-center">
        {/* LinkedIn logo */}
        <Navbar.Brand href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </Navbar.Brand>

        {/* Search bar */}
        <Form className="d-flex ms-2 flex-grow-1">
          <FormControl type="search" placeholder="Cerca" className="me-2" />
        </Form>

        {/* Icons menu */}
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Item className="text-center mx-3">
            <HouseFill size={20} />
            <div style={{ fontSize: '0.8rem' }}>Home</div>
          </Nav.Item>
          <Nav.Item className="text-center mx-3">
            <PeopleFill size={20} />
            <div style={{ fontSize: '0.8rem' }}>Rete</div>
          </Nav.Item>
          <Nav.Item className="text-center mx-3">
            <BriefcaseFill size={20} />
            <div style={{ fontSize: '0.8rem' }}>Lavoro</div>
          </Nav.Item>
          <Nav.Item className="text-center mx-3">
            <ChatDotsFill size={20} />
            <div style={{ fontSize: '0.8rem' }}>Messaggistica</div>
          </Nav.Item>
          <Nav.Item className="text-center mx-3">
            <BellFill size={20} />
            <div style={{ fontSize: '0.8rem' }}>Notifiche</div>
          </Nav.Item>
          <NavDropdown
            title={
              <span className="d-inline-flex align-items-center">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Tu"
                  width="30"
                  height="30"
                  className="rounded-circle me-1"
                />
                <span style={{ fontSize: '0.8rem' }}>Tu</span>
              </span>
            }
            id="nav-dropdown-profile"
            className="mx-3"
            align="end"
          >
            <NavDropdown.Item href="#action1">Profilo</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Impostazioni</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Esci</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarLink