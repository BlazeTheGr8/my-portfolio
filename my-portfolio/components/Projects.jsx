import "../src/assets/first.png"

const projectsData = [
  {
    id: 1,
    title: 'Digital Resume',
    description: 'This digital resume was my first web related project and makes use of HTML and CSS',
    imageUrl: '../src/assets/first.png', // Replace with the image path for your project
    projectUrl: 'https://superb-granita-20b81a.netlify.app/', // Replace with the URL of your project
  },
  {
    id: 2,
    title: 'Rick and Morty Quiz App',
    description: 'A quiz app to test your knowledge of Rick and Morty. Built with React and Redux.',
    imageUrl: '../src/assets/second.png', // Replace with the image path for your project
    projectUrl: 'https://heroic-starship-5a6556.netlify.app/', // Replace with the URL of your project
  },
  // Add more project data here
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