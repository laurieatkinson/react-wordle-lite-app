import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayGamePage from './pages/PlayGamePage'
import StatsPage from './pages/StatsPage'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<PlayGamePage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
