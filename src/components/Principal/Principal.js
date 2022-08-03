import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from '../../utils/image/foto.jpg'

function Principal() {
  return (
    <Container className="principal" id="principal">
      <Row className="d-flex justify-content-around">
        <Col sm={6} className="d-flex justify-content-center flex-column">
            <h1>GIOVANA DO NASCIMENTO PENA</h1>
            <h2>FULLSTACK DEVELOPER</h2>
        </Col>
        <Col sm={6}className="photo-principal d-flex justify-content-around">
            <img src={photo} alt="Logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default Principal;