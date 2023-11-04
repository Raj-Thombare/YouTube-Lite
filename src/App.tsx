import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { Header, Sidebar } from './components';

import { DataContextProvider } from './context/contextApi'

const App = () => {
  return (
    <DataContextProvider>
      <div className='flex flex-col h-full'>
        <Header />
      </div>
      {/* <Routes>
        <Route path="/searchResult/:searchQuery" element={<Home />} />
        <Route path="/video/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
    </DataContextProvider>
  )
}

export default App;