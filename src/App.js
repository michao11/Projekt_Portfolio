import NavBar from "./NavBar";
import './App.css';
import AboutMe from "./AboutMe";
import Separator from "./Separator";
import Projects from "./Projects";
import Skills from "./Skills";
import { useEffect, useRef } from "react";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting) {
              entry.target.classList.add("show")
          }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((element) => observer.observe(element))
  }, [])

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <NavBar scrollToAboutMe={scrollToAboutMe} scrollToExperience={scrollToExperience} scrollToSkills={scrollToSkills} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact}/>
      <div className="ref" ref={aboutMeRef}/>
      <Separator parameter="About me"/>
      <AboutMe/>
      <div className="ref" ref={experienceRef}/>
      <Separator parameter="Experience"/>
      <Experience/>
      <div className="ref" ref={skillsRef}/>
      <Separator parameter="Skills"/>
      <Skills/>
      <div className="ref" ref={projectsRef}/>
      <Separator parameter="Projects"/>
      <Projects/>
      <div className="ref" ref={contactRef}/>
      <Separator parameter="Contact"/>
      <Contact/>
    </div>
  );
}

export default App;
