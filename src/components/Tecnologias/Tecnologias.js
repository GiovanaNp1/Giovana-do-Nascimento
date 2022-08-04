import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function Tecnologias() {
  const  buttons = [
    {
        name: "Javascript",
        color: "#FBFE77",
        icon: "https://simpleicons.org/icons/javascript.svg",
    },
    {
        name: "Typescript",
        color: "#5EB1FF",
        icon: "https://simpleicons.org/icons/typescript.svg",     
    },
    {
        name: "HTML",
        color: "#FFA553",
        icon: "https://simpleicons.org/icons/html5.svg",
    },
    {
        name: "Java",
        color: "#FF7A7A",
        icon: "https://cdn-icons-png.flaticon.com/512/154/154878.png",     
    },
    {
        name: "Git",
        color: "#9990FF",
        icon: "https://simpleicons.org/icons/git.svg",
    },
    {
        name: "CSS",
        color: "#F29999",
        icon: "https://simpleicons.org/icons/git.svg",     
    },
    {
        name: "NodeJs",
        color: "#94F69E",
        icon: "https://simpleicons.org/icons/nodedotjs.svg",
    },
    {
        name: "React",
        color: "#9CF9FF",
        icon: "https://simpleicons.org/icons/nodedotjs.svg",     
    },
    {
        name: "Angular",
        color: "#EA667E",
        icon: "https://simpleicons.org/icons/angular.svg",     
    },
    {
        name: "Jest",
        color: "#DCDCDC",
        icon: "https://simpleicons.org/icons/jest.svg",     
    },
    {
        name: "Python",
        color: "#5EB1FF",
        icon: "https://simpleicons.org/icons/python.svg",     
    },
    {
        name: "Ionic",
        color: "#5EB1FF",
        icon: "https://simpleicons.org/icons/ionic.svg",
    },
    {
        name: "Elastic",
        color: "#F29999",
        icon: "https://simpleicons.org/icons/elastic.svg",     
    },
    {
        name: "VueJs",
        color: "#94F69E",
        icon: "https://simpleicons.org/icons/vuedotjs.svg",     
    },
    {
        name: "NoSQL",
        color: "#FBFE77",
        icon: "https://simpleicons.org/icons/mongodb.svg",     
    },
    {
        name: "IBM CLoud",
        color: "#5EB1FF",
        icon: "https://simpleicons.org/icons/ibm.svg",     
    },
    {
        name: "SQL",
        color: "#FFA553",
        icon: "https://cdn-icons-png.flaticon.com/512/29/29594.png",     
    },
    {
        name: "Terminal",
        color: "#FF7A7A",
        icon: "https://simpleicons.org/icons/windowsterminal.svg",     
    },
  ]

  return (
    <Container className="tecnologias" id="tecnologias">
        <Row className="d-flex justify-content-around">
            <Col sm={6} className="d-flex justify-content-center flex-column">
                <h3>TECNOLOGIAS</h3>
            </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[0].color}}>
                    <img src={buttons[0].icon} alt="Logo" />
                    {buttons[0].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[1].color}}>
                    <img src={buttons[1].icon} alt="Logo" />
                    {buttons[1].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">    
                <Button size="lg" style={{backgroundColor: buttons[2].color}}>
                    <img src={buttons[2].icon} alt="Logo" />
                    {buttons[2].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[3].color}}>
                    <img src={buttons[3].icon} alt="Logo" />
                    {buttons[3].name}
                </Button>
            </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[4].color}}>
                    <img src={buttons[4].icon} alt="Logo" />
                    {buttons[4].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[5].color}}>
                    <img src={buttons[5].icon} alt="Logo" />
                    {buttons[5].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[6].color}}>
                    <img src={buttons[6].icon} alt="Logo" />
                    {buttons[6].name}
                </Button>
            </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[7].color}}>
                    <img src={buttons[7].icon} alt="Logo" />
                    {buttons[7].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[8].color}}>
                    <img src={buttons[8].icon} alt="Logo" />
                    {buttons[8].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[9].color}}>
                    <img src={buttons[9].icon} alt="Logo" />
                    {buttons[9].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[10].color}}>
                    <img src={buttons[10].icon} alt="Logo" />
                    {buttons[10].name}
                </Button>
            </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[11].color}}>
                    <img src={buttons[11].icon} alt="Logo" />
                    {buttons[11].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[12].color}}>
                    <img src={buttons[12].icon} alt="Logo" />
                    {buttons[12].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[13].color}}>
                    <img src={buttons[13].icon} alt="Logo" />    
                    {buttons[13].name}
                </Button>          
                </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[14].color}}>
                    <img src={buttons[14].icon} alt="Logo" />
                    {buttons[14].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[15].color}}>
                    <img src={buttons[15].icon} alt="Logo" />
                    {buttons[15].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[16].color}}>
                    <img src={buttons[16].icon} alt="Logo" />
                    {buttons[16].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[17].color}}>
                    <img src={buttons[17].icon} alt="Logo" />
                    {buttons[17].name}
                </Button>
            </Col>
        </Row>
    </Container>
  );
}

export default Tecnologias;