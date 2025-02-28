import React, { useEffect, useRef } from 'react';

const Experience: React.FC = () => {
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

  const education = [
    {
      degree: "Bachelors of Technology - CSE (7.48 CGPA)",
      institution: "Kakinada Institute of Technology and Science",
      period: "2020 - 2024",
      location: "Andhra Pradesh, India"
    },
    {
      degree: "Intermediate - MPC (8.38 CGPA)",
      institution: "KSN Junior college",
      period: "2018 - 2020",
      location: "Andhra Pradesh, India"
    },
    {
      degree: "SSC (9.3 CGPA)",
      institution: "Sadhana High School",
      period: "2017 - 2018",
      location: "Andhra Pradesh, India"
    }
  ];

  const internships = [
    {
      position: "Python Programming Intern",
      company: "Tanvika Solutions Pvt Limited",
      period: "02/2023 – 04/2023",
      location: "Hyderabad, India",
      responsibilities: [
        "Developed and implemented Python-based solutions to improve the functionality of web applications",
        "Worked on maintaining and optimizing web apps, gaining hands-on experience in back-end development",
        "Collaborated with the team to troubleshoot technical issues and enhance application performance"
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            Education & <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto animate-on-scroll opacity-0 animation-delay-200"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center animate-on-scroll opacity-0 animation-delay-400">
              <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${600 + (index * 200)}ms` }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                    <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{item.institution}</p>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Internships */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center animate-on-scroll opacity-0 animation-delay-400">
              <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {internships.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${600 + (index * 200)}ms` }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                    <h4 className="text-xl font-bold mb-1">{item.position}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{item.company}</p>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      {item.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;