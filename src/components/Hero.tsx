import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Animate text on load
    const nameElement = nameRef.current;
    const roleElement = roleRef.current;
    
    if (nameElement && roleElement) {
      nameElement.classList.add('animate-fade-in');
      setTimeout(() => {
        roleElement.classList.add('animate-fade-in');
      }, 400);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 opacity-0 animate-fade-in">Hello, I'm</p>
            <h1 
              ref={nameRef} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 tracking-tight"
            >
              Venkata Anjesh <span className="text-blue-600 dark:text-blue-400">Tummala</span>
            </h1>
            <h2 
              ref={roleRef} 
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 opacity-0"
            >
              Full Stack Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 opacity-0 animate-fade-in animation-delay-600">
              A highly motivated and enthusiastic Computer Science graduate passionate about creating innovative web solutions with modern technologies.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 opacity-0 animate-fade-in animation-delay-800">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="src/images/Venkata%20Anjesh%20Tummala%20(1).pdf" target="_blank">Download PDF
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4 opacity-0 animate-fade-in animation-delay-1000">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/venkata-anjesh-tummala-0a2333237" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:anjeshvenkata@gmail.com" 
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="tel:+919573386337" 
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600 dark:bg-blue-500 bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center p-2 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
                  <img 
                    src="../src/images/Anjesh.jpg" 
                    alt="Venkata Anjesh Tummala" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
