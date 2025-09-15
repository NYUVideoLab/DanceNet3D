import { Box, Container, Typography, Grid, Card, CardContent, Button, Avatar, Link, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { ArrowForward, Launch, PictureAsPdf, Code } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import LandingNavbar from '../components/LandingNavbar';

// Styled components
const GradientBox = styled(Box)(({ theme }) => ({
  background: `
    linear-gradient(135deg, 
      rgba(45, 55, 72, 0.95) 0%, 
      rgba(87, 6, 140, 0.9) 40%, 
      rgba(0, 102, 177, 0.85) 100%
    ),
    radial-gradient(circle at 20% 80%, rgba(255, 184, 28, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 184, 28, 0.1) 0%, transparent 50%)
  `,
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.03) 50%, transparent 55%),
      linear-gradient(-45deg, transparent 45%, rgba(255, 255, 255, 0.03) 50%, transparent 55%)
    `,
    backgroundSize: '60px 60px',
    opacity: 0.5,
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 30%)
    `,
    pointerEvents: 'none',
  },
}));

const SimpleCard = styled(Card)(({ theme }) => ({
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  transition: 'none',
  '&:hover': {
    transform: 'none',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  },
}));

const LandingPage = () => {
  const theme = useTheme();

  // Sample data - replace with actual data
  const teamMembers = [
    {
      name: "Yong Liu",
      role: "Principal Investigator",
      link: 'https://engineering.nyu.edu/faculty/yong-liu',
    },
    {
      name: "Yao Wang",
      role: "Principal Investigator",
      link: 'https://engineering.nyu.edu/faculty/yao-wang',
      labPage: 'https://wp.nyu.edu/videolab/',
    },
    {
      name: "R. Luke Dubois",
      role: "Principal Investigator",
      link: 'https://engineering.nyu.edu/faculty/r-luke-dubois',
      labPage: 'https://www.lukedubois.com/',
    },
    {
      name: "Todd Bryant",
      role: "Senior Personnel",
      link: 'https://engineering.nyu.edu/faculty/todd-bryant',
    },
    {
      name: "Tingyu Fan",
      role: "PhD Student",
    },
    {
      name: "Ran Gong",
      role: "PhD Student",
    },
    {
      name: "Yueyu Hu",
      role: "PhD Student",
      link: 'https://huzi96.github.io/',
    },
    {
      name: "Chen Li",
      role: "PhD Student",
    },
    {
      name: "Tongyu Zong",
      role: "PhD Student",
    },
    {
      name: "Mingjian Li",
      role: "Undergraduate Student",
      link: 'https://limjiannn.com/',
    },
    {
      name: "Shihang Wei",
      role: "Undergraduate Student",
      link: 'https://potatwei.github.io/',
    },
  ];

  const acknowledgments = [
    "National Science Foundation (NSF) for funding this research",
    "NYU High Performance Computing Center for computational resources",
    "The volunteer participants who contributed to our dataset",
    "Open source community for invaluable tools and frameworks"
  ];

  const publications = [
    {
      text:
        'Hu, Y., Gong, R., Sun, Q., Wang, Y.: Low latency point cloud rendering with learned splatting. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. Workshop on AIS: Vision, Graphics and AI for Streaming. pp. 5752–5761 (2024)',
        href: 'https://arxiv.org/abs/2409.16504'
    },
    {
      text:
        'Hu, Y., Gong, R., Wang, Y.: Bits-to-photon: End-to-end learned scalable point cloud compression for direct rendering (2024), https://arxiv.org/abs/2406.05915, to appear in Prof. ICIP 2025.',
      href: 'https://arxiv.org/abs/2406.05915'
    },
    {
      text:
        'Hu, Y., Gong, R., Fan, T., Wang, Y.: Teso: Representing and compressing 3d point cloud scenes with textured surfel octree. arXiv preprint arXiv:2508.07083 (2025)',
      href: 'https://arxiv.org/abs/2508.07083'
    },
    {
      text:
        'Fan, T., Hu, Y., Gong, R., Wang, Y.: U-motion: Learned point cloud video compression with ustructured temporal context generation. arXiv preprint arXiv:2411.14501 (2024)',
        href: 'https://arxiv.org/abs/2411.14501'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      width: '100%' 
    }}>
      <LandingNavbar />
      {/* Hero Section */}
      <GradientBox>
        <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ 
            textAlign: 'center', 
            color: '#fff',
            width: '100%',
            py: { xs: 6, md: 8 }
          }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              Coding and Streaming of Point Cloud Video
            </Typography>
            {/* <Typography
              variant="h5"
              component="h2"
              sx={{
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.4,
              }}
            >
              A Diverse Neural Actor Repository for High-Fidelity Human-centric Rendering
            </Typography> */}
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
              mt: 2,
              justifyContent: 'center',
            }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<Launch />}
                href="#research"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  },
                  px: 5,
                  py: 2,
                  minWidth: '200px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                }}
              >
                View Research
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForward />}
                href="/project-page/dataset"
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  px: 5,
                  py: 2,
                  minWidth: '200px',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Dataset
              </Button>
            </Box>
          </Box>
        </Container>
      </GradientBox>

      {/* Project Summary */}
      <Box id="summary" sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '2px',
              },
            }}
          >
            Project Overview
          </Typography>
          
          <Box sx={{ maxWidth: '850px', mx: 'auto' }}>
            <Typography variant="body1" sx={{ fontSize: '1.4rem', lineHeight: 1.7, mb: 3, fontWeight: 500 }}>
              Volumetric video streaming will take telepresence to the next level by delivering full-fledged 3D information of the remote scene and facilitating six-degree-of-freedom viewpoint selection to create a truly immersive visual experience. With recent advances in the key enabling technologies, we are now at the verge of completing the puzzle of teleporting holograms of real-world humans/creatures/objects through the global Internet to realize the full potentials of Virtual/Augmented/Mixed Reality. Streaming volumetric video over the Internet requires significantly higher bandwidth and lower latency than the traditional 2D video; processing volumetric video also incurs high computation loads on the source and receiver sides.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.4rem', lineHeight: 1.7, mb: 3, fontWeight: 500 }}>
              We propose an inter-disciplinary research plan to holistically address the communication and computation challenges of point cloud video (PCV) by jointly designing coding, streaming, and edge processing strategies. We develop object-centric, view-adaptive, progressive, and edge-aware designs to deliver robust and high-quality viewer Quality-of-Experience (QoE) in the faces of network and viewer dynamics.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.4rem', lineHeight: 1.7, fontWeight: 500 }}>
              This research consists of four research thrusts:
            </Typography>
            <Box component="ol" sx={{ mt: 2, pl: 3 }}>
              <Typography 
                component="li" 
                variant="body1" 
                sx={{ 
                  fontSize: '1.2rem', 
                  lineHeight: 1.7, 
                  mb: 2,
                  p: 2,
                  borderRadius: 1,
                  background: 'linear-gradient(135deg, rgba(87, 6, 140, 0.05) 0%, rgba(0, 102, 177, 0.05) 100%)',
                  borderLeft: '3px solid #57068C',
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.08)'
                }}
              >
                Develop efficient point cloud video coding schemes that facilitate rate adaptation and field of view (FoV) adaption
              </Typography>
              <Typography 
                component="li" 
                variant="body1" 
                sx={{ 
                  fontSize: '1.2rem', 
                  lineHeight: 1.7, 
                  mb: 2,
                  p: 2,
                  borderRadius: 1,
                  background: 'linear-gradient(135deg, rgba(0, 102, 177, 0.05) 0%, rgba(87, 6, 140, 0.05) 100%)',
                  borderLeft: '3px solid #0066B1',
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.08)'
                }}
              >
                Develop progressive streaming framework to gradually refine the spatial resolution of each region in the predicted FoV as its playback time approaches.
              </Typography>
              <Typography 
                component="li" 
                variant="body1" 
                sx={{ 
                  fontSize: '1.2rem', 
                  lineHeight: 1.7, 
                  mb: 2,
                  p: 2,
                  borderRadius: 1,
                  background: 'linear-gradient(135deg, rgba(87, 6, 140, 0.05) 0%, rgba(0, 102, 177, 0.05) 100%)',
                  borderLeft: '3px solid #57068C',
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.08)'
                }}
              >
                Design edge PCV caching algorithms that work seamlessly with edge-based PCV post-processing.
              </Typography>
              <Typography 
                component="li" 
                variant="body1" 
                sx={{ 
                  fontSize: '1.2rem', 
                  lineHeight: 1.7, 
                  mb: 2,
                  p: 2,
                  borderRadius: 1,
                  background: 'linear-gradient(135deg, rgba(0, 102, 177, 0.05) 0%, rgba(87, 6, 140, 0.05) 100%)',
                  borderLeft: '3px solid #0066B1',
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.08)'
                }}
              >
                Develop a fully-functional PCV streaming testbed and conduct modern dance education experiments by streaming PCVs of professional dancers to dance students in on-demand and live fashions.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Press Release */}
      <Box id="press" sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '2px',
              },
            }}
          >
            Press Release
          </Typography>
          
          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography 
              variant="h4" 
              component="h3" 
              gutterBottom 
              sx={{ 
                color: theme.palette.primary.main, 
                fontWeight: 600,
                mb: 3,
                textAlign: 'center'
              }}
            >
              NYU Tandon Cuts a Rug with New 3D Video Technology
            </Typography>
            
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.7, mb: 3, fontWeight: 500 }}>
              A groundbreaking research project spearheaded by NYU Tandon School of Engineering will bring cutting-edge immersive three-dimensional (3D) video to dance education, making learning the art form more available to a diverse range of students.
            </Typography>
            
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.7, mb: 3, fontWeight: 500 }}>
              The project, supported by a $1.2 million NSF grant, aims to make Point-Cloud Video (PCV) technology suitable for streaming onto standard Internet-connected devices. PCV allows viewers to "move" within an immersive video environment, observing scenes from any angle as if physically present.
            </Typography>
            
            <Box sx={{ 
              p: 4, 
              borderRadius: 3, 
              background: 'linear-gradient(135deg, rgba(87, 6, 140, 0.08) 0%, rgba(0, 102, 177, 0.08) 100%)',
              border: '1px solid rgba(87, 6, 140, 0.1)',
              my: 4
            }}>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 2 }}>
                Key Highlights:
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 1 }}>
                  $1.2 million NSF grant for 4-year research project
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 1 }}>
                  Collaboration with Mark Morris Dance Group and NYU Tisch
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 1 }}>
                  Volumetric capture stage at NYU Tandon @ The Yard
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<Launch />}
                href="https://engineering.nyu.edu/news/nyu-tandon-cuts-rug-new-3d-video-technology"
                target="_blank"
                sx={{
                  borderWidth: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderWidth: 3,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Read Full Article
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Related Research */}
      <Box id="research" sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.accent.coral})`,
                borderRadius: '2px',
              },
            }}
          >
            Research Components
          </Typography>
          
          <Grid container spacing={4} sx={{ width: '100%' }}>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <SimpleCard sx={{ width: '100%', minWidth: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom color="primary">
                    Static and Dynamic Point Cloud Coding
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<Launch />}
                      component={Link}
                      href="https://wp.nyu.edu/videolab/static-and-dynamic-point-cloud-coding/"
                      target="_blank"
                    >
                      View Research
                    </Button>
                  </Box>
                </CardContent>
              </SimpleCard>
            </Grid>
            
            <Grid item xs={12} sx={{ width: '100%' }}>
              <SimpleCard sx={{ width: '100%', minWidth: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom color="primary">
                    FoV-Adaptive Point Cloud Video Streaming
                  </Typography>
                </CardContent>
              </SimpleCard>
            </Grid>
            
            <Grid item xs={12} sx={{ width: '100%' }}>
              <SimpleCard sx={{ width: '100%', minWidth: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom color="primary">
                    Field-of-View Prediction
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<Launch />}
                      component={Link}
                      href="https://chenli1996.github.io/PCV_FoV_Prediction/"
                      target="_blank"
                    >
                      View Research
                    </Button>
                  </Box>
                </CardContent>
              </SimpleCard>
            </Grid>
            
            <Grid item xs={12} sx={{ width: '100%' }}>
              <SimpleCard sx={{ width: '100%', minWidth: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom color="primary">
                    Volumetric Video Capture of Dancers
                  </Typography>

                </CardContent>
              </SimpleCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Publications Section */}
      <Box id="publications" sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.accent.teal}, ${theme.palette.primary.main})`,
                borderRadius: '2px',
              },
            }}
          >
            Publications
          </Typography>

          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Box component="ul" sx={{ pl: 3 }}>
              {publications.map((pub, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body1"
                  sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 2 }}
                >
                  {pub.href ? (
                    <Link
                      href={pub.href}
                      underline="hover"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'text.primary' }}
                    >
                      {pub.text}
                    </Link>
                  ) : (
                    pub.text
                  )}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Participants Section */}
      <Box id="participants" sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.accent.teal}, ${theme.palette.primary.main})`,
                borderRadius: '2px',
              },
            }}
          >
            Participants
          </Typography>

          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            {teamMembers.map((member, index) => (
              <Typography
                key={index}
                variant="h6"
                sx={{
                  mb: 0.5,
                  textAlign: 'left',
                  fontWeight: 500,
                }}
              >
                {member.link ? (
                  <Link
                    href={member.link}
                    underline="hover"
                    sx={{ fontWeight: 600, color: theme.palette.accent.teal }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.name}
                  </Link>
                ) : (
                  <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                    {member.name}
                  </Box>
                )}
                {`, ${member.role}`}
                {member.labPage ? (
                  <>
                    {`, `}
                    <Link
                      href={member.labPage}
                      underline="hover"
                      sx={{ color: theme.palette.accent.teal }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lab Page
                    </Link>
                  </>
                ) : null}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Acknowledgments */}
      <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.accent.mint}, ${theme.palette.accent.teal})`,
                borderRadius: '2px',
              },
            }}
          >
            Acknowledgments
          </Typography>
          
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
            }}
          >
            <Typography variant="body1" paragraph align="center" sx={{ mb: 3 }}>
              We extend our heartfelt gratitude to the following organizations and individuals 
              who made this research possible:
            </Typography>
            
            <Grid container spacing={3}>
              {acknowledgments.map((acknowledgment, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: theme.palette.primary.main,
                        mr: 2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body1">
                      {acknowledgment}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 10, bgcolor: theme.palette.primary.main }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: '#fff' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, color: theme.palette.secondary.main }}>
              Ready to Explore?
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Dive into our comprehensive dataset and discover the future of human-centric rendering
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              href="/project-page/dataset" 
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                  transform: 'translateY(-5px) scale(1.05)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                },
                '&:active': {
                  transform: 'translateY(-2px) scale(1.02)',
                },
                px: 8,
                py: 3.5,
                fontSize: '1.5rem',
                fontWeight: 800,
                borderRadius: 6,
                minWidth: '300px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
                background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transition: 'left 0.8s ease',
                },
                '&:hover::before': {
                  left: '100%',
                },
              }}
            >
              Explore Dataset
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 