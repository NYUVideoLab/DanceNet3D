import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DatasetPage from './pages/DatasetPage';

function App() {
  return (
    <Router basename="/DanceNet3D">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dataset" element={<DatasetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
