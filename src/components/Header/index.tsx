import { MobileMenu } from '../MobileMenu';
import './style.scss';

type HeaderProps = {
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};
export const Header = ({ aboutRef, projectsRef, contactRef }: HeaderProps) => {
  const handleScrollToAbout = (e: React.RefObject<HTMLDivElement>) => {
    if (e.current) {
      e.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header>
      <div className="header">
        <div className="header-name">
          <span>s Felipe.Dev</span>
        </div>
        <div className="header-options">
          <a href="#">
            <span>Home</span>
          </a>
          <span onClick={() => handleScrollToAbout(aboutRef)}>Sobre</span>
          <span onClick={() => handleScrollToAbout(projectsRef)}>Projetos</span>
          <span onClick={() => handleScrollToAbout(contactRef)}>Contato</span>
          <a className="header-curriculo" href="/curriculo.pdf" download>
            Baixar CV
          </a>
        </div>
      </div>
      {window.innerWidth <= 1080 && <MobileMenu />}
    </header>
  );
};
