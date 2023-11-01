import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { DataContextProvider } from './context/contextApi'

const App = () => {
  return (
    <DataContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DataContextProvider>
  )
}

export default App;