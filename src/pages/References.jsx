import { Box, Container, Typography, Link, List, ListItem, ListItemText } from '@mui/material';

const References = () => {
  const references = [
    {
      id: 1,
      authors: 'Kerbl, B., Kopanas, G., Leimkühler, T., & Drettakis, G.',
      title: '3D Gaussian Splatting for Real-Time Radiance Field Rendering',
      venue: 'ACM Transactions on Graphics (SIGGRAPH), 2023',
      url: 'https://arxiv.org/abs/2308.04079',
    },
    {
      id: 2,
      authors: 'Carion, N., Gustafson, L., Hu, Y.-T., Debnath, S., Hu, R., Suris, D., Ryali, C., Alwala, K.V., Khedr, H., Huang, A., Lei, J., Ma, T., Guo, B., Kalla, A., Marks, M., Greer, J., Wang, M., Sun, P., Rädle, R., Afouras, T., Mavroudi, E., Xu, K., Wu, T.-H., Zhou, Y., Momeni, L., Hazra, R., Ding, S., Vaze, S., Porcher, F., Li, F., Li, S., Kamath, A., Cheng, H.K., Dollár, P., Ravi, N., Saenko, K., Zhang, P., & Feichtenhofer, C.',
      title: 'SAM 3: Segment Anything with Concepts',
      venue: 'arXiv preprint arXiv:2511.16719, 2025',
      url: 'https://arxiv.org/abs/2511.16719',
    },
    {
      id: 3,
      authors: 'Hanson, A., Tu, A., Lin, G., Singla, V., Zwicker, M., & Goldstein, T.',
      title: 'Speedy-Splat: Fast 3D Gaussian Splatting with Sparse Pixels and Sparse Primitives',
      venue: 'CVPR 2025',
      url: 'https://arxiv.org/abs/2412.00578',
    },
    {
      id: 4,
      authors: 'Hyung, J., Hong, S., Hwang, S., Lee, J., Choo, J., & Kim, J.-H.',
      title: 'Effective Rank Analysis and Regularization for Enhanced 3D Gaussian Splatting',
      venue: 'NeurIPS 2024',
      url: 'https://arxiv.org/abs/2406.11672',
    },
    {
      id: 5,
      authors: 'Wei, S., Li, M., Gong, R., Hu, Y., & Wang, Y.',
      title: 'DanceNet3D: A 3D Dance Dataset with Multi-View Videos and 3DGS Reconstructions',
      venue: 'CVPR 2026 Workshop on 3D Multimedia (3DMV) — Best Paper Award',
      url: 'https://openaccess.thecvf.com/content/CVPR2026W/3DMV/papers/Wei_DanceNet3D_A_3D_Dance_Dataset_with_Multi-View_Videos_and_3DGS_CVPRW_2026_paper.pdf',
    },
  ];

  return (
    <Box id="references" sx={{ py: 8, bgcolor: '#fff' }}>
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
              background: 'linear-gradient(90deg, #607d8b, #90a4ae)',
              borderRadius: '2px',
            },
          }}
        >
          References
        </Typography>

        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          <List>
            {references.map((ref) => (
              <ListItem
                key={ref.id}
                sx={{
                  display: 'list-item',
                  listStyleType: 'none',
                  pl: 0,
                  pb: 2,
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      [{ref.id}] {ref.authors} &ldquo;
                      <Link
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{ fontWeight: 600 }}
                      >
                        {ref.title}
                      </Link>
                      ,&rdquo; <em>{ref.venue}</em>.
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default References;
