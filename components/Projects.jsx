import React from "react";
import "../src/assets/first.png"

const projectsData = [
  {
    id: 1,
    title: "Digital Resume",
    description:
      "This digital resume was my first web related project and makes use of HTML and CSS",
    imageUrl:
      "https://github.com/BlazeTheGr8/my-portfolio/blob/main/src/assets/first.png?raw=true",
    projectUrl: "https://superb-granita-20b81a.netlify.app/",
  },
  {
    id: 2,
    title: "Book Connect App",
    description:
      "A book website where users can search for and view books by author, title and genre.",
    imageUrl:
      "https://github.com/BlazeTheGr8/my-portfolio/blob/main/src/assets/second.png?raw=true",
    projectUrl: "https://heroic-starship-5a6556.netlify.app/",
  },
  {
    id: 3,
    title: "PodCastle",
    description: "A Podcast app",
    imageUrl:
      "https://github.com/BlazeTheGr8/image-repo/blob/main/meta-pic.png?raw=true",
    projectUrl: "https://podcastle.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <a key={project.id} href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="project-card">
              <img src={project.imageUrl} alt={project.title} />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

