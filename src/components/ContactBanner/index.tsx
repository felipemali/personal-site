import './style.scss';
import person from '../../assets/person.png';
import { svgs } from '../../helpers/svgs';
import useAnimatedText from '../../hooks/useAnimatedText';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ContactBanner = () => {
  const animetedText = useAnimatedText(
    'Para transformar suas ideias em experiências incríveis?'
  );
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="contact-banner">
      <motion.div
        className="contact-banner-details"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <p>Precisa de um</p>
        <p className="contact-banner-name-dev">Desenvolvedor Web</p>
        <p>{animetedText}</p>

        <div className="contact-banner-icons">
          {svgs.map((s, index) => (
            <div className="contact-banner-container-svg" key={index}>
              <a href={s.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={s.view}
                  width={40}
                  height={40}
                  fill="#fff"
                >
                  <path d={s.d} />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="contact-banner-image">
        <img src={person} alt="person" />
      </div>
    </div>
  );
};
