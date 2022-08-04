import React from 'react';

import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import photo from '../../utils/image/foto.jpg'


function Contato() {
  return (
    <Container className="contatos" id="contato">
      <Row className="d-flex justify-content-around">
        <Col sm={4}className="photo-contatos d-flex justify-content-around">
            <img src={photo} alt="Logo" />
        </Col>
        <Col sm={6} className="icon-contato d-flex justify-content-center flex-column">
            <h3>CONTATO</h3>
            <a href="https://www.linkedin.com/in/giovana-do-nascimento/" ><img src='https://cdn-icons-png.flaticon.com/512/254/254394.png' alt="Linkedin" />https://www.linkedin.com/in/giovana-do-nascimento/</a>
            <a href="https://www.instagram.com/giovananp/"><img src='https://cdn-icons-png.flaticon.com/512/1077/1077042.png' alt="Instagram" />@giovananp</a>
            <a href="mailto:giovana.np1@gmail.com"><img src='https://cdn-icons-png.flaticon.com/512/561/561127.png' alt="Email" />giovana.np1@gmail.com</a>

        </Col>
      </Row>
    </Container>
  );
}

export default Contato;