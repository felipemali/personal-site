import { Link } from 'react-router-dom';
import { items } from '../../helpers/itemsMenu';
import './style.scss';

export const MobileMenu = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />

          <div className="header-name">
            <span>s Felipe.Dev</span>
          </div>
          {/* <div className="menu-items">
            {items.map(({ name, link }, index) => (
              <li key={`items-${index + 1}`}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </div> */}
          <div className="hamburger-lines">
            {innerWidth <= 1360 && (
              <>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
