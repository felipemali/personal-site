import './style.scss';
import lopes from '../../../assets/lopes.png';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type LopesAdvocaciaProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};
export const LopesAdvocacia = ({ projectsRef }: LopesAdvocaciaProps) => {
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
    <div className="my-projects" ref={projectsRef}>
      <h1>Meus Projetos</h1>
      <motion.div
        className="my-projects-container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <a href="https://www.regislopes.com/">
          <h5>Clique na imagem para acessar</h5>
          <div className="my-projects-image">
            <img src={lopes} alt="lopes advocacia" />
          </div>
        </a>

        <div className="my-projects-text">
          <h2>Lopes Advocacia</h2>
          <p>
            Liderei o desenvolvimento de um website personalizado para um
            cliente da área jurídica, utilizando React.js, Vite e Sass. O
            projeto contribuiu para aumentar a presença digital do escritório,
            facilitar a captação de novos clientes e melhorar a disponibilização
            de informações sobre serviços jurídicos, onde utilizei meu domínio
            em
            <span>JavaScript, React.js, Vite, Typescript e Sass</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
