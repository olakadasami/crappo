import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Why from "./components/Why"

function App() {

  return (
    <div className='bg-primary text-white'>
      <Nav />
      <Header />
      <Why />
      <Features />
      <Footer />

    </div>
  )
}

export default App
