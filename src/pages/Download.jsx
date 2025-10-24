import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';

const Download = () => {
  const downloadOptions = [
    {
      title: 'Full Dataset',
      size: '500GB',
      description: 'Complete dataset with all actors and actions. Includes raw images, camera calibration, 3D point cloud, and 3DGS files for each frame.',
      requirements: [
        '500GB storage space',
        'Python 3.8+',
      ],
      link: 'https://huggingface.co/datasets/nyuvideolab/danceNet3D',
    },
    {
      title: 'Sample Dataset',
      size: '50GB',
      description: 'Sample dataset with one actor performing one action. Includes raw images, camera calibration, 3D point cloud, and 3DGS files for each frame.',
      requirements: [
        '50GB storage space',
        'Python 3.8+',
      ],
      link: 'https://huggingface.co/datasets/nyuvideolab/danceNet3D',
    },

  ];

  return (
    <Box id="download" sx={{ py: 8, bgcolor: '#fff' }}>
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
              background: 'linear-gradient(90deg, #FFB81C, #ff9800)', // Gold to Orange
              borderRadius: '2px',
            },
          }}
        >
          Download
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6, fontSize: '1.25rem', lineHeight: 1.6 }}>
          Access our dataset and start exploring the possibilities of high-fidelity dances.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {downloadOptions.map((option, index) => (
            <Grid item xs={12} sm={10} md={4} key={index}>
              <Card sx={{ height: '100%', maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', transition: 'none', '&:hover': { transform: 'none', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' } }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {option.title}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {option.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                      {option.description}
                    </Typography>
                    <List dense>
                      {option.requirements.map((req, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <StorageIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={req} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<DownloadIcon />}
                    component="a"
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={!option.link}
                    sx={{ 
                      mt: 'auto',
                      py: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Download; 