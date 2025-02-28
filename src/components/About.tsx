import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto animate-on-scroll opacity-0 animation-delay-200"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll opacity-0 animation-delay-400">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                alt="Developer working" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-blue-600 dark:border-blue-400 rounded-lg z-0"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 animate-on-scroll opacity-0 animation-delay-600">
              Full Stack Developer & Computer Science Graduate
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 animate-on-scroll opacity-0 animation-delay-800">
              A highly motivated and enthusiastic Computer Science graduate seeking an opportunity as a Full Stack Developer. Passionate about software development, with a solid understanding of web development fundamentals and a keen interest in working with modern front-end and back-end technologies.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 animate-on-scroll opacity-0 animation-delay-1000">
              Eager to apply academic knowledge in a collaborative environment, contributing to innovative solutions while expanding skills in full-stack development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-on-scroll opacity-0 animation-delay-1200">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                <span className="font-medium">Name:</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Venkata Anjesh Tummala</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                <span className="font-medium">Email:</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">anjeshvenkata@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                <span className="font-medium">Phone:</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">+91 9573386337</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                <span className="font-medium">Location:</span>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Andhra Pradesh, India</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg inline-block animate-on-scroll opacity-0 animation-delay-1400"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;