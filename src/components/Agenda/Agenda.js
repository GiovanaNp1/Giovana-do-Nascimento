import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from '../../utils/image/foto2.png'

const lista = [
  {
    name: 'Fiap Next',
    tipo: 'Jurada',
    colorTag: 'tag-verde',
    data: '17 de Setembro',
    link: 'https://www.fiap.com.br/'
  },
  {
    name: 'TDC Business São Paulo 2023 - Trilha Software Security - Ops!! E agora, como vou implementar DevSecOps no meu dia-a-dia?? ',
    tipo: 'Palestrante',
    colorTag: 'tag-blue',
    data: '21 de Setembro',
    link: 'https://thedevconf.com/tdc/2023/business/trilha-software-security'
  },
  {
    name: 'TDC Business São Paulo 2023 - Trilha DevOps e SRE - Painel',
    tipo: 'Painelista',
    colorTag: 'tag-orange',
    data: '20 de Setembro',
    link: 'https://thedevconf.com/tdc/2023/business/trilha-devops-e-sre'
  },
  {
    name: 'WomarkersCode Acessando possibilidades no mundo de Acessibilidade Web',
    tipo: 'Palestra',
    colorTag: 'tag-blue',
    data: '27 de Setembro',
    link: 'https://www.meetup.com/pt-BR/womakerscode/events/296100255/'
  },
  {
    name: 'Programaria  Mentoria - Agilidade',
    tipo: 'Mentoria',
    colorTag: 'tag-verde',
    data: '28 de Setembro',
    link: 'https://www.programaria.org/programaria-summit-2023/'
  },
  {
    name: 'Programaria  Mentoria - Transicao de carreira',
    tipo: 'Mentoria',
    colorTag: 'tag-verde',
    data: '28 de Setembro',
    link: 'https://www.programaria.org/programaria-summit-2023/'
  },
  {
    name: 'Programaria  Mentoria - Gestão de Carreiras Pleno e Sênior',
    tipo: 'Mentoria',
    colorTag: 'tag-verde',
    data: '28 de Setembro',
    link: 'https://www.meetup.com/pt-BR/gdg-sp/events/295871045/'
  },
  {
    name: 'A Definir',
    tipo: 'Palestrante',
    colorTag: 'tag-blue',
    data: '7 de Outubro',
    link: 'https://www.afroyatechconf.com.br/agenda'
  }
]

function Agenda() {
  return (
    <Container id="sobre">
      <Row className="d-flex justify-content-around">
        <Col sm={6} className="photo-principal d-flex justify-content-center flex-column">
            <h3>AGENDA</h3>
            <ul>
            {lista.map((item) => {
              return(
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <li><a href={item.link}><span className={item.colorTag}>{item.tipo}</span> {item.name} <b>{item.data}</b></a></li>
              )
            })}
            </ul>
        </Col>
        <Col sm={6} className="photo-sobre d-flex justify-content-around ai-center">
            <img src={photo} alt="Logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default Agenda;
