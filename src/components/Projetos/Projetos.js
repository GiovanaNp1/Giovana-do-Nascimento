import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';



function Projetos() {
    const [reposAll, setReposAll] = useState([])
    const repos = [
    {
        url: 'https://github.com/GiovanaNp1/SpringWebFlux_Pokemon',
        name: '',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/182270663-ed1d17ab-0cab-48dd-9178-3d2dc98f72ab.jpeg'
    },
    {
        url: 'https://github.com/GiovanaNp1/TDC-with-TDD',
        name: '',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/182388650-d2055066-53e9-444f-87e5-b6d0aa22c538.png'
    },
    {
        url: 'https://github.com/GiovanaNp1/Instagram_DIO',
        name: '',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/95764536-f9bd0f00-0c86-11eb-9c51-05fb24526223.PNG'
    },
    {
        url: 'https://github.com/GiovanaNp1/AnimeFix',
        name: '',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/95793604-5c7ccd80-0cbc-11eb-8187-6e719e3f494f.PNG'
    },
    {
        url: 'https://github.com/GiovanaNp1/Snake-game',
        name: '',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/182388935-c1138f3a-9e6f-4122-a472-97ac39402882.png'
    },
    {
        url: 'https://github.com/GiovanaNp1/Alexa-chatbot-hero',
        name: '',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/182390953-3db511f8-bb6f-44af-bbc8-b0e63bcb1094.png'
    },
]

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

        console.log(repos)

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