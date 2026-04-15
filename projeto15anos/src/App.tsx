import './App.css'
import DescriptionComponent from './components/Description/DescriptionComponent.tsx'
import LogoComponent from './components/Logo/LogoComponent.tsx'
import TimeComponent from './components/Time/TimeComponent.tsx'

function App() {
  return (
    <div className="app">
      <LogoComponent/>
      <TimeComponent/>
      <DescriptionComponent/>
      <TimeComponent/>
    </div>
  )
}

export default App
