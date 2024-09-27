import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { svgsCarousel } from '../../helpers/svgs';
import { settings } from './settingsSlider';
export const Carousel = () => {
  return (
    <div className="carousel">
      <Slider {...settings}>
        {svgsCarousel.map((s) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={s.view}
            width={50}
            height={50}
            fill="#fff"
          >
            <path d={s.d} />
          </svg>
        ))}
      </Slider>
    </div>
  );
};
