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
            <h1>CONTATO</h1>
            <a href="https://www.linkedin.com/in/giovana-do-nascimento/" ><img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536569.png?token=exp=1659488426~hmac=1b8636d62ce5c10ccd1812a4fb372fb3' alt="Linkedin" />https://www.linkedin.com/in/giovana-do-nascimento/</a>
            <a href="https://www.instagram.com/giovananp/"><img src='https://cdn-icons-png.flaticon.com/512/1077/1077042.png' alt="Instagram" />@giovananp</a>
            <a href="mailto:giovana.np1@gmail.com"><img src='https://cdn-icons-png.flaticon.com/512/561/561127.png' alt="Email" />giovana.np1@gmail.com</a>

        </Col>
      </Row>
    </Container>
  );
}

export default Contato;