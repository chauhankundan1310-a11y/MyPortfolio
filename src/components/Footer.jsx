import { profile } from '../data'
import { Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p className="footer-sub">
        Built with <Heart size={12} className="footer-heart" /> React & Bootstrap
      </p>
    </footer>
  )
}

export default Footer
