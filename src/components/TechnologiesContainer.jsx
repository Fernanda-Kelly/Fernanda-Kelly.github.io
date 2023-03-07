import React from 'react';

import "../styles/components/technologiescontainer.sass"

import {
    DiHtml5,
    DiCss3,
    DiGithub,
    DiJavascript,
    DiGit,
    DiAngularSimple,
    DiDatabase,
    DiDotnet,
    DiJava,
    DiJira,
    DiPython,
    DiReact
} from 'react-icons/di'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "javascript", name: "JavaScript", icon: <DiJavascript /> },
    { id: "react", name: "React JS", icon: <DiReact /> },
    { id: "angular", name: "Angular", icon: <DiAngularSimple /> },

    { id: "dotnet", name: ".NET", icon: <DiDotnet /> },
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "python", name: "Python", icon: <DiPython /> },
    { id: "sql", name: "SQL", icon: <DiDatabase /> },

    { id: "git", name: "Git", icon: <DiGit /> },
    { id: "github", name: "GitHub", icon: <DiGithub /> },
    { id: "jira", name: "Jira", icon: <DiJira /> }
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