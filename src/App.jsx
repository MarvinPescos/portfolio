import Sidebar from './components/layout/Sidebar';
import Nav from './components/layout/Nav';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TechStackSection from './components/sections/TechStackSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';
import useReveal from './hooks/useReveal';
import './App.css';

function App() {
  useReveal();

  return (
    <>
      <Loader />
      <div className="layout">
        <Sidebar />
        <main className="main">
          <Nav />
          <AboutSection />
          <ProjectsSection />
          <TechStackSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
