import React, { useEffect, useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section"));
    
      // Sort sections by offsetTop DESC to prioritize lower sections first
      sections.sort((a, b) => b.offsetTop - a.offsetTop);
    
      const scrollY = window.scrollY + 100; // 100 = offset buffer to trigger earlier
    
      for (let section of sections) {
        const top = section.offsetTop;
        if (scrollY >= top) {
          setActiveSection(section.getAttribute("id"));
          break;
        }
      }
    };
    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="logo">
        <a href="#">Monikaa <span>M</span></a>
      </div>

      <label htmlFor="hamburg" className="mainicon">
        <div className="menu">
          <label className="hamburger">
            <input type="checkbox" id="hamburg" />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </label>

      <nav id="nav-bar">
        <a href="#home" className={activeSection === "home" ? "active-link" : ""}>Home</a>
        <a href="#skills" className={activeSection === "skills" ? "active-link" : ""}>Skills</a>
        <a href="#projects" className={activeSection === "projects" ? "active-link" : ""}>Projects</a>
        <a href="#experience" className={activeSection === "experience" ? "active-link" : ""}>Experience</a>
        <a href="#contact" className={activeSection === "contact" ? "active-link" : ""}>Contact</a>

        <div className="mode-toggle">
          <label className="toggle" htmlFor="switch">
            <input id="switch" className="input theme-switch" type="checkbox" />
            <div className="icon icon--moon">
              <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
              </svg>
            </div>

            <div className="icon icon--sun">
              <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </div>
          </label>
        </div>
      </nav>

      <div className="mode-toggle small">
        <label className="toggle" htmlFor="switch">
          <input id="switch" className="input theme-switch" type="checkbox" />
          <div className="icon icon--moon">
            <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
            </svg>
          </div>
          <div className="icon icon--sun">
            <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>
        </label>
      </div>
    </header>
  );
};

export default Header;
