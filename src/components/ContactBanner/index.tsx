import './style.scss';
import person from '../../assets/person.png';
import { svgs } from '../../helpers/svgs';

export const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <div className="contact-banner-details">
        <p>Precisa de um</p>
        <p className="contact-banner-name-dev">Desenvolvedor Web</p>
        <p>Para transformar suas ideias em experiências incríveis?</p>

        <div className="contact-banner-icons">
          {svgs.map((s) => (
            <div className="contact-banner-container-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={s.view}
                width={40}
                height={40}
                fill="#fff"
              >
                <path d={s.d} />
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-banner-image">
        <img src={person} alt="person" />
      </div>
    </div>
  );
};
