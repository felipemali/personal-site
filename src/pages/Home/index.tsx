import { About } from '../../components/About';
import { Carousel } from '../../components/Carousel';
import { ContactBanner } from '../../components/ContactBanner';
import { Header } from '../../components/Header';
import { MyProjects } from '../../components/MyProjects';
export const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <ContactBanner />
        <Carousel />
        <About />
        <MyProjects />
      </main>
    </div>
  );
};
