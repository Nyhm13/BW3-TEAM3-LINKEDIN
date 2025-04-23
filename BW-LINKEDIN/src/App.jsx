import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Experiences from "./Components/Experiences"
import { useState } from "react"
import Sidebar from "./Components/Sidebar"
import ProfileCard from "./Components/ProfileCard"
import NavbarLink from "./Components/NavbarLink"
import Footer from "./Components/Footer"
import StatiComponents from "./Components/StatiComponents"
import { Container, Row, Col } from "react-bootstrap"

function App() {
  // se l'id è quello dell'utente autenticato ti permetterà di modificare altrimenti no
  const [selectedUserId, setSelectedUserId] = useState(
    "6807642cd451810015ce83d6"
  ) // Imposta un ID di default o uno iniziale
  // ID dell'utente autenticato
  const [authenticatedUserId, setAuthenticatedUserId] = useState(
    "6807642cd451810015ce83d6"
  ) // Imposta l'ID dell'utente autenticato

  const handleUserSearch = (e) => {
    setSelectedUserId(e.target.value)
  }

  return (
    <>
      <header>
        <NavbarLink />
      </header>

      <main>
        <Container className="d-flex mt-5 ">
          <Row>
            <Col sm={12} lg={9}>
              <ProfileCard />
              <Experiences
                userId={selectedUserId}
                authenticatedUserId={authenticatedUserId}
              />
              <StatiComponents />
            </Col>
            <Col sm={12} lg={3}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
