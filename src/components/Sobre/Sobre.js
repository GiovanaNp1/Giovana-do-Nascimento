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
            Olá! Me chamo Giovana do Nascimento Pena, é um prazer poder compartilhar minha trajetória com você! Sou Application Developer numa empresa global de tecnologia e inovação, conhecida como IBM.<br /><br />
            O meu  trabalho consiste em desenvolvimento de Sistemas Web. Atuo também na comunidade técnica interna da IBM e participo de tarefas de implantação de acessibilidade nas aplicações. <br /><br />
            Sou formada em Análise e Desenvolvimento de Sistemas na Universidade UNASP. Participo também do Instituto Meninas Negras, além de palestrar e coordenar diversos eventos como TLC e TDC.<br /><br />
            O meu maior objetivo nessa área é poder impactar e ensinar outras pessoas que buscam conhecer mais sobre tecnologia para entrar ativamente no mercado.<br />
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Sobre;