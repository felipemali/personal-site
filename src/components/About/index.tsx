import './style.scss';
import me from '../../assets/mee.jpeg';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      <div className="about">
        <div className="about-image">
          <img src={me} alt="" />
        </div>
        <div className="about-text">
          <h1>Sobre mim</h1>
          <p>
            Me Chamo Felipe Lima e sou desenvolvedor Web. Possuo habilidades em
            <span>
              Javascript, React.js, Typescript, MongoDB, Sass, Bootstrap,
              Styled-components, Jest, Cypress, CI/CD, TypeORM, Prisma, entre
              outros.
            </span>
          </p>
          <p>
            Fui vendedor por 2 anos, onde desenvolvi minhas SoftSkills, como:
            disciplina, persistência, criatividade, estudo, resiliência, escuta
            ativa, memória, empatia, discernimento estético e etc.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
