import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const FormLogin = () => {
  return (
    <Col lg="6" className="m-auto">
      <Row className="my-5">
        <Col sm="10" xl="8" className="m-auto">
          <h1 className="fs-2 mb-4">Login Kampus Gratis!</h1>
          <Form>
            <Form.Group className="mb-4" controlId="Email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                className="border-0 bg-light rounded-end ps-1"
                placeholder="Masukkan Alamat Email"
                size="lg"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className="border-0 bg-light rounded-end ps-1"
                placeholder="Masukkan Password"
                size="lg"
              />
            </Form.Group>

            <div className="mb-4 d-flex justify-content-between mb-4">
              <Form.Check></Form.Check>
              <div className="text-primary-hover">
                <a href=" " className="text-secondary">
                  <u>Lupa password?</u>
                </a>
              </div>
            </div>

            <div className="align-items-center mt-0">
              <div className="d-grid">
                <Button variant="primary" className="mb-0">
                  Login
                </Button>
              </div>
            </div>
          </Form>

          <Row>
            <Col className="position-relative my-4">
              <hr />
              <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                Atau
              </p>
            </Col>

            <Col xxl="12" className="d-grid">
              <Button className="bg-google mb-2 mb-xxl-0">
                <i className="fab fa-fw fa-google text-white me-2"></i>
                Login dengan Google
              </Button>
            </Col>
          </Row>

          <Row className="mt-4 text-center">
            <span>Tidak punya akun? <Link to={"/registration"}> Daftar</Link> </span>
            
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default FormLogin;
