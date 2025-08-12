"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Mail, MapPin, Calendar, Award, Code, Database, Brain, Briefcase } from 'lucide-react';
import { PhotoCamera, Sports, SportsTennis } from '@mui/icons-material';

export default function ModernPortfolio() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typewriterTexts = [
    'A Cornell CS Student',
    'A Software Engineer',
    'A Data Enthusiast',
    'A Web Developer',
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 75 : 110;
    const currentFullText = typewriterTexts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length);
        return;
      }

      setCurrentText(prev =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const projects = [
    {
      name: 'BIMS',
      description: "A secure inventory management system built in Next.js for Cornell's Bovay Lab, centralizing equipment tracking and increasing operational efficiency by 55%, reducing tool misplacement incidents by 40%, and providing advanced query tracking and analytics features that enhanced decision-making and supported loss prevention and budget planning.",
      image: 'Designer-3.jpeg',
      technologies: ['Javascript', 'Next.js', 'HTML', 'CSS'],
      link: 'https://github.com/harshp425/BIMS-App',
      category: 'Full Stack'
    },
    {
      name: 'FitApp',
      description: 'An interactive fitness tracking web application which provides users with an array of workout logging and analysis features. Supporting user registration and login, the application offers a dashboard where users can add and remove their personal records and fitness goals.',
      image: 'fittapp.jpeg',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'Javascript', 'React', 'CSS'],
      link: 'https://github.com/harshp425/fitnesstracker',
      category: 'Full Stack'
    },
    {
      name: 'StockTab',
      description: 'An interactive Python program to scrape stock data from Yahoo Finance. The program can be used to retrieve various fundamental data using tickers such as reporting the live status of the stock, valuation measures, statistics, and historical data analysis.',
      image: 'stocktab.jpeg',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Numpy', 'Beautiful Soup', 'Requests'],
      link: 'https://github.com/harshp425/Stock-Market-Analysis-Program',
      category: 'Data Science'
    },
    {
      name: 'Stock Vibe',
      description: 'A Flask-based web application that provides real-time sentiment analysis of publicly traded stocks using the latest news headlines. By combining price trends with headline sentiment, Stock Vibe helps users quickly understand market perception.',
      image: 'stock_vibe.jpeg',
      technologies: ['Python', 'Flask', 'Beautiful Soup', 'Hugging Face', 'Matplotlib', 'HTML', 'CSS'],
      link: 'https://github.com/harshp425/stock_vibe',
      category: 'AI/ML'
    },
    {
      name: 'JIM',
      description: "A real time object detection program which leverages computer vision and machine learning to classify different tools. Leveraging an accuracy rate of over 80%, the program accesses the webcam and provides real-time classification of equipment.",
      image: 'jim.jpeg',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-Learn', 'NumPy', 'Pandas'],
      link: 'https://github.com/harshp425/Real-Time-Tool-Classifier',
      category: 'AI/ML'
    },
    {
      name: 'RagBot',
      description: "A Retrieval-Augmented Generation (RAG) chatbot that provides intelligent responses by retrieving relevant information from a knowledge base and generating context-aware answers. Designed to run without paid model APIs.",
      image: 'RAGBot.jpeg',
      technologies: ['Flask', 'Langchain', 'Python', 'HTML', 'CSS'],
      link: 'https://github.com/harshp425/RAG_chatbot',
      category: 'AI/ML'
    },
    {
      name: 'GeoSolver',
      description: "This is an interactive python program which runs completely on the command terminal. This program offers an array of different common geometry problems for users to choose from and solves the chosen problems with custom user inputs.",
      image: 'geosolver.jpeg',
      technologies: ['Python', 'Math Library'],
      link: 'https://github.com/harshp425/Python-Geometry-Solver',
      category: 'Backend'
    },
    {
      name: 'Hangman',
      description: "This is an interactive game of hangman that not only offers a great playing experience to users, but also offers a degree of customizability. Users can select from a range of 3 different categories of words and after selection, they will then be able to guess letters of the chosen word with each successful guess filling in the word while each unsuccessful guess drawing a part of a stick figure's body.",
      image: 'hangman.jpeg',
      technologies: ['Javascript', 'HTML', 'CSS'],
      link: 'https://github.com/harshp425/Hangman-Game',
      category: 'Fullstack'
    },
    {
      name: 'MathSolver',
      description: "This is an interactive web application which solves a variety of geometry problems and displays the solutions on a frontend. The application utilizes the Flask framework in Python along with HTML and CSS for the frontend. The backend and solving is all handled through Javescript functions which leverage Math and conditional statements.",
      image: 'mathsolver.jpeg',
      technologies: ['Python', 'Javascript', 'HTML', 'CSS'],
      link: 'https://github.com/harshp425/Geometry-Calculator-App',
      category: 'Fullstack'
    }
  ];

  const courses = [
    'Data Structures and Algorithms',
    'Analysis of Algorithms',
    'Introduction to Machine Learning',
    'Introduction to Artificial Intelligence',
    'Introduction to Computer Vision',
    'Functional Programming in OCaml',
    'Intro to Computer Architecture',
    "Information Retrieval Systems",
    'Discrete Structures',
    'Linear Algebra',
    'Probability and Statistics',
    'Predictive Analytics '
  ];

  const experiences = [
    {
      company: 'Capital One',
      position: 'Software Engineering Intern',
      location: 'Richmond, VA',
      duration: 'June 2025 - Aug 2025',
      logo: 'c1.png',
      description: [
        'Engineered a real-time fraud detection system using Spring Boot, Java, Kafka, and AWS services (SQS, Lambda, DynamoDB) to aggregate ACH transaction data every 10 minutes, triggering event volume anomaly detection via external ML APIs',
        'Developed a Java-based aggregator microservice using Kafka and Apache Flink to process streaming ACH payment data, aggregating transaction data in 10-minute intervals and publishing results to AWS SQS for downstream anomaly detection',
        'Developed and deployed an AWS Lambda service to consume aggregated transaction data, perform anomaly detection via external model APIs, and dispatch alerts through AWS SNS to Slack, PagerDuty, and email based on model responses',
      ]
    },
    {
      company: 'RBC Capital Markets',
      position: 'Software Engineering Intern',
      location: 'Jersey City, NJ',
      duration: 'May 2024 - Aug 2024',
      logo: 'rbc.jpeg',
      description: [
        'Implemented and deployed an ETL pipeline using Python to efficiently transfer SRE product data from various inhouse, cloud, and third-party data sources into Elasticsearch, leading to over 7700 documents created and 112+ new features tracked over 5 indices',
        'Developed four comprehensive dashboards with Kibana to display SRE product usage data across the bank; driving increased adoption of SRE products among T&O teams, providing KPO insights for executives, and identifying key areas for further investment within the bank',
        'Developed an automated report generation application to provide POs, app custodians, and executives curated SRE Maturity metrics for their portfolios of apps, providing visibility into infrastructure and application-level processes to boost operational efficiency',
        "Expanded functionality of the cloud provisioning team’s APIs by creating a new class of decorators for Flask and FastAPI to standardize user authentication; utilized functional and glass box testing while increasing test suite coverage by 43%"
      ]
    },
    {
      company: 'Cornell IDS Lab',
      position: 'Machine Learning Research Assistant',
      location: 'Ithaca, NY',
      duration: 'Sep 2024 - Present',
      logo: 'ids.jpg',
      description: [
        'Collaborated with a team of 4 to fine-tune the Llama 3.1 model on the NGSIM Vehicle Trajectory dataset using LoRA adapters and applied few-shot prompting techniques to enhance trajectory predictions for human-driven vehicles (HDVs)',
        'Generated HDV trajectory predictions to inform autonomous vehicle systems in making responsive actions for efficient traffic flow'
      ]
    },
    {
      company: 'Cornell Bowers CIS',
      position: 'CS 1110 Teaching Assistant',
      location: 'Ithaca, NY',
      duration: 'Aug 2023 - Present',
      logo: 'cornell_bowers_cis.jpg',
      description: [
        'Assisting students in grasping the core concepts of programming (OOP, algorithms, control structures, etc.) and problem-solving using Python while emphasizing principles of software development, style, and testing.',
        'Leading weekly lab sessions and office hours for over 40 students, assisting with project debugging and problem-solving. Grading projects and assignments while providing insightful feedback on incorrect code, code style, and alternative optimized approaches.',
      ]
    },
    {
      company: 'Cornell Bovay Civil Infrastructure Lab',
      position: 'Lab Operations Assistant',
      location: 'Ithaca, NY',
      duration: 'Nov 2022 - Present',
      logo: 'cee.jpg',
      description: [
        'Developed and implemented BIMS, an inventory management system that streamlined equipment tracking, improved tool accessibility, and enhanced loss prevention, providing valuable data insights for budgeting and procurement.',
        'Optimizing data collection and analysis by leveraging LabVIEW and MATLAB to acquire, process, and visualize experimental data for shear, torsional, and buckling tests, supporting research and coursework.',
        'Enhanced lab safety by designing and fabricating a 49 sq-ft elevated platform railing system and improving workspace organization through custom-built equipment solutions'
      ]
    }
  ];

  return (
    <main>

      <div id="Home" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                  Hi, I&apos;m<br />
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    Harsh Patel
                  </span>
                </h1>
                <div className="text-2xl lg:text-3xl text-slate-600 h-12 flex items-center">
                  <span>{currentText}</span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-light">
                Computer Science student at Cornell University with a passion for software engineering,
                data science, and building solutions that make a difference.
              </p>

              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/harshpatel120" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/harshp425" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-900 text-white rounded-full transition-colors duration-200">
                  <Github size={24} />
                </a>

              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-blue-600 to-green-500 rounded-full opacity-40 absolute -inset-4 blur-lg"></div>
                <img
                  src="selfimage3.jpeg"
                  alt="Harsh Patel"
                  className="w-80 h-80 object-cover rounded-full shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="About Me" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I am currently a third-year undergraduate student at Cornell University, majoring in Computer Science with a minors in business and artificial intelligence. My passion for software development, particularly in its ability to solve real-world problems, has driven my academic pursuits. Alongside my technical background, I am also dedicated to bridging the gap between business and technology which has allowed me to complement my engineering skills with a broader understanding of the strategic, financial, and operational aspects of technology-driven organizations.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Through coursework and hands-on projects, I have built a strong foundation in AI, ML, full-stack development, and data engineering. I have gained practical experience designing scalable solutions, optimizing data pipelines, and integrating enterprise data systems. These experiences have enhanced my ability to support data-driven decision-making and improve business operations.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Outside of my academic and professional pursuits, I enjoy playing tennis and basketball,
                  hiking, and photography.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-blue-600 mr-2" size={20} />
                    <span className="font-semibold text-slate-800">Location</span>
                  </div>
                  <p className="text-slate-600">New York, NY</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <SportsTennis className="text-blue-600 mr-2" size={20} />
                    <span className="font-semibold text-slate-800">Sport</span>
                  </div>
                  <p className="text-slate-600">Tennis</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <PhotoCamera className="text-blue-600 mr-2" size={20} />
                    <span className="font-semibold text-slate-800">Hobbies</span>
                  </div>
                  <p className="text-slate-600">Photography and Photo Editing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="Education" className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="flex justify-center">
                <img
                  src="cornell.jpg"
                  alt="Cornell University"
                  className="w-auto h-auto object-contain rounded-xl"
                />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-r from-red-400 to-red-600 text-white p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold">Cornell University</h3>
                  <p className="opacity-90">College of Engineering</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-slate-800">Degree:</span>
                    <span className="ml-2 text-slate-600">B.S. in Computer Science</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Minors:</span>
                    <span className="ml-2 text-slate-600">Business (Finance) & Artificial Intelligence</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">GPA:</span>
                    <span className="ml-2 text-slate-600">3.66</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Dean&apos;s List:</span>
                    <span className="ml-2 text-slate-600">Spring '23, Fall '23, Spring '24, Fall '24, Spring '25</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Relevant Coursework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                    <p className="text-slate-700 font-medium text-center">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="Experience" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto"></div>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 rounded-lg mr-4 bg-white p-1 shadow-sm"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{exp.company}</h3>
                        <p className="text-slate-600">{exp.location}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-semibold text-blue-600">{exp.position}</p>
                      <p className="text-slate-500">{exp.duration}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-slate-600 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="Projects" className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedProject(project);
                    setOpenDialog(true);
                  }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{project.name}</h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                      {project.description.substring(0, 120)}...
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-slate-500 text-xs">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {openDialog && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="text-2xl font-bold text-slate-800">{selectedProject.name}</h3>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <button
                  onClick={() => setOpenDialog(false)}
                  className="p-2 bg-slate-200 hover:bg-slate-800 rounded-lg transition-colors duration-200"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">About</h4>
                      <p className="text-slate-600 leading-relaxed">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-slate-800 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-slate-300 mb-8">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>

            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/harshpatel120" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/harshp425" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors duration-200">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-slate-400">© 2024 Harsh Patel. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}