import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayGamePage from './pages/PlayGamePage'
import StatsPage from './pages/StatsPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PlayGamePage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </div>
  )
}

export default App
