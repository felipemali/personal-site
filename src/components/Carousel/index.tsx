import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { svgss } from '../../helpers/svgs';
import { settings } from './settingsSlider';
export const Carousel = () => {
  
  return (
    <div className="carousel">
      <Slider {...settings}>
        {svgss.map((s) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={s.view}
            width={60}
            height={60}
            fill="#fff"
          >
            <path d={s.d} />
          </svg>
        ))}
      </Slider>
    </div>
  );
};
