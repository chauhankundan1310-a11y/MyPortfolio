import { profile } from '../data'
import TypedRole from './TypedRole'
import heroImg from '../assets/protfolio-hero.png'

const techTiles = ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git']

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        {techTiles.map((tile, i) => (
          <span key={tile} className={`tech-tile tile-${(i % 6) + 1}`}>
            {tile}
          </span>
        ))}
      </div>
      <div className="container hero-inner">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <span className="hero-badge">Available for opportunities</span>
            <p className="hero-greeting">Hi, I'm</p>
            <h1>{profile.name}</h1>
            <TypedRole text={profile.role} />
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual">
              <img src={heroImg} alt="Coding workspace" />
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span></span>
      </a>
    </header>
  )
}

export default Hero
