import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/NavBar/Navbar"
import { Projects } from "./components/Projetcs/Projects"

function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
