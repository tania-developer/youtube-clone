import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChannelDetail from './components/ChannelDetail'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import SearchFeed from './components/SearchFeed'
import VideoDetail from './components/VideoDetail'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/video/:id" element={<VideoDetail />} />
        <Route exact path="/channel/:id" element={<ChannelDetail />} />
        <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
