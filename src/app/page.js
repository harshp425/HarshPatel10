"use client";
import { Button } from "@mui/base";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Paper from '@mui/material/Paper';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { colors } from "@mui/material";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { Card, CardActionArea, CardMedia, Dialog, DialogTitle, DialogContent, Typography, Grid, Box } from '@mui/material';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Script from 'next/script';



export default function Home() {

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'BIMS',
      description: "A secure inventory management system built in Next.js for Cornell's Bovay Lab, centralizing equipment tracking and increasing operational efficiency by 55%, reducing tool misplacement incidents by 40%, and providing advanced query tracking and analytics features that enhanced decision-making and supported loss prevention and budget planning.",
      image: 'Designer-3.jpeg',
      square_image: 'Designer-3 2.jpeg',
      technologies: ['Javascript', 'Next.js', 'HTML', 'CSS'],
      link: 'https://github.com/harshp425/BIMS-App'
    },
    {
      name: 'FitApp',
      description: 'An interactive fitness tracking web application which provides users with an array of workout logging and analysis features. Supporting user registration and login, the application offers a dashboard where users can add and remove their personal records and fitness goals. They can also log different types of strength and endurance workout data which is then displayed through charts and graphs to visualize progress.',
      image: 'fittapp.jpeg',
      square_image: 'fittapp copy.jpeg',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'Javascript', 'React', 'CSS'],
      link: 'https://github.com/harshp425/fitnesstracker'
    },
    {
      name: 'StockTab',
      description: 'An interactive Python program to scrape stock data from Yahoo Finance. The program can be used to retrieve various fundamental data using tickers such as reporting the live status of the stock, valuation measures, statistics, historical data analysis, and current news',
      image: 'stocktab.jpeg',
      square_image: 'stocktab copy.jpeg',
      technologies: ['Python', 'Pandas', 'Matplotlib', "Numpy", "Beautiful Soup", "Requests"],
      link: 'https://github.com/harshp425/Stock-Market-Analysis-Program'
    },
    {
      name: 'JIM',
      description: "A real time object detection program which leverages computer vision and machine learning to classify different tools. Leveraging an accuracy rate of over 80%, the program accesses the webcam and provides real-time classification of equipment with additional instructions on use and return location. The program was implemented in Cornell’s Bovay Civil Infrastructure Lab to improve organization within the complex and assist students/researchers in safely and efficiently utilizing tools.",
      image: 'jim.jpeg',
      square_image: 'jim copy.jpeg',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-Learn', 'NumPy', "Pandas"],
      link: 'https://github.com/harshp425/Real-Time-Tool-Classifier'
    },
    {
      name: 'GeoSolver',
      description: "This is an interactive python program which runs completely on the command terminal. This program offers an array of different common geometry problems fo users to choose from and solves the chosen problems with custom user inputs.",
      image: 'geosolver.jpeg',
      square_image: 'geosolver copy.jpeg',
      technologies: ['Python', 'Math Library'],
      link: 'https://github.com/harshp425/Python-Geometry-Solver'
    },
    {
      name: 'Hangman',
      description: "This is an interactive game of hangman that not only offers a great playing experience to users, but also offers a degree of customizability. Users can select from a range of 3 different categories of words and after selection, they will then be able to guess letters of the chosen word with each successful guess filling in the word while each unsuccessful guess drawing a part of a stick figure's body.",
      image: 'hangman.jpeg',
      square_image: 'hangman copy.jpeg',
      technologies: ['Javascript', 'HTML', 'CSS'],
      link: 'https://github.com/harshp425/Hangman-Game'
    },
    {
      name: 'MathSolver',
      description: "This is an interactive web application which solves a variety of geometry problems and displays the solutions on a frontend. The application utilizes the Flask framework in Python along with HTML and CSS for the frontend. The backend and solving is all handled through Javescript functions which leverage Math and conditional statements.",
      image: 'mathsolver.jpeg',
      square_image: 'mathsolver copy.jpeg',
      technologies: ['Python', 'Javascript', 'HTML', 'CSS'],
      link: 'https://github.com/harshp425/Geometry-Calculator-App'
    }
  ];



  const handleCardClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };




  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  return (
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.css" />
      <Script src="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.js" />




      <section id="Home" className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-center p-4 md:p-0" style={{ backgroundColor: "white", paddingTop: '7rem', minHeight: '100vh' }}>
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <div data-aos="fade-up" className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
            <h1 className="text-black text-4xl md:text-6xl mb-4 md:mb-8 font-bold text-shadow-lg tracking-wide" style={{ fontFamily: 'Lato', fontWeight: '700' }}>
              Hi, I&apos;m <br />
              <span className="block text-5xl md:text-8xl pt-3" style={{ fontFamily: 'Lato', fontWeight: '700' }}>Harsh Patel</span>
            </h1>
            <div className="flex flex-col items-center md:items-center pt-4 md:pt-0" style={{ width: "100%", fontFamily: 'Lato', fontWeight: '400', color: "black" }}>
              <div className="flex items-center justify-center md:justify-start w-full">
                <TypeAnimation
                  sequence={[
                    'A Cornell CS Student.',
                    2000,
                    'A Sftwa',
                    100,
                    'A Software Egne',
                    100,
                    'A Software Engineer.',
                    2000,
                    'A Data enth',
                    100,
                    'A Data Enthusiast.',
                    2000,
                    'A Web Developer.',
                    2000,
                    'A Teacher.',
                    2000,
                  ]}
                  wrapper="p"
                  cursor={true}
                  repeat={Infinity}
                  className="text-2xl md:text-4xl font-bold mt-2 md:mt-0"
                  style={{ marginLeft: '0rem' }}
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-start w-full mt-4 md:mt-8">
              <Button href='https://www.linkedin.com/in/harshpatel120' target='_blank'>
                <img src="/linkedin2.png" className="w-10 md:w-12 mr-4" />
              </Button>
              <Button href='https://github.com/harshp425' target='_blank'>
                <img src="/githubicon.png" className="w-10 md:w-12" />
              </Button>
            </div>
          </div>
          <div data-aos="fade-left" className="mt-12 md:mt-0 md:ml-12">
            <img src="/Picture1.png" className="w-full max-w-xs md:max-w-lg mx-auto md:mx-0" />
          </div>
        </div>
      </section>

      <section id="About Me" className="w-full flex flex-col items-center justify-center p-8 min-h-[60vh]" style={{ backgroundColor: "#1c3652" }}>
        <div data-aos="fade-up" className="flex items-center justify-center w-full mb-8">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-shadow-lg tracking-wide" style={{ color: 'white' }}>
            About Me
          </h1>
        </div>
        <p data-aos="fade-up" className="text-white text-center mt-4 max-w-4xl text-lg md:text-xl font-light leading-relaxed tracking-wide" style={{ color: 'white' }}>

          I am currently a third-year undergraduate student at Cornell University, majoring in Computer Science with a minors in business and artificial intelligence. My passion for software development, particularly in its ability to solve real-world problems, has driven my academic pursuits. Alongside my technical background, I am also dedicated to bridging the gap between business and technology which has allowed me to complement my engineering skills with a broader understanding of the strategic, financial, and operational aspects of technology-driven organizations.
          Through coursework and hands-on projects, I have built a strong foundation in AI, ML, full-stack development, and data engineering. I have gained practical experience designing scalable solutions, optimizing data pipelines, and integrating enterprise data systems. These experiences have enhanced my ability to support data-driven decision-making and improve business operations.
        </p>
        <p data-aos="fade-up" className="text-white text-center mt-4 max-w-4xl text-lg md:text-xl font-light leading-relaxed tracking-wide" style={{ color: 'white' }}>
          Outside of my academic and professional pursuits, I often spend my free time playing tennis and basketball. I also enjoy hiking and photography.
        </p>
      </section>

      <section id='Education' className="w-full flex flex-col items-center justify-center p-8" style={{ backgroundColor: "white", minHeight: '60vh' }}>
        <div data-aos="fade-up" className="flex items-center justify-center w-full mb-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-shadow-lg tracking-wide" style={{ color: '#36454F' }}>Education</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center w-full mb-6">
          <div data-aos="zoom-in-right" className="flex justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0 md:mr-6">
            <img src="/Cornell_University_seal.png" className="max-w-xs md:max-w-sm mx-auto md:mx-0 transform transition-all duration-500 hover:scale-105" style={{ width: '80%' }} alt="Cornell University Seal" />
          </div>

          <Box data-aos="zoom-in-left" sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 2,
              width: '100%',
              maxWidth: '1200px',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            },
          }}>
            <Paper elevation={3} sx={{ position: 'relative', borderRadius: '12px' }}>
              <Box sx={{
                backgroundColor: '#213e60',
                color: 'white',
                opacity: 0.85,
                p: 3,
                textAlign: 'center',
                position: 'absolute',
                top: 0,
                width: '100%',
                borderRadius: '12px 12px 0 0',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              }}>
                <Typography className="font-bold text-shadow-lg tracking-wide" sx={{ fontWeight: '600' }} variant="h5" component="h3">
                  Cornell University
                </Typography>
              </Box>
              <Box className="font-bold text-shadow-lg tracking-wide" sx={{ p: 4, pt: 14, fontFamily: 'Lato', fontWeight: '700' }}>
                <Typography className="font-semibold text-shadow-lg tracking-wide text-lg md:text-xl leading-relaxed" variant="h6" component="p" gutterBottom>
                  <strong>Class of 2026, College of Engineering</strong>
                </Typography>

                <Typography className="text-lg md:text-xl font-light leading-relaxed tracking-wide" variant="body1" component="p" gutterBottom >
                  <strong >Degree:</strong> B.S. in Computer Science
                </Typography>

                <Typography className="text-lg md:text-xl font-light leading-relaxed tracking-wide" variant="body1" component="p" gutterBottom >
                  <strong>Minors:</strong> Business (Finance) & Artificial Intelligence
                </Typography>

                <Typography className="text-lg md:text-xl font-light leading-relaxed tracking-wide" variant="body1" component="p" gutterBottom >
                  <strong>GPA:</strong> 3.69
                </Typography>

                <Typography className="text-lg md:text-xl font-light leading-relaxed tracking-wide" variant="body1" component="p" >
                  <strong>Dean's List:</strong> Spring '23, Fall '23, Spring '24, Fall '25
                </Typography>

              </Box>
            </Paper>
          </Box>
        </div>

        <div data-aos="fade-up" className="flex justify-center p-6" style={{ width: '85%', marginTop: '40px' }}>
          <Slider {...settings} className="w-full" style={{ position: 'relative' }}>


            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Data Structures and Algorithms in Java
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 2110
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Analysis of Algorithms
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 4820
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Introduction to Machine Learning
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 3780
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Introduction to Artificial Intelligence
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 3700
                </Typography>
              </Paper>
            </Box>


            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Introduction to Programming
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 1110
                </Typography>
              </Paper>
            </Box>


            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Intro to Computer Architecture
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 3410
                </Typography>
              </Paper>
            </Box>

            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Introduction to Computer Vision
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 4670
                </Typography>
              </Paper>
            </Box>


            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Functional Programming in OCaml
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 3110
                </Typography>
              </Paper>
            </Box>


            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Discrete Structures
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 2800
                </Typography>
              </Paper>
            </Box>


            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', height: '130px', width: '270px', backgroundColor: '#213e60', color: 'white', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'bold', marginBottom: '10px', fontFamily: 'Lato', fontWeight: '700', letterSpacing: '1px' }}>
                  Linear Algebra
                </Typography>
                <Typography sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p">
                  CS 2940
                </Typography>
              </Paper>
            </Box>

          </Slider>
        </div>
      </section>


      <section id="Experience" className="w-full flex flex-col items-center justify-center p-4" style={{ backgroundColor: "#1c3652", minHeight: '60vh', fontFamily: 'Lato', fontWeight: '700' }}>
        <div data-aos="fade-up" className="flex items-center justify-center w-full mb-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-shadow-lg tracking-wide" style={{ color: 'white' }}>Experience</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center w-full mb-8">

          <Box data-aos="zoom-out-left"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                maxWidth: '1200px',
                height: 'auto',
                p: 0,
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <Paper elevation={6} sx={{ position: 'relative', backgroundColor: 'white', color: '#213e60', opacity: 0.9 }}>
              <Box
                sx={{
                  backgroundColor: '#436b94',
                  color: '#213e60',
                  p: 2,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  borderRadius: '4px 4px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >

                <img
                  src="/rbc.jpeg"
                  alt="Logo"
                  style={{
                    width: '60px',
                    height: '60px',
                    marginRight: '16px',
                  }}
                />


                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <Typography sx={{ fontFamily: 'Lato', fontWeight: '400', color: "white" }} variant="h5" component="h3">
                    RBC CAPITAL MARKETS
                  </Typography>
                  <Typography sx={{ fontFamily: 'Lato', fontWeight: '300', color: "white" }} variant="h6" component="p">
                    JERSEY CITY, NJ
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ p: 4, pt: 12 }}>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="h6" component="p" gutterBottom>
                  <strong>SOFTWARE ENGINEERING INTERN</strong> <span style={{ float: 'right' }}><strong>MAY 2024 - AUG 2024</strong></span>
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Implemented and deployed an ETL pipeline using Python to efficiently transfer SRE product data from various inhouse, cloud, and third-
                  party data sources into Elasticsearch, leading to over 7700 documents created and 112+ new features tracked over 5 indices.
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Developed four comprehensive dashboards with Kibana to display SRE product usage data across the bank; driving increased adoption of
                  SRE products among T&O teams, providing KPO insights for executives, and identifying key areas for further investment within the bank.
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Developed an automated report generation application to provide POs, app custodians, and executives curated SRE Maturity metrics for
                  their portfolios of apps, providing visibility into infrastructure and application-level processes to boost operational efficiency.
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Expanded functionality of the cloud provisioning team’s APIs by creating a new class of decorators for Flask and FastAPI to
                  standardize user authentication; utilized functional and glass box testing while increasing test suite coverage by 43%.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center w-full mb-8">

          <Box data-aos="zoom-out-left"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                maxWidth: '1200px',
                height: 'auto',
                p: 0,
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <Paper elevation={6} sx={{ position: 'relative', backgroundColor: 'white', color: '#213e60', opacity: 0.9 }}>
              <Box
                sx={{
                  backgroundColor: '#436b94',
                  color: '#213e60',
                  p: 2,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  borderRadius: '4px 4px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >

                <img
                  src="/ids.jpg"
                  alt="Logo"
                  style={{
                    width: '60px',
                    height: '60px',
                    marginRight: '16px',
                  }}
                />


                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <Typography sx={{ fontFamily: 'Lato', fontWeight: '400', color: "white" }} variant="h5" component="h3">
                    CORNELL IDS LAB
                  </Typography>
                  <Typography sx={{ fontFamily: 'Lato', fontWeight: '300', color: "white" }} variant="h6" component="p">
                    ITHACA, NY
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ p: 4, pt: 12 }}>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="h6" component="p" gutterBottom>
                  <strong>MACHINE LEARNING RESEARCH ASSISTANT</strong> <span style={{ float: 'right' }}><strong>SEPTEMBER 2024 - PRESENT</strong></span>
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Collaborated with a team of 4 to fine-tune the Llama 3.1 model on the NGSIM Vehicle Trajectory dataset using LoRA adapters and applied
                  few-shot prompting techniques to enhance trajectory predictions for human-driven vehicles (HDVs).
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Generated HDV trajectory predictions to inform autonomous vehicle systems in making responsive actions for efficient traffic flow.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center w-full">
          <Box data-aos="zoom-out-left"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                maxWidth: '1200px',
                height: 'auto',
                p: 0,
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <Paper elevation={6} sx={{ position: 'relative', backgroundColor: 'white', color: '#213e60', opacity: 0.9 }}>
              <Box
                sx={{
                  backgroundColor: '#436b94',
                  color: '#213e60',
                  p: 2,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  borderRadius: '4px 4px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >

                <img
                  src="/cornell_bowers_cis.jpg"
                  alt="Logo"
                  style={{
                    width: '60px',
                    height: '60px',
                    marginRight: '16px',
                  }}
                />


                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <Typography sx={{ fontFamily: 'Lato', fontWeight: '400', color: "white" }} variant="h5" component="h3">
                    CORNELL BOWERS COLLEGE OF COMPUTING AND INFORMATION SCIENCE
                  </Typography>
                  <Typography sx={{ fontFamily: 'Lato', fontWeight: '300', color: "white" }} variant="h6" component="p">
                    ITHACA, NY
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ p: 4, pt: 12 }}>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="h6" component="p" gutterBottom>
                  <strong>CS 1110 INTRODUCTION TO COMPUTING TEACHING ASSISTANT</strong> <span style={{ float: 'right' }}><strong>AUGUST 2023 - PRESENT</strong></span>
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Assisting students in grasping the core concepts of programming (OOP, algorithms, control structures, etc.) and problem-solving using Python while emphasizing principles of software development, style, and testing.
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Facilitating weekly lab sessions and office hours for over 40 students, assisting with project debugging and problem-solving. Grading projects and assignments while providing insightful feedback on incorrect code, code style, and alternative optimized approaches.
                </Typography>
                <Typography className="font-light leading-relaxed tracking-wide" sx={{ fontFamily: 'Lato', fontWeight: '400' }} variant="body1" component="p" gutterBottom>
                  <strong>•</strong> Fostering an inclusive space within recitations enabling students to use a collaborative approach to solve problems emulating a professional software engineering environment
                </Typography>
              </Box>
            </Paper>
          </Box>
        </div>
      </section>



      <section id='Projects' className="w-full flex flex-col items-center justify-start p-4" style={{ backgroundColor: "#ffffff", minHeight: '60vh', paddingTop: '2rem' }}>
        <div data-aos="fade-up" className="flex items-center justify-center w-full mb-8">
          <h1 className="text-gray-800 text-4xl md:text-6xl font-bold tracking-wide text-shadow-lg">Projects</h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => (
            <Card data-aos="zoom-in" data-aos-duration='3000'
              key={index}
              onClick={() => handleCardClick(project)}
              className="col-span-1 project-card transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              style={{
                marginTop: '10px',
                marginLeft: '10px',
                marginRight: '10px',
                marginBottom: '10px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardActionArea>

                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.name}
                  style={{
                    filter: 'brightness(1)',
                    transition: 'filter 0.3s ease-in-out, transform 0.3s ease',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(0.7)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'brightness(1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </CardActionArea>
            </Card>
          ))}
        </div>


        <Dialog open={openDialog} onClose={handleClose} maxWidth="md" fullWidth
          sx={{
            '& .MuiDialogContent-root': {
              padding: '1.5rem',
            },
          }}
        >
          <DialogTitle sx={{
            fontSize: '30px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333',
          }}>
            {selectedProject?.name}
            <Button
              href={selectedProject?.link}
              target='_blank'
              sx={{
                marginLeft: '10px',
                padding: '2',
                minWidth: 'auto',
              }}
            >
              <img src="/githubicon.png" className="w-4 md:w-8 ml-3" />
            </Button>
          </DialogTitle>

          <DialogContent>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

              <div style={{ flex: '1 1 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <img
                  src={"/" + selectedProject?.square_image}
                  alt={selectedProject?.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </div>


              <div style={{
                flex: '1 1 50%',
                paddingLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <Typography variant="h5" style={{ fontWeight: '700', marginBottom: '1rem', fontFamily: 'Lato' }}>
                  About
                </Typography>
                <Typography variant="body1" style={{
                  marginBottom: '1rem',
                  fontFamily: 'Lato',
                  fontWeight: '500',
                  lineHeight: '1.6',
                  color: '#555',
                }}>
                  {selectedProject?.description}
                </Typography>

                <Typography variant="h5" style={{
                  fontWeight: '700',
                  marginBottom: '1rem',
                  fontFamily: 'Lato',
                  color: '#333',
                }}>
                  Technologies Used:
                </Typography>


                <ul style={{
                  marginLeft: '1rem',
                  listStyleType: 'disc',
                  color: '#555',
                }}>
                  {selectedProject?.technologies.map((tech, index) => (
                    <li key={index} style={{
                      marginBottom: '0.5rem',
                      fontFamily: 'Lato',
                      fontWeight: '600',
                      lineHeight: '1.4',
                    }}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>


    </main >
  );
}

