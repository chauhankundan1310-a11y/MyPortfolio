import { Code2, Palette, Braces, Atom, LayoutGrid, GitBranch } from 'lucide-react'
import { skills } from '../data'
import skillImg from '../assets/protfolio-skill.png'

const iconMap = {
  Code2,
  Palette,
  Braces,
  Atom,
  LayoutGrid,
  GitBranch,
}

function Skills() {
  return (
    <section
      id="skills"
      className="section section-image"
      style={{ backgroundImage: `url(${skillImg})` }}
    >
      <div className="container">
        <h2 className="text-center">My Skills</h2>
        <p className="skills-subtitle text-center">
          Technologies I work with
        </p>
        <div className="row g-4 justify-content-center">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon]
            return (
              <div className="col-6 col-md-4 col-lg-2" key={skill.name}>
                <div className="skill-card">
                  <div className="skill-icon">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>
                  <span>{skill.name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
