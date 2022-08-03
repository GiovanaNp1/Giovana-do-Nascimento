import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from '../../utils/image/imagem-sobre.jpg'

function Sobre() {
  return (
    <Container id="sobre">
      <Row className="d-flex justify-content-around">
        <Col sm={6} className="photo-sobre d-flex justify-content-around ai-center">
            <img src={photo} alt="Logo" />
        </Col>
        <Col sm={6} className="photo-principal d-flex justify-content-center flex-column">
            <h3>SOBRE</h3>
            <p>
                Giovana do Nascimento Pena é Application Developer na IBM 
                trabalhando em sistemas web e desenvolvimento de automações
                e testes de software, Formada de Analise e Desenvolvimento de
                Sistemas na Universidade UNASP, apaixonada por acessibilidade
                e usabilidade de usuários. Participante do instituto meninas
                negras e participante do TLC, comunidade tecnica interna na IBM,
                em seu tempo livre ela participa de vários eventos técnicos com
                objetivo de impactar e ensinar outras pessoas que buscam conhecer
                mais sobre tecnologia
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Sobre;