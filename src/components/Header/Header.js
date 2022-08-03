import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Navbar.Brand href="#giovana">Giovana .N</Navbar.Brand>
          <Nav.Link href="#sobre">Sobre</Nav.Link>
          <Nav.Link href="#projetos">Projetos</Nav.Link>
          <Nav.Link href="#tecnologias">Tecnologias</Nav.Link>
          <Nav.Link href="#postagens">Postagens</Nav.Link>
          <Nav.Link href="#midias">Midias</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;