import { Box, Container, Typography, Grid, Card, CardContent, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, Chip, Link, Button } from '@mui/material';
import { CameraAlt, Code, ThreeDRotation, Memory, Speed, Storage, Visibility, Build, BuildCircle, FourKRounded, FourGMobiledata, FourMp, FourKOutlined, GitHub } from '@mui/icons-material';

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

const Details = () => {
  const technicalSections = [
    {
      title: 'Multi-Camera Capture',
      icon: <CameraAlt sx={{ fontSize: 40, color: '#1976d2' }} />,
      description: 'Professional multi-camera setup for high-fidelity data acquisition',
      details: [
        'Hardware Configuration: 29 synchronized cameras at 1280×800 resolution',
        'Capture Rate: 30 FPS with hardware-level synchronization',
        'Lighting Setup: Professional LED array with controlled illumination',
        'Coverage: 360-degree capture volume with optimal viewpoint distribution',
        'Data Format: RAW image sequences with metadata timestamps'
      ],
    },
    {
      title: 'Camera Pose & Color Calibration',
      icon: <Visibility sx={{ fontSize: 40, color: '#388e3c' }} />,
      description: 'Precise camera calibration for multi-view consistency',
      details: [
        'Camera Pose Estimation: Intrinsic and extrinsic parameter estimation in COLMAP format',
        'Color Calibration: Cross-camera color consistency correction',
        'Quality Control: Automated detection and filtering of corrupted frames',
        'Dense Point Cloud Generation: 3D point cloud generation from multi-view images with OpenMVS',
      ],
    },
    {
      title: 'Mask Generation',
      icon: <Build sx={{ fontSize: 40, color: '#f57c00' }} />,
      description: <>SAM 3<RefNote num={2} />-powered foreground mask extraction for 3D human body scenarios</>,
      details: [
        'Background Subtraction: Automated foreground mask generation',
        'Mask Refinement: Precise boundary for human subjects',
        'Manual Review & Quality Control: Human-in-the-loop verification to ensure mask accuracy and correct edge cases',
      ],
    },
    {
      title: '3DGS Training',
      icon: <ThreeDRotation sx={{ fontSize: 40, color: '#d32f2f' }} />,
      description: <>3D Gaussian Splatting<RefNote num={1} /> model training for high-fidelity rendering</>,
      details: [
        <>Per-Frame 3DGS: Per-frame 3D Gaussian Splatting<RefNote num={1} /> for traditional 3DGS pipeline</>,
        <>Efficient Pruning: Reduced Gaussian counts using Speedy-Splat's<RefNote num={3} /> pruning method</>,
        'Clean Edges: Sharp object boundaries achieved with random background training method',
        <>Fidelity Improvement: Enhanced rendering quality with e-rank regularization<RefNote num={4} /></>,
      ],
    }
  ];

  const workflowSteps = [
    { step: 1, title: 'Multi-Camera Capture', description: 'Synchronized recording from 29 cameras' },
    { step: 2, title: 'Camera Pose & Color Calibration', description: 'Precise camera calibration for multi-view consistency' },
    { step: 3, title: 'Mask Generation', description: 'Automated mask extraction with manual quality review' },
    { step: 4, title: '3DGS Training', description: '3D Gaussian Splatting model training' }
  ];

  return (
    <Box id="details" sx={{ py: 8, bgcolor: '#fff' }}>
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
              background: 'linear-gradient(90deg, #ff9800, #ffe066)',
              borderRadius: '2px',
            },
          }}
        >
          Technical Details
        </Typography>
        
        <Typography variant="body1" paragraph align="center" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', fontSize: '1.15rem', lineHeight: 1.6 }}>
          Our comprehensive technical pipeline combines cutting-edge hardware with advanced algorithms
          to deliver unprecedented quality in human-centric neural rendering.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<GitHub />}
            component={Link}
            href="https://github.com/NYUVideoLab/dancenet3d-processing-pipeline"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderWidth: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.05rem',
              fontWeight: 600,
              '&:hover': { borderWidth: 2 },
            }}
          >
            View Code on GitHub
          </Button>
        </Box>

        {/* Workflow Overview */}
        <Paper elevation={3} sx={{ py: 4, px: 8, mb: 6, bgcolor: '#f8f9fa' }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Processing Workflow
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: { xs: 1, sm: 2, md: 4 },
            px: { xs: 0, sm: 1, md: 2 }
          }}>
            {workflowSteps.map((item, index) => (
              <Box key={index} sx={{ 
                flex: 1,
                textAlign: 'center',
                minWidth: 0
              }}>
                <Box
                  sx={{
                    width: { xs: 35, sm: 50, md: 60 },
                    height: { xs: 35, sm: 50, md: 60 },
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: { xs: 0.5, sm: 1, md: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1.25rem', md: '1.5rem' },
                    fontWeight: 'bold'
                  }}
                >
                  {item.step}
                </Box>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem' },
                    lineHeight: { xs: 1.1, sm: 1.2, md: 1.3 },
                    mb: { xs: 0.5, sm: 1, md: 1 },
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: { xs: 1.2, sm: 1.3, md: 1.5 },
                    display: { xs: 'none', sm: 'block' },
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
                          ))}
            </Box>
        </Paper>

        {/* Technical Sections */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between' }}>
          {technicalSections.map((section, index) => (
            <Box key={index} sx={{ 
              width: { xs: '100%', sm: 'calc(50% - 8px)' },
              minWidth: { sm: '300px' },
              maxWidth: 'none'
            }}>
              <Card sx={{ 
                height: '100%',
                width: '100%',
                transition: 'none',
                '&:hover': {
                  transform: 'none',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {section.icon}
                    <Typography variant="h4" sx={{ ml: 2, fontWeight: 600 }}>
                      {section.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 3, fontSize: '1.05rem', lineHeight: 1.6 }}>
                    {section.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
                    Key Features
                  </Typography>
                  <List dense>
                    {section.details.map((detail, idx) => (
                      <ListItem key={idx} sx={{ pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 20 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary={detail}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>


                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>


      </Container>
    </Box>
  );
};

export default Details; 