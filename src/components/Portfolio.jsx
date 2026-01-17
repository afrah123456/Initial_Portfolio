import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Cloud, Phone, MapPin , Briefcase, GraduationCap} from 'lucide-react';


// Add this ContactForm component before your main Portfolio component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mzzjepzv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
        <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
          placeholder="Tell me about your project, internship opportunity, or just say hello!"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </div>
  );
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      title: " 🛒 Online Purchase Intent Prediction ",
      description: [
        "AI-powered purchase intent prediction system that analyzes customer browsing behavior to predict cart abandonment in real-time. The platform uses ensemble machine learning models achieving 86.5% accuracy to provide risk scores and actionable recommendations, helping e-commerce businesses optimize conversion rates. Features a React dashboard with live monitoring and a production-ready FastAPI backend."
  ],
      tech: ["Python", "FastAPI", "React", "XGBoost", "scikit-learn", "Pandas", "NumPy", "Recharts", "Render", "Netlify"],
      
      github: "https://github.com/afrah123456/online-purchase-intent-predictor",
      demo: " https://purchase-intent-predictor.netlify.app/"
    },
    {
      title: " 💰 AI-Driven Financial Risk Management System ",
      description: [

        "A machine learning system that helps financial institutions assess credit risk and predict loan defaults. By analyzing customer financial data, the platform categorizes borrowers into risk levels and provides clear explanations for each prediction, enabling safer and more informed lending decisions. Users can input financial records and receive instant risk assessments with detailed explanations. The system handles large datasets effectively and uses ensemble modeling to balance accuracy with interpretability, helping loan officers make data-driven decisions while understanding the reasoning behind each risk score. This streamlines the credit evaluation process and helps institutions reduce default rates while maintaining fair lending practices."
  ],
      tech: ["Risk Management", "Financial Analytics", "Data Preprocessing", "Ensemble Learning", "Credit Scoring"],
      
      github: "https://github.com/afrah123456/AI-Driven-Financial-Risk-Management-System",
      demo: ""
    },
    {
      title: " 🚀 Spaceship Titanic: Kaggle Binary Classification Challenge",
      description: [
        "A machine learning competition project focused on predicting passenger transportation outcomes using the Spaceship Titanic dataset from Kaggle. The challenge involves analyzing passenger information and voyage details to build accurate classification models that can identify patterns in the data. The system processes passenger records and creates meaningful features from the available data to improve prediction accuracy. Multiple machine learning algorithms are tested and combined to achieve the best possible performance, with careful attention to model evaluation and feature selection to identify which passenger characteristics are most predictive. This project demonstrates end-to-end data science workflow including exploratory analysis, feature engineering, model selection, hyperparameter tuning, and performance optimization in a competitive environment."

  ],
      tech: ["Kaggle Platform", "Hyperparameter Optimization", "Statistical Modeling", "Data Visualization Libraries"],
      
      github: "https://github.com/afrah123456/Spaceship-Titanic-",
      demo: ""
    },
    {
      title: " 💼 Job-Tracker - Scalable Full Stack Application",
      description: [
    "Built a job application management system using React, Node.js, TypeScript, and MySQL with secure JWT authentication",
    "Designed RESTful APIs with Prisma ORM and created responsive UI with Tailwind CSS for optimal user experience", 
    "Developed interactive analytics dashboard with real-time job status visualization, boosting user engagement by 70%",
    "Established CI/CD pipeline on Vercel for automated deployment, reducing manual tracking effort by 75%"
  ],
      tech: ["React", "Node.js", "TypeScript","API Building", "Database Administration","Prisma ORM", "MySQL", "Tailwind CSS", "Vercel"],
      
      github: "https://github.com/afrah123456/Personal-Job-tracking-Application",
      demo: " https://job-portal-peach-zeta.vercel.app/"
    },
    {
      title: "✈️ AI-Powered Travel Planning Assistant",
       description: [
      "Developed an intelligent travel assistant using OpenAI, Hugging Face, FastAPI, and MySQL to automate time-consuming manual planning processes at TravelNet Solutions.",
      "Integrated Beautiful Soup for web scraping and Nominatim API for precise location mapping and geospatial data processing",
      "Built automated itinerary generation, surprise trip planning, and personalized nearby attraction recommendation features",
      "Reduced travel planning time by 80-90% and significantly improved client engagement through AI-driven automation"
    ],
      
      tech: ["Python","OpenAI", "Hugging Face", "FastAPI", "MySQL", "Beautiful Soup", "Nominatim API"],
      
      github: "#",

    },
    {
      title: " 🍕 Husky Eats - Campus Food Ordering Platform",
      description: [
    "Built a comprehensive food ordering platform for Northeastern students and staff using HTML, CSS, Bootstrap, Flask, and MySQL",
    "Designed optimized relational database schema with stored procedures and complex SQL queries, improving performance by 50%. ",
    "Implemented OTP-based authentication and real-time order tracking for enhanced security and user experience",
    "Achieved 98% order processing accuracy and boosted user participation by 60% through secure transactions and intuitive interface"
  ],
      
      tech: ["Flask", "MySQL", "HTML/CSS", "Bootstrap","Data Collection", "Database design","Database administration","Data Modeling","Authentication"],
     
      github: "https://github.com/afrah123456/Husky-Eats",
      
    },
    {
      title: "🖼️  Image Processing Application",
      description: "Developed an image processing application using Java Swing and AWT, following the MVC design pattern, with features like component visualization, image compression and downscaling with a preview functionality for real-time visualization. Achieved over 95% accuracy in image manipulation tasks, boosted processing efficiency by 60%, and enhanced the application's operational effectiveness and user experience.",
      tech: ["Java", "Swing", "AWT", "MVC Pattern", "Design Paradigms", "OOPs"],
     
      github: "https://github.com/afrah123456/Image-Processing-Application",
     
    },
    {
      title: "⚖️ AI-Powered Legal Document Extraction System",
      description: [
    "Built an automated legal document extraction system using Gemini, LLaMA Parse, spaCy, and regex to eliminate manual review processes",
    "Developed ML workflow automation and model deployment pipeline using FastAPI for scalable document processing",
    "Fine-tuned NLP models achieving 85-90% extraction precision and significantly improved processing efficiency for legal clients",
    "Optimized model performance through inference speed and memory usage tuning for handling multi-page document inputs"
  ],
      
      tech: ["Gemini", "LLaMA","LLMs","Data Extraction", "spaCy", "FastAPI", "PDFPlumber", "Regex"],
    
      github: "https://github.com/afrah123456/Invoice_Extraction",
     
    },
    {
      title: "🌾 CNN-Based Automated Grain Size Analysis System",
      description: [
    "Designed a CNN-based deep learning model to automate grain size identification, counting, and measurement, replacing slow and error-prone traditional methods",
    "Achieved 85-90% accuracy in grain analysis while implementing advanced feature extraction and adaptive thresholding techniques",
    "Optimized model performance through custom data preprocessing, reducing computational time by 85% without compromising accuracy",
    "Applied statistical validation and performance benchmarking to deliver actionable insights, earning top performance recognition and commendations from senior data scientists"
  ],
      
      tech: ["Python", "CNN", "TensorFlow", "Computer Vision", "OpenCV"],
      
      github: "#",
      demo: "#"
    },

    {
      title: "🛡️Multilingual Real-Time Profanity Detection with Audio & NLP",
     description: [
      "Developed a real-time multilingual profanity filter for Rajalakshmi Engineering College using Speech-to-Text, NLP, and deep learning technologies",
      "Achieved 95% accuracy in live audio censorship with intelligent content filtering and language detection capabilities",
      "Enhanced processing speed by 30% through parallelized text analysis and Text-to-Speech integration for optimal performance",
      "Deployed API-based system with real-time monitoring, delivering clean transcripts and filtered audio output for institutional use"
    ],
      
      tech: ["Speech-to-Text", "NLP", "Deep Learning", "Text-to-Speech", "API Development", "Real-time Processing", "Python"],
      
      github: "https://github.com/afrah123456/Real-Time-Live-audio-profanity-censorship-system",
     
    },

    {
      title: "🧠 Analysis To Find Relationship Between Mental Trauma, Rape, and Suicide",
     description: [
      "Conducted comprehensive EDA research project under faculty guidance at Rajalakshmi Engineering College, analyzing trauma, suicide, and mental health data patterns",
      "Utilized Python for statistical analysis and data mining to uncover critical correlations and trends in sensitive mental health datasets",
      "Developed interactive business reports and data visualizations, improving data interpretability by 50% for stakeholders",
      "Delivered actionable insights for policymakers and mental health researchers to support evidence-based decision making and intervention strategies"
    ],
      
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Visualization", "Statistical Analysis", "EDA"],

      
      github: "https://github.com/afrah123456/Analysis-to-Find-Relationship-Between-Mental-Trauma-Rape-and-Suicide",
     
    },
     {
      title: "💰 Predictive Modeling for Loan and Insurance Cost Estimation",
    description: [
      "Developed machine learning models , to predict loan eligibility and insurance premiums using comprehensive financial and health datasets",
      "Optimized multiple algorithms including SVM, Decision Trees, Random Forests, and Gradient Boosting, achieving 10% accuracy improvement for loans and 8% for insurance predictions",
      "Conducted advanced feature importance analysis and hypothesis testing to simulate A/B testing scenarios for risk assessment optimization",
      "Applied statistical validation and model interpretability techniques to guide pricing decisions and business strategy improvements for financial institutions"
    ],
      
    tech: ["Python", "SVM", "Decision Trees", "Random Forest", "Gradient Boosting", "Statistical Analysis", "A/B Testing", "Feature Engineering"],

      
      github: "https://github.com/afrah123456/Machine-Learning",
     
    },

    {
      title: "  🤖 AI- Powered Candidate Recommendation Engine",
   description: [
      "Built an intelligent resume screening platform using Flask, SentenceTransformers, and cosine similarity to automate candidate evaluation and job matching",
      "Implemented multi-format document processing supporting PDF, DOCX, and text files with automated text extraction and candidate name recognition",
      "Developed semantic similarity matching using pre-trained transformer models (all-MiniLM-L6-v2) and TF-IDF vectorization for accurate job-resume alignment",
      "Created automated ranking system with keyword analysis and summary generation, streamlining HR workflows and improving candidate selection efficiency"
    ],
      
tech: ["Flask", "SentenceTransformers", "PyMuPDF", "python-docx", "scikit-learn", "TF-IDF", "Cosine Similarity", "NLP"],
      
      github: "https://github.com/afrah123456/candidate_recommendation",
     
    }

  ];

  const skills = {
    "Programming Languages": ["Python", "C", "Java", "JavaScript", "SQL", "TypeScript", "R", "Bash"],
    "Web Technologies": ["HTML/CSS", "React.js", "Bootstrap", "Node.js", "Tailwind CSS", "Flask", "Next.js"],
    "Machine Learning/NLP": ["Scikit-learn", "Keras", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Seaborn", "TensorFlow","SpaCy", "CNNs", "A/B Testing"],
    "Statistical Methods" : ["Hypothesis Testing", "Statistical Modeling", "Experiment Design", "Probability Distributions"],
    "AI & LLM":["OpenAI APIs", "Hugging Face Transformers", "LangChain", "Prompt Engineering"],
    "Databases & APIs": ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "FastAPI", "REST API", "Postman"],
    "DevOps & Tools": ["Git", "Docker", "AWS", "GCP", "Terraform", "JUnit", "Selenium", "Tableau", "Power BI"]
  };

  const experience = [
    {
  role: "Graduate Teaching Assistant", 
  company: "Khoury College of Computer Sciences",
  course: "CS 3100 Program Design and Implementation 2",
  period: "Sep 2025- present",
  achievements: [
    "Mentored students in object-oriented programming, software design patterns, and Java development through interactive lab sessions and hands-on coding exercises.",
    "Conducted code reviews and provided debugging assistance to improve students’ programming logic, code structure, and software design quality." ,   
    "Guided students in applying unit testing, version control, and collaborative development practices to build scalable, maintainable software systems",
    "Supported students during office hours with design decisions, debugging, and conceptual understanding of advanced OOP principles and design patterns."
  ]
},
  {
    role: "Software Developer Intern",
    company: "Brainvault Technologies, India",
    period: "Jan 2024 – June 2024",
    achievements: [
      "Developed a travel planning application for TravelNet Solutions, a property management firm, to automate vacation planning processes that were previously handled through time-consuming manual workflows.",
      
      "Engineered the solution using OpenAI, Python FastAPI, Hugging Face, MySQL, Beautiful Soup, and Nominatim API, enabling personalized itinerary generation, surprise trip planning, and nearby attraction suggestions.",
      
      "Delivered automated features that reduced planning time by 80–90% and improved client engagement, while strengthening expertise in API development, database integration, and AI-driven application design.",
      
      "Contributed to an ongoing U.S.-based client project aimed at automating invoice detail extraction to replace inefficient manual data entry processes using LLMs (Gemini, LLaMA) and PDFPlumber.",
      
      "Achieved 90–95% field-level accuracy in invoice processing, streamlining workflows and significantly reducing manual effort through infrastructure automation and advanced NLP techniques.",
      
      "Actively participated in Zoho Sprint planning meetings, collaborating cross-functionally in an Agile environment to ensure timely delivery, continuous improvement, and enhanced operational efficiency."
    ]
  },
    {
  role: "Machine Learning Intern", 
  company: "Waycool Food and Products Pvt. Ltd, India",
  period: "Sep 2022 – Nov 2022",
  achievements: [
    "Designed a CNN-based deep learning model to automate grain size analysis, addressing the limitations of slow and error-prone traditional methods used in agricultural quality assessment.",
    
    "Achieved 85–90% accuracy in identifying, counting, and measuring grains, significantly improving precision and consistency over manual inspection processes.",
    
    "Optimized model performance through advanced feature extraction, adaptive thresholding, and custom preprocessing techniques, reducing computational time by 85% without sacrificing accuracy.",
    
    "Applied statistical validation and performance benchmarking to deliver actionable insights from computer vision data, enabling data-driven quality control decisions.",
    
    "Received top performance recognition among intern cohort and commendations from senior data scientists for delivering high-quality, impactful results in computer vision and model optimization."
  ]
}
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">

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
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto text-center leading-relaxed">
              Building AI That Solves Real World Problems | MSCS | ML Engineer | From Predictions to Production
            </p>
            
            <div className="flex justify-center items-center space-x-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Boston, MA</span>
              </div>
             
            </div>
            <p className="text-lg text-green-600 mb-8 font-medium">
              🎯 Seeking New Grad roles 2026 opportunities | Willing to relocate
            </p>
            <div className="flex justify-center space-x-4">
              <a href="DataScience-FT.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                View My Resume !!
              </a>
             <a href="#contact" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
  Contact Me
</a>
            </div>
          </div>
        </div>
      </section>
      {/* About Section - Improved with Colors and Alignment */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Background</h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                <p className="text-md opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  I am a Master of Science in Computer Science candidate at Northeastern University with a strong foundation in 
                  software development, machine learning, and data science. My academic and industry experiences have given me the 
                  opportunity to design, build, and deploy impactful solutions that drive measurable results.
                </p>
                
                <p className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  I have worked on notable projects including Job-Tracker, a scalable full-stack application for automating job 
                  application tracking; Husky Eats, a university food ordering platform with secure transactions and real-time 
                  tracking; and an Image Processing Application built with Java Swing using MVC design patterns. These projects 
                  strengthened my skills in full-stack development, database optimization, and user-focused design.
                </p>

                <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <p className="mb-3">
                    From my internship experiences, I have further expanded my skill set. At Brainvault Technologies, I contributed to two key initiatives:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="text-gray-700">
                      Travel Application Backend – engineered backend components using Python (Flask), SQL, and RESTful APIs for data management and integration, which reduced processing time by 30% and improved platform reliability.
                    </li>
                    <li className="text-gray-700">
                      AI-Powered Document Processing System – built pipelines using Large Language Models (LLMs), Python (PyPDF2, LangChain, Hugging Face Transformers), and AWS S3 to extract and process over 900,000 PDFs, which automated a previously manual workflow, cutting human effort by 70% and significantly accelerating data availability for clients.
                    </li>
                  </ul>
                  <p>
                    At Waycool Foods & Products, I applied AI/ML techniques using Python (Pandas, Scikit-learn) and cloud dashboards to optimize supply-chain operations. My contributions automated reporting processes, reduced bottlenecks, and supported data-driven decisions that improved efficiency and boosted revenue growth. This experience, combined with my academic coursework, has given me strong foundations in data science and statistical analysis, including data cleaning, feature engineering, exploratory data analysis (EDA), and visualization using tools like Pandas, NumPy, Matplotlib, and Seaborn.
                  </p>
                </div>

                <p className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                  I have developed expertise in Python, Java, React, Node.js, SQL, Flask, and cloud platforms (AWS, GCP), with 
                  hands-on experience in LLMs, NLP pipelines, data science workflows, and scalable backend systems. My skills 
                  include data cleaning, feature engineering, and visualization using Pandas, NumPy, Matplotlib, and Seaborn.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg opacity-0 animate-fade-in-up" style={{animationDelay: '1.0s'}}>
                  <p className="text-blue-800 font-medium italic">
                    I am eager to apply this blend of software engineering, machine learning, and data science expertise to build 
                    innovative, high-impact technologies while continuing to grow as a developer.
                  </p>
                </div>
              </div>
              
              <style jsx>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                .animate-fade-in-up {
                  animation: fadeInUp 0.8s ease-out forwards;
                }
              `}</style>
              <div className="flex space-x-4 mt-8">
                <a href="https://www.linkedin.com/in/afrah-fathima-b98090241/" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/afrah123456/" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Github className="h-6 w-6" />
                </a>
                <a href="mailto:shahabuddin.af@northeastern.edu" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Education Section - Better Aligned */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <GraduationCap className="h-4 w-4 text-blue-600" />
                </div>
                Education
              </h3>
              <div className="space-y-8">
                {/* Northeastern University */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">Northeastern University</h4>
                      <p className="text-gray-600 text-sm">Boston, MA</p>
                    </div>
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  </div>
                  <div className="mb-3">
                    <p className="text-blue-600 font-semibold text-base">Master of Science in Computer Science</p>
                    <p className="text-gray-600 text-sm font-medium">Sep 2024 - Present</p>
                  </div>
                  <div className="bg-blue-50 rounded-md p-3">
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold text-gray-900">Relevant Coursework:</span><br/>
                      Algorithms, Programming Design Paradigm, DBMS, Cloud Computing, Web Development, Machine Learning , Data Science, Machine Learning Operations
                    </p>
                  </div>
                </div>
                
                {/* Anna University */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">Anna University</h4>
                      <p className="text-gray-600 text-sm">Chennai, India</p>
                    </div>
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  </div>
                  <div className="mb-3">
                    <p className="text-blue-600 font-semibold text-base">Bachelor of Engineering in Computer Science and Engineering</p>
                    <p className="text-gray-600 text-sm font-medium">June 2020 - May 2024</p>
                  </div>
                  <div className="bg-blue-50 rounded-md p-3">
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold text-gray-900">Relevant Coursework:</span><br/>
                      Programming with C, Database Management Systems, Design and analysis of algorithms, Computer Networks, Operating Systems, Machine Learning, Foundations of Artificial Intelligence, Software Engineering, Data Structures
                    </p>
                  </div>
                </div>

                {/* Areas of Interest */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-7 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-gray-900 text-lg mb-5 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <Code className="h-4 w-4 text-white" />
                    </div>
                    Areas of Interest
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      Full-Stack Development
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      Cloud Computing
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      Data Engineering
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      AI & Machine Learning
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      NLP & LLMs
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      Computer Vision
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      Data Science
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      Statistical Modeling
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      Explainable AI
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      Backend Engineering
                    </div>
                    <div className="flex items-center text-sm text-gray-700 bg-white bg-opacity-70 rounded-md p-2 hover:bg-opacity-100 transition-all">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-2 flex-shrink-0"></div>
                      MLOps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-teal-50">
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
      <section id="skills" className="py-20 bg-blue-50">
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
      <section id="projects" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">💻 What I've Built</h2>
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
                  <p className="text-gray-600 text-justify mb-4 leading-relaxed">{project.description}</p>
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
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        📬 Get In Touch
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        I’m looking forward to exploring internship opportunities and teaming up on exciting projects or research collaborations.</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">Email</h4>
              <p className="text-gray-600">shahabuddin.af@northeastern.edu</p>
            </div>
          </div>

          

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">Location</h4>
              <p className="text-gray-600">Boston</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <p className="text-black-800 font-medium mb-2"> Let’s Collaborate On </p>
          <ul className="text-green-700 space-y-1">
            <li>• New Grad roles 2026 </li>
            <li>• AI/ML & Data Science Projects</li>
            <li>• Full-Stack Development Work</li>
            <li>• Research Collaborations </li>
            <li>• Open source projects </li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/afrah-fathima-b98090241/" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="https://github.com/afrah123456/" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github className="h-8 w-8" />
          </a>
        </div>
      </div>

      {/* Contact Form */}
 <div className="bg-gray-50 rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send me a message</h3>
        <ContactForm />
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


