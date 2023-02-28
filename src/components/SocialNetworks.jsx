import React from 'react';
import "../styles/components/socialnetworks.sass"

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const socialNetworks = [
    { link: "https://www.linkedin.com/in/fernanda-kelly-b62373216/", name: "linkedin", icon: <FaLinkedin /> },
    { link: "https://github.com/Fernanda-Kelly", name: "github", icon: <FaGithub /> },
    { link: "https://www.instagram.com/fer_kslima/", name: "instagram", icon: <FaInstagram /> }
];

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.link} target={'_blank'} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks;