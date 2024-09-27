import './style.scss';
import lopes from '../../assets/lopes.png';
export const MyProjects = () => {
  return (
    <div className="my-projects">
      <h1>Meus Projetos</h1>
      <div className="my-projects-container">
        <div className="my-projects-image">
          <img src={lopes} alt="lopes advocacia" />
        </div>
        <div className="my-projects-text">
          <h2>Lopes Advocacia</h2>
          <p>
            Liderei o desenvolvimento de um website personalizado para um
            cliente advogado, onde utilizei meu domínio em
            <span>JavaScript, React.js, Vite, Typescript e Sass</span>,
            oferecendo serviço de qualidade com minha experiência nessas
            tecnologias.
          </p>
        </div>
      </div>
    </div>
  );
};
