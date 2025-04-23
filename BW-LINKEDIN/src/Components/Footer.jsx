import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
// {const tokenGiulia = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3ZTk1MTk1ODc4ZjAwMTVmNGExYjMiLCJpYXQiOjE3NDUzNDg5NDUsImV4cCI6MTc0NjU1ODU0NX0.TCYZONnIEg4lACAQEL-d-N21RUq8GXegfZ7a6SO315o'}
const Footer = function () {
  return (
    <div className="bg-secondary-subtle text-dark py-4 mt-5">
      <Container>
        <Row>
          {/* Colonna 1 */}
          <Col xs={6} md={2} className="small">
            <h6 className="text-primary">Informazioni</h6>
            <ul className="list-unstyled">
              <li>Informativa sulla community professionale</li>
              <li>
                Privacy e condizioni{" "}
                <i className="bi bi-caret-down-fill text-secondary fs-6"></i>
              </li>
              <li>Sales Solutions</li>
              <li>Centro sicurezza</li>
            </ul>
          </Col>

          {/* Colonna 2 */}
          <Col xs={6} md={2} className="small">
            <ul className="list-unstyled">
              <li>Accessibilità</li>
              <li>Carriera</li>
              <li>Opzioni per gli annunci pubblicitari</li>
              <li>Mobile</li>
            </ul>
          </Col>

          {/* Colonna 3 */}
          <Col xs={6} md={2} className="small">
            <ul className="list-unstyled">
              <li>Talent Solutions</li>
              <li>Soluzioni di marketing</li>
              <li>Pubblicità</li>
              <li>Piccole imprese</li>
            </ul>
          </Col>

          {/* Colonna 4 */}
          <Col xs={6} md={3} className="small">
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>
                  <i className="bi bi-question-circle-fill text-secondary"></i>{" "}
                  Domande?
                </strong>
                <br />
                <span className="text-muted">
                  Visita il nostro Centro assistenza
                </span>
              </li>
              <li className="mb-3">
                <strong>
                  <i className="bi bi-gear-fill text-secondary"></i> Gestisci il
                  tuo account e la tua privacy
                </strong>
                <br />
                <span className="text-muted">Vai alle impostazioni</span>
              </li>
              <li className="mb-3">
                <strong>
                  <i className="bi bi-shield-shaded text-secondary"></i>{" "}
                  Trasparenza sui contenuti consigliati
                </strong>
                <br />
                <span className="text-muted">
                  Scopri di più sui contenuti consigliati
                </span>
              </li>
            </ul>
          </Col>

          {/* Colonna 5 */}
          <Col xs={12} md={3} className="small">
            <label htmlFor="language-select" className="me-2 fw-bold">
              Seleziona lingua
            </label>
            <DropdownButton
              id="language-select"
              title="Italiano (Italiano)"
              variant="outline-secondary"
              size="sm"
            >
              <Dropdown.Item>English (English)</Dropdown.Item>
              <Dropdown.Item>Español (Español)</Dropdown.Item>
              <Dropdown.Item>Français (Français)</Dropdown.Item>
              <Dropdown.Item>Deutsch (Deutsch)</Dropdown.Item>
            </DropdownButton>
          </Col>
          <p className="mt-3 text-muted">LinkedIn Corporation © 2025</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
