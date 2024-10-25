import { useRef } from 'react';
import { About } from '../../components/About';
import { Carousel } from '../../components/Carousel';
import { ContactBanner } from '../../components/ContactBanner';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MyProjects } from '../../components/MyProjects';
export const Home = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Header
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <main>
        <ContactBanner />
        <Carousel />
        <About reff={aboutRef} />
        <MyProjects projectsRef={projectsRef} />
      </main>
      <Footer contactRef={contactRef} />
    </>
  );
};
