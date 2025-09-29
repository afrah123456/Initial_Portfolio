import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Cloud, Phone, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      title: "Job-Tracker - Scalable Full Stack Application",
      description: "Developed and deployed a full-stack job application tracker using React, Node.js, TypeScript, Prisma ORM, and MySQL, featuring secure JWT authentication, RESTful APIs, and a CI/CD pipeline on Vercel for streamlined deployment. Designed a responsive, accessible UI with Tailwind CSS and built an interactive analytics dashboard that visualized job status metrics, boosting user engagement by 70% and reducing manual tracking effort by 75%.",
      tech: ["React", "Node.js", "TypeScript", "Prisma ORM", "MySQL", "Tailwind CSS", "Vercel"],
      timeline: "Jan 2025 – Apr 2025",
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Travel Assistant - TravelNet Solutions",
      description: "Addressed time-consuming travel planning at TravelNet Solutions by developing a smart assistant using OpenAI, Hugging Face, FastAPI, MySQL, Beautiful Soup, and Nominatim API for automated itinerary creation and location mapping. Delivered features such as automated itineraries, surprise trip planning, and nearby attraction suggestions, reducing planning time by 80–90% and improving client engagement.",
      tech: ["OpenAI", "Hugging Face", "FastAPI", "MySQL", "Beautiful Soup", "Nominatim API"],
      timeline: "Jan 2024 – June 2024",
      github: "#",
      demo: "#"
    },
    {
      title: "Husky Eats – University Food Ordering Platform",
      description: "Engineered a food ordering platform for Northeastern students and staff, enabling orders from on-campus and nearby locations, with frontend built using HTML, CSS, Bootstrap, and backend powered by Flask and MySQL. Designed relational database schema with stored procedures and complex SQL queries, improving query performance by 50% and ensuring 98% order processing accuracy. Integrated OTP-based authentication and real-time order tracking.",
      tech: ["Flask", "MySQL", "HTML/CSS", "Bootstrap", "OTP Authentication"],
      timeline: "Sep 2024 – Dec 2024",
      github: "#",
      demo: "#"
    },
    {
      title: "Image Processing Application",
      description: "Developed an image processing application using Java Swing and AWT, following the MVC design pattern, with features like component visualization, image compression and downscaling with a preview functionality for real-time visualization. Achieved over 95% accuracy in image manipulation tasks, boosted processing efficiency by 60%, and enhanced the application's operational effectiveness and user experience.",
      tech: ["Java", "Swing", "AWT", "MVC Pattern"],
      timeline: "Sep 2024 – Dec 2024",
      github: "#",
      demo: "#"
    },
    {
      title: "NLP Agent for Legal Document Understanding",
      description: "Built an automated legal document extraction system for a legal client, using Gemini, LLaMA Parse, spaCy, and regex to reduce manual review and structure legal data. Fine-tuned NLP models to boost accuracy, achieving 85–90% extraction precision and improving processing efficiency for the client. Used LLMs (Gemini, LLAMA) and PDFPlumber to achieve 90–95% field-level accuracy.",
      tech: ["Gemini", "LLaMA", "spaCy", "FastAPI", "PDFPlumber", "Regex"],
      timeline: "Jan 2024 – Jun 2024",
      github: "#",
      demo: "#"
    },
    {
      title: "CNN-based Grain Size Analysis for Agriculture",
      description: "Traditional methods for analyzing grain size were slow and error-prone; designed a CNN-based deep learning model to identify, count, and measure grain sizes with 85–90% accuracy, significantly improving precision and consistency. Enhanced model performance by applying advanced feature extraction, adaptive thresholding, and custom data preprocessing, reducing computational time by 85% without compromising accuracy.",
      tech: ["Python", "CNN", "TensorFlow", "Computer Vision", "OpenCV"],
      timeline: "Sep 2022 – Nov 2022",
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C", "Java", "JavaScript", "SQL", "TypeScript", "R", "Bash"],
    "Web Technologies": ["HTML/CSS", "React.js", "Bootstrap", "Node.js", "Tailwind CSS", "Flask", "Next.js"],
    "Machine Learning/AI": ["Scikit-learn", "Keras", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Seaborn", "TensorFlow", "OpenAI APIs", "Hugging Face", "LangChain"],
    "Databases & APIs": ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "FastAPI", "REST API", "Postman"],
    "DevOps & Tools": ["Git", "Docker", "AWS", "GCP", "Terraform", "JUnit", "Selenium", "Tableau", "Power BI"]
  };

  const experience = [
    {
      role: "Software Developer Intern",
      company: "Brainvault Technologies, India",
      period: "Jan 2024 – June 2024",
      achievements: [
        "Developed smart travel assistant using OpenAI, Hugging Face, FastAPI reducing planning time by 80-90%",
        "Built automated legal document extraction pipeline achieving 90-95% field-level accuracy",
        "Collaborated cross-functionally to deploy AI-powered tools for process automation"
      ]
    },
    {
      role: "Machine Learning Intern", 
      company: "Waycool Food and Products Pvt. Ltd, India",
      period: "Sep 2022 – Nov 2022",
      achievements: [
        "Designed CNN-based deep learning model for grain size analysis with 85-90% accuracy",
        "Reduced computational time by 85% through advanced preprocessing techniques",
        "Earned top performance scores and commendation from senior data scientists"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Afrah Fathima S</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#experience" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</a>
                <a href="#skills" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white">
                AF
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm <span className="text-blue-600">Afrah Fathima S</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
              Graduate student in Computer Science with experience in full-stack development and AI/ML solutions across travel tech, legal automation, and agri-tech domains
            </p>
            <div className="flex justify-center items-center space-x-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Boston, MA</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 617-397-8937</span>
              </div>
            </div>
            <p className="text-lg text-green-600 mb-8 font-medium">
              🎯 Seeking internship opportunities | Open to relocation
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                View My Work
              </a>
              <a href="mailto:shahabuddin.af@northeastern.edu" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Background</h3>
              <p className="text-gray-600 mb-6">
                I'm a Graduate student in Computer Science at Northeastern University with hands-on experience in 
                full-stack development and AI/ML solutions. I'm skilled in building scalable applications and intelligent 
                systems using modern frameworks and cloud technologies.
              </p>
              <p className="text-gray-600 mb-6">
                My experience spans across diverse domains including travel tech at TravelNet Solutions, legal automation, 
                and agri-tech at Waycool Food and Products. I'm passionate about contributing to impactful and data-driven 
                software solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/yourusername" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="mailto:shahabuddin.af@northeastern.edu" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Northeastern University, Boston, MA</h4>
                  <p className="text-blue-600 font-medium">Master of Science in Computer Science</p>
                  <p className="text-gray-600 text-sm">Sep 2024 - Present</p>
                  <p className="text-gray-500 text-sm">Relevant Coursework: Algorithms, Programming Design Paradigm, DBMS, Cloud Computing, Web Development</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900">Anna University, Chennai, India</h4>
                  <p className="text-blue-600 font-medium">Bachelor of Engineering in Computer Science and Engineering</p>
                  <p className="text-gray-600 text-sm">June 2020 - May 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 flex">
                      <span className="text-blue-600 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          </div>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  {category === "Programming Languages" && <Code className="h-6 w-6 text-blue-600 mr-3" />}
                  {category === "Databases & APIs" && <Database className="h-6 w-6 text-blue-600 mr-3" />}
                  {category === "DevOps & Tools" && <Cloud className="h-6 w-6 text-blue-600 mr-3" />}
                  {!["Programming Languages", "Databases & APIs", "DevOps & Tools"].includes(category) && <Code className="h-6 w-6 text-blue-600 mr-3" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-3 ${index % 6 === 0 ? 'bg-gradient-to-r from-blue-400 to-purple-600' : 
                                        index % 6 === 1 ? 'bg-gradient-to-r from-green-400 to-blue-600' :
                                        index % 6 === 2 ? 'bg-gradient-to-r from-purple-400 to-pink-600' :
                                        index % 6 === 3 ? 'bg-gradient-to-r from-yellow-400 to-orange-600' :
                                        index % 6 === 4 ? 'bg-gradient-to-r from-indigo-400 to-purple-600' :
                                        'bg-gradient-to-r from-pink-400 to-red-600'}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{project.timeline}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm actively seeking internship opportunities and always open to discussing new projects and collaborations
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">shahabuddin.af@northeastern.edu</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 617-397-8937</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Boston, MA</p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-6">
                <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="https://github.com/yourusername" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="h-8 w-8" />
                </a>
              </div>
              <a href="mailto:shahabuddin.af@northeastern.edu" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Afrah Fathima S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


