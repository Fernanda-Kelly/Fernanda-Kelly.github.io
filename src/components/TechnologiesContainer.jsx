import React from 'react';

import "../styles/components/technologiescontainer.sass"

import {
    DiHtml5,
    DiCss3,
    DiGithub,
    DiJavascript,
    DiGit
} from 'react-icons/di'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "git", name: "Git", icon: <DiGit /> },
    { id: "github", name: "GitHub", icon: <DiGithub /> },
    { id: "javascript", name: "JavaScript", icon: <DiJavascript /> }
];

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2>Tecnologias</h2>

            <div className='technologies-grid'>
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p><hr /></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;