import React from 'react';
import Avatar from "../img/medio.jpg"

import "../styles/components/sidebar.sass"
import Curriculum from "../document/CV-FERNANDA-KELLY.pdf"

import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
    return (
        <aside id='sidebar'>

            <img src={Avatar} alt="Perfil" />

            <p className='title'>Engenheira de Software</p>

            <SocialNetworks></SocialNetworks>

            <InformationContainer></InformationContainer>

            <a href={Curriculum} download="CV-FERNANDA-KELLY" className='btn'>Download Currículo</a>
        </aside>
    );
};

export default Sidebar;