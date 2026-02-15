import { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, useTheme, IconButton } from '@mui/material';
import attitudePromenadeGif from '../assets/data_preview/AttitudePromenade.gif';
import biancaGoldenChimeeGif from '../assets/data_preview/BiancaGolden_Chimee.gif';
import chachaGif from '../assets/data_preview/Chacha.gif';
import houseFootworkAdvancedGif from '../assets/data_preview/HouseFootworkAdvanced.gif';
import russiaCostumeGif from '../assets/data_preview/RobertRubama_RussiaCostume.gif';
import bartSimpsonGif from '../assets/data_preview/BartSimpson.gif';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ScrollableContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const GalleryCard = styled(Card)(({ theme }) => ({
  minWidth: 300,
  maxWidth: 400,
  minHeight: 300,
  scrollSnapAlign: 'start',
  '&&': {
    transition: 'none',
  },
  '&&:hover': {
    transform: 'none',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  },
}));

const NavigationDots = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

const Dot = styled(Box)(({ active, theme }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[400],
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
  zIndex: 1,
}));

const HighlightData = () => {
  const theme = useTheme();
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const items = [
    {
      id: 1,
      title: "Attitude Promenade",
      image: attitudePromenadeGif,
      category: "novel-view"
    },
    {
      id: 2,
      title: "Chimee",
      image: biancaGoldenChimeeGif,
      category: "novel-pose"
    },
    {
      id: 3,
      title: "Chacha",
      image: chachaGif,
      category: "novel-view"
    },
    {
      id: 4,
      title: "House Footwork Advanced",
      image: houseFootworkAdvancedGif,
      category: "novel-pose"
    },
    {
      id: 5,
      title: "Russia Costume",
      image: russiaCostumeGif,
      category: "novel-pose"
    },
    {
      id: 6,
      title: "Bart Simpson",
      image: bartSimpsonGif,
      category: "novel-pose"
    },
  ];

  const cardWidth = 300 + 24; // card width + gap
  const COPIES = 5;
  
  // Create infinite scroll by multiplying items
  const infiniteItems = Array.from({ length: COPIES }, () => items).flat();

  // Initialize scroll position to the middle set of items
  useEffect(() => {
    if (scrollContainerRef.current) {
      const initialScroll = items.length * 2 * cardWidth;
      scrollContainerRef.current.scrollLeft = initialScroll;
    }
  }, []);

  // Silently reposition to the middle set after smooth scroll ends
  const resetToMiddleIfNeeded = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const currentIndex = Math.round(scrollLeft / cardWidth);
    const totalItems = infiniteItems.length;

    if (currentIndex < items.length || currentIndex >= totalItems - items.length) {
      // Calculate equivalent position in the middle copy
      const normalizedIndex = ((currentIndex % items.length) + items.length) % items.length;
      container.scrollLeft = (normalizedIndex + items.length * 2) * cardWidth;
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const currentIndex = Math.round(scrollLeft / cardWidth);

      // Update active dot
      setActiveIndex(((currentIndex % items.length) + items.length) % items.length);

      // Debounce: wait until scrolling stops, then silently reposition
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        resetToMiddleIfNeeded();
      }, 150);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const targetScroll = (index + items.length * 2) * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: currentScroll - cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: currentScroll + cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box id="highlight-data" sx={{ py: 12, bgcolor: '#fff' }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
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
              background: 'linear-gradient(90deg, #57068C, #0066B1)',
              borderRadius: '2px',
            },
          }}
        >
          Highlight Data
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <NavigationButton
            onClick={handlePrev}
            sx={{ left: -20 }}
          >
            <ArrowBackIosNewIcon />
          </NavigationButton>
          <ScrollableContainer 
            ref={scrollContainerRef} 
            onScroll={handleScroll}
            sx={{ 
              scrollBehavior: 'auto', // Changed from 'smooth' to prevent interference
              scrollSnapType: 'x mandatory',
            }}
          >
            {infiniteItems.map((item, index) => (
              <GalleryCard key={`${item.id}-${Math.floor(index / items.length)}-${index}`}>
                <CardMedia
                  component="img"
                  height="320"  
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </GalleryCard>
            ))}
          </ScrollableContainer>
          <NavigationButton
            onClick={handleNext}
            sx={{ right: -20 }}
          >
            <ArrowForwardIosIcon />
          </NavigationButton>
        </Box>
        <NavigationDots>
          {items.map((_, index) => (
            <Dot
              key={index}
              active={index === activeIndex}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </NavigationDots>
      </Container>
    </Box>
  );
};

export default HighlightData; 