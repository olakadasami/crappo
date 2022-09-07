import Cards from "./components/Cards"
import Earn from "./components/Earn"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Subscribe from "./components/Subscribe"
import Why from "./components/Why"

function App() {

  return (
    <div className='bg-primary text-white'>
      <Nav />
      <Header />
      <Why />
      <Earn />
      <Cards />
      <Features />
      <Subscribe />
      <Footer />

    </div>
  )
}

export default App
