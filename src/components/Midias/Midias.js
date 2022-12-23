import React from 'react';

import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';



function Midias() {
    const repos = [
    {
        url: 'https://www.linkedin.com/in/giovana-do-nascimento/overlay/1635495432432/single-media-viewer/',
        name: 'Palestra - TDC 2022',
        description: 'Palestra no TDC Innovation 2022 onde falei sobre: Próxima Parada: Testes de Integração com API REST e JEST        ',
        image: 'https://user-images.githubusercontent.com/34607779/209274289-b40772e6-7e08-4de0-8622-56cb2bb74a99.jpeg'
    },
    {
        url: 'https://www.linkedin.com/in/giovana-do-nascimento/overlay/1635495434278/single-media-viewer/',
        name: 'Profissões tecnológicas dão oportunidades para PcDs',
        description: 'Entrevista onde falei sobre carreira para PCD na área de Tecnologia. Para mim a tecnologia tem tudo para se tornar umas das áreas mais inclusivas e acessíveis para pessoas que possuem deficiência.E espero que eu consiga inspirar para que outras pessoas possam entrar nessa área tão incrível.',
        image: 'https://user-images.githubusercontent.com/34607779/209274284-d5dab65d-4eb5-4435-bb63-f93570807642.jpeg'
    },
    {
        url: 'https://www.linkedin.com/in/giovana-do-nascimento/overlay/1635495433329/single-media-viewer/',
        name: 'Mulheres usam tecnologia como ferramenta para igualdade',
        description: 'Entrevista onde Falei sobre como foi ingressar na IBM e ser mulher na área de T.I',
        image: 'https://user-images.githubusercontent.com/34607779/209274282-38f00223-f646-41da-8b86-4e96899c2b7c.jpeg'
    },
    {
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:6936018465635872768/',
        name: 'Fotos I AM IBM',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/209274280-4eea1892-fe1c-4d08-b124-a191e71fe625.jpeg'
    },
    {
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:6782703644795006976/',
        name: 'Reportagem Estadão',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/209274275-60f11fc0-33c1-4548-9b3f-21a445d17c4e.jpeg'
    },
     {
        url: 'https://www.linkedin.com/in/giovana-do-nascimento/details/featured/1576767642434/single-media-viewer/?profileId=ACoAACUrQiQBusIUpvD5kv6ZwdEk6FX7MPWRVhs',
        name: 'Foto tirada para a Revista você RH ed 62 mês de jun/jul - Como criar empresas realmente diversas',
        description: '',
        image: 'https://user-images.githubusercontent.com/34607779/209274272-37ce1058-78ee-4aee-93d9-bd9d9e25da68.jpeg'
    }
]

  return (
    <Container id="midias" sm={4}>
    <h3>MIDIAS</h3>
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

export default Midias;
