import './App.css'
import Navbar from './components/navbar'
import Hero from "./components/hero"
import Prices from './components/prices'
import Artists from './components/artists'
import Footer from './components/footer'


function App() {

  return (
          <div className="relative z-0 bg-primary">
            <div className="lg:bg-hero-pattern lg:bg-cover lg:bg-no-repeat lg:bg-center overflow-x-hidden">
              <Navbar />
              <Hero />
              <Artists />
              <Prices />
              <Footer />
            </div>
          </div>
  )
}

export default App
