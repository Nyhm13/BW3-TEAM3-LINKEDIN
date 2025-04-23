import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function StatiComponents() {
  return (
    <>
      {/* Consigliato per te */}
      <Card className="bg-white">
        <Card.Body>
          <Card.Title>Consigliato per te</Card.Title>
          <p className="fs-7">
            {" "}
            <i class="bi bi-eye-fill"></i> Solo per te
          </p>
          <div className="d-flex">
            <i class="bi bi-person-vcard fs-1 text-primary"> </i>
            <Card.Subtitle className="mb-2 text-muted m-3">
              {" "}
              Scrivi un riepilogo per mettere in evidenza la tua personalità o
              la tua esperienza lavorativa
            </Card.Subtitle>
          </div>
          <Card.Text className="fs-7">
            Gli utenti che includono un riepilogo ricevono fino a 3.9 volte più
            viusuliazzazioni del profilo.
          </Card.Text>
          <Button
            className="btn rounded-5 bg-white text-secondary border-secondary
        "
          >
            Aggiungi un riepilogo
          </Button>
        </Card.Body>
      </Card>

      {/* Analisi */}
      <Card className="bg-white mt-3">
        <Card.Body>
          <Card.Title>Analisi</Card.Title>
          <p className="fs-7">
            {" "}
            <i class="bi bi-eye-fill"></i> Solo per te
          </p>
          <section className="d-flex">
            <div className="d-flex flex-column me-5">
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <i class="bi bi-people-fill"> </i> 0 Visualizzazioni del profilo{" "}
              </Card.Subtitle>
              <p> Aggiorna il profilo per attrarre visitatori</p>
              <p> Crea un post per aumentare l'</p>
            </div>
            <div className="d-flex flex-column">
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <i class="bi bi-bar-chart-line-fill"> </i> 0 impressioni del
                post
              </Card.Subtitle>
              <p> Crea un post per aumentare l'interesse.</p>
              <p className="fs-7 text-secondary"> Ultimi 7 giorni</p>
            </div>
          </section>
          <section className="d-flex align-items-center justify-content-center border-top border-1 border-secondary">
            <Card.Link href="#" className="text-decoration-none text-dark mt-2">
              Mostra tutte le analisi{" "}
              <i class="bi bi-arrow-right text-dark"> </i>
            </Card.Link>
          </section>
        </Card.Body>
      </Card>

      {/* Attività */}
      <Card className="bg-white mt-3">
        <Card.Body>
          <section className="d-flex align-items-center justify-content-between">
            <Card.Title className="flex-grow-1">Attività</Card.Title>
            <Button className="btn rounded-5 bg-white text-primary flex">
              Crea un post
            </Button>
            <i class="bi bi-pencil text-dark fs-5 ms-3"></i>
          </section>

          <p className="fs-7 text-primary"> 1 follower</p>
          <div className="d-flex">
            <Card.Subtitle className="mb-2 text-muted">
              {" "}
              Non hai ancora pubblicato nulla{" "}
            </Card.Subtitle>
          </div>
          <Card.Text className="fs-7">
            I post che condividi appariranno qui
          </Card.Text>
          <section className="d-flex align-items-center justify-content-center border-top border-1 border-secondary">
            <Card.Link href="#" className="text-decoration-none text-dark mt-2">
              Mostra tutte le attività{" "}
              <i class="bi bi-arrow-right text-dark"> </i>
            </Card.Link>
          </section>
        </Card.Body>
      </Card>
    </>
  );
}

export default StatiComponents;
