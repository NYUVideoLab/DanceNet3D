import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Home from './Home';
import Overview from './Overview';
import HighlightData from './HighlightData';
import CoreFeatures from './CoreFeatures';
import Details from './Details';
import Benchmark from './Benchmark';
import Download from './Download';

const DatasetPage = () => {
  return (
    <Box className="DatasetPage" sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      width: '100%' 
    }}>
      <Navbar />
      <Box component="main">
        <Home />
        <Overview />
        {/* <HighlightData /> */}
        <CoreFeatures />
        <Details />
        {/* <Benchmark /> */}
        <Download />
      </Box>
    </Box>
  );
};

export default DatasetPage; 