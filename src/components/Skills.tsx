import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

  const skills = {
    programming: [
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "C", level: 75 },
      { name: "SQL", level: 70 }
    ],
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 75 }
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "Django", level: 80 },
      { name: "RESTful APIs", level: 75 }
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Agile/Scrum", level: 70 }
    ]
  };

  const certificates = [
    "Introduction to HTML, CSS & JavaScript",
    "Developing Front-End Apps with React",
    "Introduction to Cloud Computing",
    "Getting Started with Git & GitHub"
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 animate-on-scroll opacity-0 animation-delay-200"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 animation-delay-400">
            Here are my technical skills and competencies that I've developed through education, projects, and professional experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Programming Languages */}
          <div className="animate-on-scroll opacity-0 animation-delay-600">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Programming Languages
            </h3>
            
            <div className="space-y-6">
              {skills.programming.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frontend Development */}
          <div className="animate-on-scroll opacity-0 animation-delay-800">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Frontend Development
            </h3>
            
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Development */}
          <div className="animate-on-scroll opacity-0 animation-delay-1000">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </span>
              Backend Development
            </h3>
            
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="animate-on-scroll opacity-0 animation-delay-1200">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Tools & Technologies
            </h3>
            
            <div className="space-y-6">
              {skills.tools.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certificates */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 animate-on-scroll opacity-0 animation-delay-1400">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            Certificates & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((certificate, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{certificate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;