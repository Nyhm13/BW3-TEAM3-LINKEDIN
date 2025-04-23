import React, { useEffect, useState } from "react"
import { Button, Card, Spinner, Alert, Modal } from "react-bootstrap"
import {
  ShieldCheck,
  GraduationCap,
  Mail,
  MapPin,
  Briefcase,
  Pencil,
} from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"
import EditProfileImageModal from "./EditProfileImageModal"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3Njk1YmQ0NTE4MTAwMTVjZTgzZDkiLCJpYXQiOjE3NDUzMTYxODgsImV4cCI6MTc0NjUyNTc4OH0.D0FW8gFj72D33GaWdePjMUiQln-mKlY03qaU5Cd0ccc"

const ProfileCard = ({ selectedUserId }) => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const loggedInUserId = "6808c6f995878f0015f4a1d5"
  console.log("Selected User ID:", selectedUserId)
  useEffect(() => {
    setLoading(true)
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${selectedUserId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero del profilo")
        }
      })
      .then((data) => {
        setProfile(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [selectedUserId])

  if (loading) return <Spinner animation="border" variant="primary" />
  if (error) return <Alert variant="danger">{error}</Alert>
  if (!profile) return null

  return (
    <>
      <Card className="profile-card shadow-sm rounded-3 overflow-hidden mb-3 flex-grow-1">
        <div className="profile-cover position-relative">
          <img
            src="https://www.cvsl.it/wp-content/uploads/2021/05/gatto-che-soffia.png"
            alt="cover"
            className="cover-img"
          />
          {selectedUserId === loggedInUserId && (
            <Pencil
              size={20}
              className="icon position-absolute top-0 end-0 m-2 bg-white rounded-circle p-1 shadow-sm pointer bg-primary"
              onClick={() => setShowImageModal(true)}
            />
          )}

          <img
            src={profile.image || "https://www.placebears.com/400/400"}
            alt={`${profile.name} ${profile.surname}`}
            className="profile-img rounded-circle border border-white"
          />
        </div>

        <Card.Body className="pt-5">
          <h5 className="mb-0 d-flex">
            {profile.name} {profile.surname}
            <Pencil size={18} className="icon text-muted pointer ms-auto" />
          </h5>

          <div className="text-primary badge-verifica d-flex align-items-center">
            <ShieldCheck size={16} className="me-1" />
            Aggiungi badge di verifica
          </div>

          <div className="fw-semibold d-flex align-items-center">
            <Briefcase size={14} className="me-1" />
            {profile.title}
          </div>

          <div className="text-muted small mb-2 d-flex align-items-center">
            <MapPin size={14} className="me-1" />
            {profile.area}
          </div>

          <div className="text-primary small mb-3 clickable d-flex align-items-center">
            <Mail size={14} className="me-1" />
            Informazioni di contatto: {profile.email}
          </div>

          <div className="d-flex align-items-center mb-3 school-row">
            <GraduationCap size={24} className="me-2" />
            <span className="small">{profile.bio}</span>
          </div>

          <div className="d-flex flex-wrap gap-1 mb-3">
            <Button
              variant="primary"
              size="sm"
              className="rounded-pill px-3 py-1"
            >
              Disponibile per
            </Button>
            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill px-3 py-1"
            >
              Aggiungi sezione del profilo
            </Button>
            <Button
              variant="light"
              size="sm"
              className="rounded-pill px-3 py-1 border"
            >
              Risorse
            </Button>
          </div>
          <Button
            variant="outline-secondary"
            size="sm"
            className="rounded-pill px-3 py-1 border w-100"
          >
            Migliora profilo
          </Button>

          <div className="bg-light p-2 rounded mt-3">
            <strong className="small d-block">Disponibile a lavorare</strong>
            <div className="small text-muted">
              Esperienze:
              <br />
              <a
                role="button"
                className="text-primary"
                onClick={() => setShowModal(true)}
              >
                Mostra dettagli
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="job-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Preferenze offerte di lavoro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-3">
            <img
              src={profile.image || "https://www.placebears.com/100/100"}
              alt={`${profile.name} ${profile.surname}`}
              className="modal-profile-img"
            />
            <h5 className="mb-1">
              {profile.name} {profile.surname}
            </h5>
            <p className="text-muted small">è disponibile a lavorare</p>
          </div>

          <div className="modal-section">
            <strong>Qualifiche</strong>
            <p>
              Trasportatore · Shiny Hunter · Cuoco · Programmatore · Dungeon
              Master
            </p>
          </div>

          <div className="modal-section">
            <strong>Tipi di località</strong>
            <p>In sede · Ibrido · Da remoto</p>
          </div>

          <div className="modal-section">
            <strong>Località (in sede)</strong>
            <p>Bologna, Emilia Romagna, Italia · Milano</p>
          </div>

          <div className="modal-section">
            <strong>Località (da remoto)</strong>
            <p>Bologna, Emilia Romagna, Italia · Milano</p>
          </div>

          <div className="modal-section">
            <strong>Data di inizio</strong>
            <p>Immediatamente, sto attivamente cercando lavoro</p>
          </div>

          <p className="small text-muted mt-4">👁️ Solo recruiter</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
      {selectedUserId === loggedInUserId && (
        <EditProfileImageModal
          show={showImageModal}
          onClose={() => setShowImageModal(false)}
          userId={selectedUserId}
          token={token}
          onUploadSuccess={(updated) => setProfile(updated)}
        />
      )}
    </>
  )
}

export default ProfileCard
