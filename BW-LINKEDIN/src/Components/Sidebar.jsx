import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Dropdown from "react-bootstrap/Dropdown";

const Sidebar = () => {
  return (
    <>
      <Col sm={12} lg={3}>
        <div className=" p-4 border border-1 rounded-3">
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
            <p>www.linkedin.com/in/ioan-octavian-radulescu-41a7ba253</p>
          </div>
        </div>
        <Card></Card>
      </Col>
    </>
  );
};

export default Sidebar;
