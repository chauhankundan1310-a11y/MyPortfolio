// All portfolio content lives here — edit this file to personalize your site.

export const profile = {
  name: 'Kundan Chauhan',
  role: 'Frontend Developer',
  tagline:
    'I turn creative ideas into beautiful, responsive and user-friendly websites.',
  bio: 'I am a Frontend Developer passionate about crafting modern, responsive and user-friendly web applications. I enjoy turning ideas into clean, interactive experiences using HTML, CSS, JavaScript and modern frameworks like React and Bootstrap. I am constantly learning new technologies and focused on writing maintainable, high-quality code.',
  email: 'kundanchauhan.dev@gmail.com',
  location: 'India',
  github: 'https://github.com/kundanchauhan',
  linkedin: 'https://linkedin.com/in/kundanchauhan',
}

export const skills = [
  { name: 'HTML5', icon: 'Code2' },
  { name: 'CSS3', icon: 'Palette' },
  { name: 'JavaScript', icon: 'Braces' },
  { name: 'React.js', icon: 'Atom' },
  { name: 'Bootstrap', icon: 'LayoutGrid' },
  { name: 'Git & GitHub', icon: 'GitBranch' },
]

export const projects = [
  {
    title: 'ChaleChalo',
    description:
      'A responsive travel booking website built using Bootstrap, featuring destination listings, booking forms and a mobile-friendly layout.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    live: 'https://chalochaletravel.vercel.app/',
    github: '#',
    accent: 'linear-gradient(135deg, #22d3ee, #2563eb)',
  },
  {
    title: 'ShopKart',
    description:
      'An online shopping website inspired by Flipkart, where users can browse products, filter categories and explore detailed product pages.',
    tech: ['React', 'Bootstrap', 'JavaScript'],
    live: 'https://shop-kart-inky.vercel.app/',
    github: '#',
    accent: 'linear-gradient(135deg, #e879f9, #9333ea)',
  },
  {
    title: 'RouteFlow',
    description:
      'A courier delivery route planning application designed to organize delivery addresses and assign vehicles efficiently.',
    tech: ['React', 'JavaScript', 'CSS'],
    live: '#',
    github: '#',
    accent: 'linear-gradient(135deg, #a78bfa, #4f46e5)',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
