import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const projects = [
    {
      title: "KM Vascular Care Hospital Website",
      description: "Developed a robust and user-friendly website for KM Vascular Care using PHP, delivering an effective online presence for the healthcare organization.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://kmascularcare.in",
      github: "#",
      category: "web",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"]
    },
    {
      title: "Audio to Sign Language Conversion Web App",
      description: "Developed a web application using Django to convert audio speech into sign language gestures, enhancing accessibility for the hearing and speech-impaired community.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "#",
      github: "#",
      category: "ai",
      technologies: ["Django", "Python", "Speech Recognition", "Machine Learning", "HTML/CSS"]
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 animate-on-scroll opacity-0 animation-delay-200"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 animation-delay-400">
            Here are some of my recent projects that showcase my skills and experience in web development and software engineering.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex justify-center mb-12 animate-on-scroll opacity-0 animation-delay-600">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeTab === 'web' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Web Development
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeTab === 'ai' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              AI & ML
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0"
              style={{ animationDelay: `${800 + (index * 200)}ms` }}
            >
              <div className="relative overflow-hidden group h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Live
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300"
                      >
                        <GitHub className="h-4 w-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;