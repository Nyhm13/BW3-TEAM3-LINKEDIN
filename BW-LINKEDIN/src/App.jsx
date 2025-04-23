import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

import NavbarLink from "./Components/NavbarLink"
import ProfileCard from "./Components/ProfileCard"
import Experiences from "./Components/Experiences"
import StatiComponents from "./Components/StatiComponents"
import Sidebar from "./Components/Sidebar"
import Footer from "./Components/Footer"

function App() {
  const [selectedUserId, setSelectedUserId] = useState(
    "6808c6f995878f0015f4a1d5"
  )
  const [authenticatedUserId] = useState("6808c6f995878f0015f4a1d5")

  const handleUserSearch = (e) => {
    setSelectedUserId(e.target.value)
  }

  const handleSegui = (id) => {
    setSelectedUserId(id)
    console.log("ID selezionato:", id)
  }

  const handleHome = () => {
    setSelectedUserId(authenticatedUserId)
  }
  return (
    <>
      <header className="sticky-top">
        <NavbarLink goHome={handleHome} />
      </header>

      <main>
        <Container className="d-flex mt-5">
          <Row>
            <Col sm={12} lg={9}>
              <ProfileCard selectedUserId={selectedUserId} />
              <Experiences
                userId={selectedUserId}
                authenticatedUserId={authenticatedUserId}
              />
              <StatiComponents />
            </Col>
            <Col sm={12} lg={3}>
              <Sidebar onSegui={handleSegui} />
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
