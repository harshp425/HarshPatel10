"use client";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import {
  Box,
  Dialog,
  IconButton,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  Fade,
  Backdrop,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ZoomIn as ZoomInIcon
} from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Gallery() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Sample photos - replace with your actual photo URLs
  const photos = [
    {
      id: 1,
      src: 'fall.jpeg',
      title: 'Autumn Colors',
      category: 'Nature'
    },
    {
      id: 2,
      src: 'sunset1.jpeg',
      title: 'Sunset Path',
      category: 'Nature'
    },
    {
      id: 3,
      src: 'sunset2.jpeg',
      title: 'Dip On A Hill',
      category: 'Nature'
    },
    {
      id: 4,
      src: 'sage.jpeg',
      title: 'Sage',
      category: 'Urban'
    },
    {
      id: 5,
      src: 'bloom.jpeg',
      title: 'Blooms of Pink',
      category: 'Nature'
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedImageIndex,
    autoplay: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
    );
  }

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>
    );
  }

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'bg-slate-white',
          py: 8,
          mt: 10
        }}
      >
        <Container maxWidth="xl">
          {/* Header */}
          <Box textAlign="center" mb={6} data-aos="fade-up">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #1A202B 0%, #635F5F 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Photo Gallery
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#1A202B',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Here are some of the photographs I&apos;ve taken!
            </Typography>
          </Box>

          {/* Photo Grid */}
          <Grid container spacing={3}>
            {photos.map((photo, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    },
                    '&:hover .image': {
                      transform: 'scale(1.1)',
                    },
                    '&:hover .overlay': {
                      opacity: 1,
                    }
                  }}
                  onClick={() => handleImageClick(index)}
                >
                  <CardMedia
                    component="img"
                    className="image"
                    sx={{
                      height: 280,
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    image={photo.src}
                    alt={photo.title}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      p: 3
                    }}
                  >
                    <ZoomInIcon
                      sx={{
                        color: 'white',
                        fontSize: 40,
                        mb: 2,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        textAlign: 'center',
                        mb: 1
                      }}
                    >
                      {photo.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textAlign: 'center'
                      }}
                    >
                      {photo.category}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Slideshow Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth={false}
        fullScreen
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
          }
        }}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            }
          }
        }}
      >
        <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
          {/* Close Button */}
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              top: 24,
              right: 24,
              zIndex: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          {/* Slideshow */}
          <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Slider {...sliderSettings} style={{ width: '100%', height: '100%' }}>
              {photos.map((photo, index) => (
                <Box key={photo.id} sx={{ height: '100vh', position: 'relative' }}>
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex !important',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: { xs: 2, md: 4 }
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      style={{
                        maxHeight: '90vh',
                        maxWidth: '90vw',
                        objectFit: 'contain',
                        borderRadius: '12px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                      }}
                    />
                  </Box>

                  {/* Image Info */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 40,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      textAlign: 'center',
                      color: 'white',
                      zIndex: 5
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {photo.title}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>
                      {photo.category}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Dialog>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .custom-dots {
          bottom: 20px !important;
        }

        .custom-dots li button:before {
          color: white !important;
          font-size: 12px !important;
          opacity: 0.5 !important;
        }

        .custom-dots li.slick-active button:before {
          opacity: 1 !important;
          color: #667eea !important;
        }

        .slick-slide {
          outline: none;
        }
      `}</style>
    </>
  );
}