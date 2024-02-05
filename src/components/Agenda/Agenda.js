import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from '../../utils/image/foto2.png'


function Agenda() {
  const [reposAll, setReposAll] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/repos/GiovanaNp1/Giovana-do-Nascimento/issues')
        .then(response => response.json())
        .then(data => {
          const arrObj = []
          data.map((value => { 
            let link;
            let data;
            if(value.body){
                link = value.body.split(',')[0];
                data = value.body.split(',')[1];
            }
            if(value.labels.length > 0){
               return arrObj.push({
                    'name': value.title,
                    'link': link,
                    'data': data,
                    'colorTag': value.labels[0].description,
                    'tipo': value.labels[0].name
                })
            } else {
              return arrObj.push({
                    'name': value.title,
                    'link': link,
                    'data': data,
                    'colorTag': "5EB1FF",
                    'tipo': "Evento"
                    })
                } 
            }
          ))
          setReposAll(arrObj)
        })
  }, [])

  return (
    <Container id="sobre">
      <Row className="d-flex justify-content-around">
        <Col sm={6} className="photo-principal d-flex justify-content-center flex-column">
            <h3>AGENDA</h3>
            <ul>
            {reposAll.map((item) => {
              return(
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <li><a href={item.link}><span className={item.colorTag}>{item.tipo}</span> {item.name} - <b>{item.data}</b></a></li>
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
