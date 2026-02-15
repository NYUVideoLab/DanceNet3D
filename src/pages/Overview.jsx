import { Box, Container, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const RefNote = ({ num }) => (
  <Link
    href="#references"
    underline="none"
    sx={{ 
      fontSize: '0.75em', 
      verticalAlign: 'super', 
      lineHeight: 0, 
      color: 'primary.main',
      fontWeight: 700,
      cursor: 'pointer',
      '&:hover': { textDecoration: 'underline' },
    }}
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('references')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    [{num}]
  </Link>
);

const Overview = () => {
  const features = [
    {
      title: 'High Diversity',
      description: 'We collected comprehensive dance performances featuring 47 dance styles including chacha, basic, suzieq, attitude, promenade, with performance durations ranging from 10 seconds to 2 minutes.',
    },
    {
      title: 'High Fidelity',
      description: <>We construct a professional multi-view capture system containing 29 synchronized cameras. Each frame is trained with 3D Gaussian Splatting (3DGS)<RefNote num={1} /> models, providing high-fidelity representations for real-time rendering and novel view synthesis.</>,
    },
    // {
    //   title: 'Rich Annotations',
    //   description: 'We provide off-the-shelf high-precision annotations including 2D/3D human body keypoints, foreground masks, and SMPL-X models. Our annotations are specifically optimized for 3D human body scenarios and dance motion analysis.',
    // },
  ];

  return (
    <Box id="overview" sx={{ py: 8, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #1976d2, #00e5ff)', // Blue to Cyan
              borderRadius: '2px',
            },
          }}
        >
          Abstract
        </Typography>
        
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          <Typography variant="body1" paragraph align="justify" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.7 }}>
            We present <strong>DanceNet3D</strong>, a large-scale, high-fidelity repository of neural dance rendering represented by 3D Gaussian Splatting<RefNote num={1} /> of human dance performers. Our dataset provides comprehensive dance performances with:
          </Typography>

          <Box sx={{ pl: 2 }}>
            {features.map((feature, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="body1" component="div" sx={{ mb: 1, fontSize: '1.15rem', lineHeight: 1.6 }}>
                  <strong>{feature.title}:</strong> {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="body1" paragraph align="justify" sx={{ mt: 4, fontSize: '1.2rem', lineHeight: 1.7 }}>
            This dataset serves as a comprehensive resource for researchers working on 3D human rendering and dance analysis, with particular focus on multi-view dance capture and 3D Gaussian Splatting<RefNote num={1} /> applications.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Overview; 