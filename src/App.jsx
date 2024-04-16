import './styles/main.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import UploadPage from './pages/UploadPage/UploadPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
