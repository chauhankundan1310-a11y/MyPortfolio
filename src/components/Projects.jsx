import { ExternalLink } from 'lucide-react'
import { projects } from '../data'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-center">My Projects</h2>
        <p className="section-subtitle text-center">
          Some of my recent work
        </p>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <article className="project-card">
                <div
                  className="project-thumb"
                  style={{ background: project.accent }}
                >
                  <span className="project-thumb-icon">{project.title[0]}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-tech">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-light"
                    >
                      <i className="bi bi-github" /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
