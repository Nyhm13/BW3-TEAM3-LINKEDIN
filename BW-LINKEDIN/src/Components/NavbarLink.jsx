import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap"
import {
  HouseFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
} from "react-bootstrap-icons"

const NavbarLink = function ({ goHome }) {
  // const Token =
  //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3OTFlZmQ0NTE4MTAwMTVjZTgzZTQiLCJpYXQiOjE3NDUzMjY1NzUsImV4cCI6MTc0NjUzNjE3NX0.LAcndcnlBtqs08smmj443rFm47QmBNEHMa9lAYJI5T4";

  // const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;

  // const [user, setUser] = useState(null);

  // const fetchUser = () => {
  //   fetch(URL, {
  //     method: "GET",
  //     headers: {
  //       Authorization: Token,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("ERRORE");
  //       }
  //     })
  //     .then((data) => {
  //       console.log("DATI DALLA FETCH navbar", data);
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       console.log("ERRORE NELLA FETCH", error);
  //     });
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, [userId]);

  return (
    <Navbar bg="light" expand="lg" className="px-3 py-2 shadow-sm">
      <Container fluid>
        {/* LinkedIn logo */}
        <Navbar.Brand href="#" onClick={goHome} style={{ cursor: "pointer" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="linkedin-navbar-nav" />

        <Navbar.Collapse id="linkedin-navbar-nav">
          {/* Search bar */}
          <Form className="d-flex my-2 my-lg-0 ms-lg-2 flex-grow-1">
            <FormControl type="search" placeholder="Cerca" className="me-2" />
          </Form>

          {/* Icons menu */}
          <Nav className="ms-auto d-flex align-items-center flex-row flex-wrap justify-content-end">
            <Nav.Item className="text-center mx-2">
              <HouseFill size={20} />
              <div style={{ fontSize: "0.8rem" }}>Home</div>
            </Nav.Item>
            <Nav.Item className="text-center mx-2">
              <PeopleFill size={20} />
              <div style={{ fontSize: "0.8rem" }}>Rete</div>
            </Nav.Item>
            <Nav.Item className="text-center mx-2">
              <BriefcaseFill size={20} />
              <div style={{ fontSize: "0.8rem" }}>Lavoro</div>
            </Nav.Item>
            <Nav.Item className="text-center mx-2">
              <ChatDotsFill size={20} />
              <div style={{ fontSize: "0.8rem" }}>Messaggistica</div>
            </Nav.Item>
            <Nav.Item className="text-center mx-2">
              <BellFill size={20} />
              <div style={{ fontSize: "0.8rem" }}>Notifiche</div>
            </Nav.Item>
            <NavDropdown
              title={
                <span className="d-inline-flex align-items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPkfTSbix4g4EPv42EinPjh0XLddeKySRbA&s"
                    alt="Tu"
                    width="30"
                    height="30"
                    className="rounded-circle me-1"
                  />
                  <span style={{ fontSize: "0.8rem" }}>Tu</span>
                </span>
              }
              id="nav-dropdown-profile"
              className="mx-2"
              align="end"
            >
              <NavDropdown.Item href="#action1">Profilo</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Impostazioni</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Esci</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarLink
