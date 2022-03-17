import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ImageGallery } from './ImageGallery'
import { ImagePage } from './ImagePage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/image" element={<ImagePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;