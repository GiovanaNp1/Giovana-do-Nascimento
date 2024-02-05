import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';
import  repos  from './projetos.json';



function Projetos() {
    const [reposAll, setReposAll] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/GiovanaNp1/repos?per_page=100')
            .then(response => response.json())
            .then(data => setReposAll(data))
    }, [])


        if(repos.length > 0){
            reposAll.map((array_el) => {
                // eslint-disable-next-line
                repos.map((anotherOne_el) => {
                    if(anotherOne_el.url === array_el.html_url) {
                        anotherOne_el.name = array_el.name;
                        anotherOne_el.description = array_el.description;
                    }
                });
                return repos
            });
        }


  return (
    <Container className="projetos" id="projetos" sm={4}>
    <h3>PROJETOS</h3>
        <Carousel variant="dark">
        { 
            repos.map((car) => {
                return(
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car.image}
                        alt="First slide"
                        onClick={() => {
                            window.open(car.url);
                        }}
                    />
                    <Carousel.Caption className="carrousel-text">
                        <h3>{car.name}</h3>
                        <p>{car.description}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
      </Carousel>

  </Container>
  );
}

export default Projetos;