import { Routes, Route } from 'react-router-dom';

import { Header, Feed, SearchResult, VideoDetails } from './components';

import { DataContextProvider } from './context/contextApi'

const App = () => {
  return (
    <DataContextProvider>
      <div className='flex flex-col h-full'>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/searchResult/:searchQuery"
            element={<SearchResult />}
          />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>

    </DataContextProvider>
  )
}

export default App;