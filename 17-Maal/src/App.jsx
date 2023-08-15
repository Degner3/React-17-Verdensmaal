import './App.css'
import { Delmaalene } from './components/Delmaalene/Delmaalene'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Kontakt } from './components/Kontakt/Kontakt'
import { Nav } from './components/Nav/Nav'
import { Udfordringer } from './components/Udfordringer/Udfordringer'
import { Verdensmaal } from './components/Verdensmaal/Verdensmaal'

function App() {

  return (
    <>
      <Header/>
      <Nav/>
      <Verdensmaal/>
      <Delmaalene/>
      <Udfordringer/>
      <Kontakt/>
      <Footer/>
    </>
  )
}

export default App
