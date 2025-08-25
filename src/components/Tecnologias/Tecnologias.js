/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import buttons from './tecnologias.json'

function Tecnologias() {

  const [buttonSelect, setButtonSelect] = useState({
    name: "",
    color: "",
    icon: "",
    projects: []
  })

  function OpenNav(item) {
    console.log(document.getElementById("tecnologias"))
    document.getElementById("myNav").style.width = "100%";
    document.getElementsByClassName("overlay")[0].style.backgroundColor = item.color
    // const itemTech = [];
    setButtonSelect(item)
  }

  return (    
    <>
    <div id="myNav" class="overlay">
        <a href="#tecnologias" class="closebtn" onClick={() => {document.getElementById("myNav").style.width = "0%";}}>x</a>
        <div class="overlay-content">
            <div>
                <p>{buttonSelect.name}</p>
                <p>{buttonSelect.projects}</p>
            </div>
            <div>
                 <img src={buttonSelect.icon} alt="Logo" />
            </div>
        </div>
    </div>
    <Container className="tecnologias" id="tecnologias">
        <Row className="d-flex justify-content-around">
        <Col sm={6} className="d-flex justify-content-center flex-column">
                <h3>TECNOLOGIAS</h3>
            </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[0].color}} onClick={() => {OpenNav(buttons[0])}}>
                    <img src={buttons[0].icon} alt="Logo" />
                    {buttons[0].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[1].color}} onClick={() => {OpenNav(buttons[1])}}>
                    <img src={buttons[1].icon} alt="Logo" />
                    {buttons[1].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">    
                <Button size="lg" style={{backgroundColor: buttons[2].color}} onClick={() => {OpenNav(buttons[2])}}>
                    <img src={buttons[2].icon} alt="Logo" />
                    {buttons[2].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[3].color}} onClick={() => {OpenNav(buttons[3])}}>
                    <img src={buttons[3].icon} alt="Logo" />
                    {buttons[3].name}
                </Button>
            </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[4].color}} onClick={() => {OpenNav(buttons[4])}}>
                    <img src={buttons[4].icon} alt="Logo" />
                    {buttons[4].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[5].color}} onClick={() => {OpenNav(buttons[5])}}>
                    <img src={buttons[5].icon} alt="Logo" />
                    {buttons[5].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[6].color}} onClick={() => {OpenNav(buttons[6])}}>
                    <img src={buttons[6].icon} alt="Logo" />
                    {buttons[6].name}
                </Button>
            </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[7].color}} onClick={() => {OpenNav(buttons[7])}}>
                    <img src={buttons[7].icon} alt="Logo" />
                    {buttons[7].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[8].color}} onClick={() => {OpenNav(buttons[8])}}>
                    <img src={buttons[8].icon} alt="Logo" />
                    {buttons[8].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[9].color}} onClick={() => {OpenNav(buttons[9])}}>
                    <img src={buttons[9].icon} alt="Logo" />
                    {buttons[9].name}
                </Button>
            </Col>
            <Col sm={2} className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[10].color}} onClick={() => {OpenNav(buttons[10])}}>
                    <img src={buttons[10].icon} alt="Logo" />
                    {buttons[10].name}
                </Button>
            </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[11].color}} onClick={() => {OpenNav(buttons[11])}}>
                    <img src={buttons[11].icon} alt="Logo" />
                    {buttons[11].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[12].color}} onClick={() => {OpenNav(buttons[12])}}>
                    <img src={buttons[12].icon} alt="Logo" />
                    {buttons[12].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[13].color}} onClick={() => {OpenNav(buttons[13])}}>
                    <img src={buttons[13].icon} alt="Logo" />    
                    {buttons[13].name}
                </Button>          
                </Col>
        </Row>
        <Row className="d-flex justify-content-around">
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[14].color}} onClick={() => {OpenNav(buttons[14])}}>
                    <img src={buttons[14].icon} alt="Logo" />
                    {buttons[14].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[15].color}} onClick={() => {OpenNav(buttons[15])}}>
                    <img src={buttons[15].icon} alt="Logo" />
                    {buttons[15].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[16].color}} onClick={() => {OpenNav(buttons[16])}}>
                    <img src={buttons[16].icon} alt="Logo" />
                    {buttons[16].name}
                </Button>
            </Col>
            <Col sm={2}className="d-flex justify-content-around">
                <Button size="lg" style={{backgroundColor: buttons[17].color}} onClick={() => {OpenNav(buttons[17])}}>
                    <img src={buttons[17].icon} alt="Logo" />
                    {buttons[17].name}
                </Button>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default Tecnologias;