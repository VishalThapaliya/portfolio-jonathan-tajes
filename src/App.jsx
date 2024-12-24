/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

/**
 * Components
 */
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
    </>
  )
}

export default App