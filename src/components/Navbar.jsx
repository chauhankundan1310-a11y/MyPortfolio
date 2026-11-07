import { navLinks, profile } from '../data'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top" className="navbar-name">{profile.name}</a>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
