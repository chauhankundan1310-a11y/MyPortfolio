import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Reveal><Hero /></Reveal>
      <main>
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
