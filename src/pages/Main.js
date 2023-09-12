import React from 'react';
import Principal from '../components/Principal';
import Projetos from '../components/Projetos';
import Sobre from '../components/Sobre';
import Tecnologias from '../components/Tecnologias';
import Midias from '../components/Midias';
import Contato from '../components/Contato/Contato';
import Agenda from '../components/Agenda/Agenda';
  
const Main = () => {
    return (
      <>
        <Principal />
        <Sobre />
        <Agenda />
        <Projetos />
        <Tecnologias />
        <Midias />
        <Contato />
      </>
    );
  };
  
export default Main;