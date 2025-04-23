import { useEffect, useState } from "react"
import { Button, Form, Modal, Spinner } from "react-bootstrap"
import experienceIcon from "../assets/linkedin.jpg"

const Experiences = ({ userId, authenticatedUserId }) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NjQyY2Q0NTE4MTAwMTVjZTgzZDYiLCJpYXQiOjE3NDUzMTczMTYsImV4cCI6MTc0NjUyNjkxNn0.nHOAC5onf9T1D7p9PYxqLaTg_SDC8fL1tpt-CaUb_eY" //PER RENDERLO FUNZIONANTE INSERITE IL VOSTRO TOKEN
  const [experiences, setExperiences] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  })
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showEditIcons, setShowEditIcons] = useState(false)

  const fetchExperiences = () => {
    setLoading(true)
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel fetch")
        return res.json()
      })
      .then((data) => setExperiences(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (userId) fetchExperiences()

    const fetchAllProfiles = () => {
      fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Errore nel fetch dei profili")
          return res.json()
        })
        .then((data) => {
          console.log("Lista profili disponibili:", data)
        })
        .catch((err) => console.error(err))
    }

    fetchAllProfiles()
  }, [userId])

  const handleDelete = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${editingId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella cancellazione")
        fetchExperiences()
        setShowModal(false)
      })
      .catch((err) => console.error(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const method = isEditing ? "PUT" : "POST"
    const url = isEditing
      ? `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${editingId}`
      : `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella richiesta")
        return res.json()
      })
      .then(() => {
        fetchExperiences()
        setShowModal(false)
        setFormData({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        })
        setIsEditing(false)
        setEditingId(null)
      })
      .catch((err) => console.error(err))
  }

  const handleEdit = (exp) => {
    setFormData(exp)
    setIsEditing(true)
    setEditingId(exp._id)
    setShowModal(true)
  }

  return (
    <div className="container mt-4 ">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Esperienze</h2>
        {userId === authenticatedUserId && (
          <div>
            <i
              className="bi bi-plus-circle icon-style"
              onClick={() => {
                setShowModal(true)
                setIsEditing(false)
                setFormData({
                  role: "",
                  company: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                  area: "",
                })
              }}
            ></i>
            <i
              className="bi bi-pencil icon-style"
              onClick={() => setShowEditIcons(!showEditIcons)}
            ></i>
          </div>
        )}
      </div>

      {loading ? (
        <Spinner animation="border" className="mt-3" />
      ) : experiences.length === 0 ? (
        <p className="mt-3 text-muted">
          Non ci sono esperienze per questo utente.
        </p>
      ) : (
        experiences.map((exp) => (
          <div key={exp._id} className="experience-item">
            <div className="d-flex align-items-start">
              <img src={experienceIcon} alt="Icona esperienza" />
              <div>
                <h5 className="mb-1">
                  {exp.role} @ {exp.company}
                </h5>
                <p className="mb-1">
                  {new Date(exp.startDate).toLocaleDateString()} -{" "}
                  {exp.endDate
                    ? new Date(exp.endDate).toLocaleDateString()
                    : "Presente"}
                </p>
                <p>{exp.description}</p>
                <p>{exp.area}</p>
              </div>
              {showEditIcons && userId === authenticatedUserId && (
                <i
                  className="bi bi-pencil edit-icon"
                  onClick={() => handleEdit(exp)}
                ></i>
              )}
            </div>
          </div>
        ))
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditing ? "Modifica esperienza" : "Aggiungi esperienza"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data Inizio</Form.Label>
              <Form.Control
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data Fine</Form.Label>
              <Form.Control
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {isEditing && (
              <Button variant="danger" onClick={handleDelete}>
                Elimina
              </Button>
            )}
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Annulla
            </Button>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default Experiences
