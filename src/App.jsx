import './styles/main.scss'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Upload from './pages/Upload/Upload'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route element={<Header/>}></Route>
      <Route element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/videos/:videoId" element={<VideoPlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
