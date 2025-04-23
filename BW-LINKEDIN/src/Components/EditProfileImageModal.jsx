import { useState } from "react"
import { Modal, Button } from "react-bootstrap"

const EditProfileImageModal = ({
  show,
  onClose,
  userId,
  token,
  onUploadSuccess,
}) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleUpload = async () => {
    if (!selectedImage || !userId) return

    const formData = new FormData()
    formData.append("profile", selectedImage)

    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      )

      if (!res.ok) throw new Error("Errore durante l’upload")

      const updatedProfile = await res.json()
      onUploadSuccess(updatedProfile) // callback per aggiornare
      onClose()
      setSelectedImage(null)
    } catch (err) {
      alert("Errore: " + err.message)
    }
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modifica immagine profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedImage && (
          <div className="text-center mb-3">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Anteprima"
              className="rounded-circle w-100"
            />
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="form-control"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Annulla
        </Button>
        <Button variant="primary" onClick={handleUpload}>
          Carica
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditProfileImageModal
