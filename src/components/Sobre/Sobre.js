import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sobre() {
  return (
    <Container id="sobre">
      <Row className="d-flex justify-content-around">
        <Col sm={6} className="photo-sobre d-flex justify-content-around ai-center">
            <img src="https://res.cloudinary.com/dzxyrvvbu/image/upload/v1756098944/IMG_7748_trg4nr.jpg" alt="Logo" />
        </Col>
        <Col sm={6} className="photo-principal d-flex justify-content-center flex-column">
            <h3>SOBRE</h3>
            <p>
            Oi, eu sou a Giovana. Engenheira de Software com experiência em desenvolvimento fullstack, integração de sistemas e práticas de DevOps e Observabilidade. Trabalho diariamente para construir aplicações escaláveis e com qualidade, sempre com foco em performance, segurança e experiência do usuário.
            <br /><br />
            Tenho paixão por comunidades de tecnologia e atuo como organizer do Elastic São Paulo e DevOpsDays, além de já ter palestrado em eventos nacionais e internacionais.
            <br /><br />
            Sou formada em Análise e Desenvolvimento de Sistemas e acredito que tecnologia vai além do código: é sobre criar soluções que impactem pessoas de forma positiva e sustentável.
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Sobre;