import styles from "./App.module.css"
import { Hero } from "./components/NavBar/Hero/Hero"
import { Navbar } from "./components/NavBar/Navbar"
function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
