import React from 'react';

import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-bootstrap';



function Midias() {
    const repos = [
    {
        url: 'https://www.linkedin.com/in/giovana-do-nascimento/overlay/1635495432432/single-media-viewer/',
        name: 'Palestra - TDC 2022',
        description: 'Palestra no TDC Innovation 2022 onde falei sobre: Próxima Parada: Testes de Integração com API REST e JEST        ',
        image: 'https://media-exp1.licdn.com/dms/image/C4D2DAQH2c-1qK-_rsw/profile-treasury-image-shrink_800_800/0/1656463192757?e=1660082400&v=beta&t=asXrIkKRgJ744JPFS3Hy_VgSy9XdJGYTwIkwCOuPJFU'
    },
    {
        url: 'https://www.linkedin.com/in/giovana-do-nascimento/overlay/1635495434278/single-media-viewer/',
        name: 'Profissões tecnológicas dão oportunidades para PcDs',
        description: 'Entrevista onde falei sobre carreira para PCD na área de Tecnologia. Para mim a tecnologia tem tudo para se tornar umas das áreas mais inclusivas e acessíveis para pessoas que possuem deficiência.E espero que eu consiga inspirar para que outras pessoas possam entrar nessa área tão incrível.',
        image: 'https://media-exp1.licdn.com/dms/image/C4D2DAQGGdZSDvxyNMg/profile-treasury-image-shrink_800_800/0/1656463151289?e=1660082400&v=beta&t=1Vgh3hXm_vNY79Nos7KYzxeukhPnkArfoIENIrA4Ut0'
    },
    {
        url: 'https://www.linkedin.com/in/giovana-do-nascimento/overlay/1635495433329/single-media-viewer/',
        name: 'Mulheres usam tecnologia como ferramenta para igualdade',
        description: 'Entrevista onde Falei sobre como foi ingressar na IBM e ser mulher na área de T.I',
        image: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQHFqqNXoJQuwQ/articleshare-shrink_800/0/1658883828044?e=1660082400&v=beta&t=hgVRILfyoGFPl8-Ucae2FXF-rUa8InjSAgZ6pdpNAow'
    },
    {
        url: 'https://media-exp1.licdn.com/dms/image/C4D22AQG_NaqLxZ_lCg/feedshare-shrink_800/0/1653674532005?e=1662595200&v=beta&t=BIS1ceoSQvzR4rqF5Ll3JKOJY0haKJNzluPFgPoHiEA',
        name: 'Fotos I AM IBM',
        description: '',
        image: 'https://media-exp1.licdn.com/dms/image/C4D22AQG_NaqLxZ_lCg/feedshare-shrink_800/0/1653674532005?e=1662595200&v=beta&t=BIS1ceoSQvzR4rqF5Ll3JKOJY0haKJNzluPFgPoHiEA'
    },
    {
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:6782703644795006976/',
        name: 'Reportagem Estadão',
        description: '',
        image: 'https://media-exp1.licdn.com/dms/image/C4D22AQEqn-NJ8qRjhg/feedshare-shrink_800/0/1617122564217?e=1662595200&v=beta&t=-aJSSpbDnPbqcsr3pXpTlUDnBJO0A688BUwNSiFJ2iM'
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