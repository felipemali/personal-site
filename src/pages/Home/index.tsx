import { Carousel } from '../../components/Carousel';
import { ContactBanner } from '../../components/ContactBanner';
import { Header } from '../../components/Header';
import './style.scss';
export const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <ContactBanner />
        <Carousel />
      </main>
    </div>
  );
};
