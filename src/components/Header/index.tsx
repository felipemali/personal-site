import './style.scss';
export const Header = () => {
  return (
    <header className="header">
      <div className="header-name">
        <span>s Felipe.Dev</span>
      </div>
      <div className="header-options">
        <span>Home</span>
        <span>Sobre</span>
        <span>Projetos</span>
        <span>Contato</span>
        <button>Baixar CV</button>
      </div>
    </header>
  );
};
