import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const Sidebar = ({ onSegui }) => {
  const Token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3OTFlZmQ0NTE4MTAwMTVjZTgzZTQiLCJpYXQiOjE3NDUzMjY1NzUsImV4cCI6MTc0NjUzNjE3NX0.LAcndcnlBtqs08smmj443rFm47QmBNEHMa9lAYJI5T4";

  const URL = "https://striveschool-api.herokuapp.com/api/profile/";

  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [profili, setProfili] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [randomProfiles, setRandomProfiles] = useState([]);
  const [similarProfiles, setSimilarProfiles] = useState([]);
  const [hideCard, setHideCard] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setRandomProfiles(getRandomProfiles(profili, 20));
    setShow(true);
  };

  const getRandomProfiles = (profiles, count) => {
    const shuffled = [...profiles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  //  funzione per passare l`id al componente app
  const handleSeguiClick = (id) => {
    if (onSegui) {
      onSegui(id);
    }
  };

  const fetchData = () => {
    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: Token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE");
        }
      })
      .then((data) => {
        console.log("DATI DALLA FETCH", data);
        setProfili(data);
        setSimilarProfiles(getRandomProfiles(data, 5));
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERRORE NELLA FETCH", error);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className=" p-4 border border-1 rounded-3 bg-white">
        <div className="d-flex justify-content-between ">
          <div>
            <span className=" fw-bold"> Lingua del profilo</span>
            <p>Italiano</p>
          </div>
          <i className="bi bi-pencil fs-4"></i>
        </div>
        <hr />
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className=" fw-bold">Profilo pubblico e URL</span>
            <i className="bi bi-pencil fs-4"></i>
          </div>
          <p className="overflow-hidden">
            www.linkedin.com/in/TEAM3-CADIAMO-MALATI41a7ba253
          </p>
        </div>
      </div>

      <Card
        className={`mt-4 border border-1 rounded-3 position-relative ${
          hideCard ? "d-none" : ""
        }`}
      >
        <div
          className=" bg-secondary rounded-top-3 "
          style={{ height: "100px" }}
        >
          <div className="d-flex  flex-row-reverse">
            <Button
              onClick={() => setSmShow(true)}
              className="me-2 mt-3 text-center"
              variant="light"
            >
              Promosso ...
            </Button>

            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  Opzioni Annuncio ...
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex align-items-center gap-3">
                <i class="bi bi-info-square-fill fs-4 text-secondary"></i>
                <div>
                  <small className="mb-0 fw-bold text-nowrap   text-black">
                    Perche vedo questo annuncio?
                  </small>
                  <small className="text-secondary">
                    Gestisci le preferenze per gli annunci pubblicitari
                  </small>
                </div>
              </Modal.Body>
              <Modal.Body className="d-flex align-items-center gap-3">
                <Button
                  style={{ backgroundColor: "transparent" }}
                  className="border-0 p-0"
                  onClick={() => setHideCard(true)}
                >
                  <i class="bi bi-eye-slash-fill fs-4 text-secondary"></i>
                </Button>
                <div>
                  <small className="mb-0 fw-bold text-nowrap   text-black">
                    Perche vedo questo annuncio?
                  </small>
                  <small className="text-secondary">
                    Gestisci le preferenze per gli annunci pubblicitari
                  </small>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <Card.Body>
          <img
            alt="E-Distribuzione"
            className="border-color-transparent  border-1 border-black position-absolute  rounded-3 z-2 shadow"
            style={{
              top: "15%",
              left: "35px",
            }}
            src="https://media.licdn.com/dms/image/v2/D4E10AQFz-QgaXjqVUw/image-shrink_480/B4EZVr38PPGgAk-/0/1741271582076?e=1745571600&amp;v=beta&amp;t=-BojOpl67se60EhaWKdUeNoRIdM7NAxOhG0N3F4qJdw"
          ></img>
          <Card.Title className="mt-5">E-distribuzione</Card.Title>
          <Card.Text>Energia alla portata di tutti</Card.Text>
          <small className="mb-2 d-block text-muted">
            Segui insieme a noi il viaggio dell`energia eletrica.
          </small>

          <a
            className=" btn w-100  btn-outline-primary link-underline"
            href="https://www.linkedin.com/company/e-distribuzione/?isFollowingPage=true"
          >
            Segui
          </a>
        </Card.Body>
      </Card>

      {profili && (
        <div className="p-3 border rounded-2 my-4 bg-white">
          <h4 className="text-start">Altri profili simili</h4>
          <div className="d-flex flex-column gap-2 border-bottom mb-2 ">
            {loading && (
              <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" />
              </div>
            )}
            {profili && (
              <div>
                {similarProfiles.map((obj) => (
                  <div className="d-flex gap-2 border-bottom p-2" key={obj._id}>
                    <div>
                      <Image
                        roundedCircle
                        className="img-side "
                        src={obj.image}
                      />
                    </div>
                    <div className="flex-grow-1 text-start">
                      <h5 className="m-0">
                        {obj.name} {obj.surname}
                      </h5>
                      <p className="mb-2">{obj.title}</p>
                      <Button
                        className="mb-3 rounded-pill px-4 py-1"
                        variant="outline-secondary"
                        onClick={() => handleSeguiClick(obj._id)}
                      >
                        <i className="bi bi-plus"></i> Segui
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-center ">
            <Button
              onClick={handleShow}
              variant="transparent"
              className="m-0 w-100 fw-bold"
            >
              Mostra tutto
            </Button>
            <Modal id="sidebar-modal" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Persone che potresti conoscere</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {profili &&
                  randomProfiles.map((obj) => {
                    return (
                      <div
                        className="d-flex gap-2 border-bottom mb-2"
                        key={obj._id}
                      >
                        <div className="w-25">
                          <Image
                            roundedCircle
                            className="img-side w-100"
                            src={obj.image}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h5>
                            {obj.name}
                            {obj.surname}
                            <span></span>
                          </h5>
                          <p>{obj.title}</p>
                          <Button
                            className="mb-4 w-50 rounded-5"
                            variant="outline-secondary"
                            onClick={() => handleSeguiClick(obj._id)}
                          >
                            <i className="bi bi-plus"></i>
                            Segui
                          </Button>
                        </div>
                      </div>
                    );
                  })}
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}

      <div className=" border rounded-2 mb-2">
        <Image
          className="w-100 rounded-2"
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
        />
      </div>
    </>
  );
};

export default Sidebar;
