import React from 'react';
import Avatar from "../img/perfil.jpg"

import "../styles/components/sidebar.sass"
import Curriculum from "../document/CV_-_Fernanda_Kelly_Souza_de_Lima_-_Engenheira_de_Software.pdf"

import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
    return (
        <aside id='sidebar'>

            <img src={Avatar} alt="Perfil" />

            <p className='title'>Engenheira de Software</p>

            <SocialNetworks></SocialNetworks>

            <InformationContainer></InformationContainer>

            <a href={Curriculum} download="CV_-_Fernanda_Kelly_Souza_de_Lima_-_Engenheira_de_Software" className='btn'>Download Currículo</a>
        </aside>
    );
};

export default Sidebar;