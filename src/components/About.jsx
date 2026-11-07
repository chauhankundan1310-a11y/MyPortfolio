import { profile } from '../data'
import aboutImg from '../assets/protfolio-about.png'

function About() {
  return (
    <section id="about" className="section section-about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="about-visual">
              <img src={aboutImg} alt="About Kundan Chauhan" />
            </div>
          </div>
          <div className="col-lg-7">
            <h2>About Me</h2>
            <div className="section-body">
              <p>{profile.bio}</p>
              <p>
                I'm always interested in creating modern and responsive web
                applications that deliver a great user experience. Currently
                based in {profile.location}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
