import { Box, Container, Typography, Grid, Button, Link as MuiLink } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import StorageIcon from '@mui/icons-material/Storage';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const sectionCard = {
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 2,
  p: 3,
  bgcolor: '#fafafa',
};

const dlBtn = {
  textTransform: 'none',
  py: 1,
  fontWeight: 600,
};

const Download = () => {
  return (
    <Box id="download" sx={{ py: 8, bgcolor: '#fff' }}>
      <Container maxWidth="md">
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
              background: 'linear-gradient(90deg, #FFB81C, #ff9800)',
              borderRadius: '2px',
            },
          }}
        >
          Download
        </Typography>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="body1" sx={{ mb: 2, fontSize: '1.15rem', lineHeight: 1.6 }}>
            Our dataset is hosted on{' '}
            <MuiLink href="https://huggingface.co/datasets/nyuvideolab/danceNet3D" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 600 }}>
              Hugging Face
            </MuiLink>
            . Access and start exploring the possibilities of high-fidelity dances.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            startIcon={<MenuBookIcon />}
            endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
            component="a"
            href="https://huggingface.co/datasets/nyuvideolab/danceNet3D/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Read the Dataset README & License
          </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Full Dataset */}
          <Box sx={sectionCard}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <StorageIcon color="primary" />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Full Dataset</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Complete dataset with all actors, actions, images, camera calibration, per-frame masks, and per-frame 3DGS models.
            </Typography>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              component="a"
              href="https://huggingface.co/datasets/nyuvideolab/danceNet3D"
              target="_blank"
              rel="noopener noreferrer"
              sx={dlBtn}
            >
              Download All
            </Button>
          </Box>

          {/* 3DGS */}
          <Box sx={sectionCard}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <ViewInArIcon color="primary" />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>3D Gaussian Splatting Models</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Pre-trained 3DGS files. After downloading, you can view them interactively with{' '}
              <MuiLink href="https://superspl.at/editor/" target="_blank" rel="noopener noreferrer">
                SuperSplat Editor
              </MuiLink>.
            </Typography>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              component="a"
              href="https://huggingface.co/datasets/nyuvideolab/danceNet3D/tree/main/3dgs"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...dlBtn, mt: 1 }}
            >
              Download 3DGS
            </Button>
          </Box>

          {/* Per-Session Downloads */}
          <Box sx={sectionCard}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <DownloadIcon color="primary" />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Per-Session Downloads</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Download individual recording sessions instead of the full dataset.
            </Typography>
            <Grid container spacing={1.5}>
              {[
                { label: 'Session 4', href: 'https://huggingface.co/datasets/nyuvideolab/danceNet3D/tree/main/s4' },
                { label: 'Session 5', href: 'https://huggingface.co/datasets/nyuvideolab/danceNet3D/tree/main/s5' },
                { label: 'Session 6', href: 'https://huggingface.co/datasets/nyuvideolab/danceNet3D/tree/main/s6' },
              ].map((s) => (
                <Grid item xs="auto" key={s.label}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<DownloadIcon />}
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    {s.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          Please read the{' '}
          <MuiLink
            href="https://huggingface.co/datasets/nyuvideolab/danceNet3D/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            dataset README
          </MuiLink>{' '}
          for detailed descriptions and agree to the license before using the data.
        </Typography>
      </Container>
    </Box>
  );
};

export default Download; 