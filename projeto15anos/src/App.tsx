import './App.css'
import DescriptionComponent from './components/Description/DescriptionComponent.tsx'
import LogoComponent from './components/Logo/LogoComponent.tsx'
import NavbarComponent from './components/Navbar/NavbarComponent.tsx'
import SobreComponent from './components/Sobre/SobreComponent.tsx'
import TimeComponent from './components/Time/TimeComponent.tsx'

function App() {
  return (
    <div className="app">
      <NavbarComponent />
      <LogoComponent />
      <TimeComponent />
      <SobreComponent />
      <DescriptionComponent />
    </div>
  )
}

export default App
