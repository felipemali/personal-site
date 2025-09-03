import './style.scss';
import hq from '../../../assets/hq.png';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const MarvelHQs = () => {
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
      className="update-csv"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      <div className="update-csv-text">
        <h2>Loja de HQs</h2>
        <p>
          Desenvolvi uma aplicação full stack com
          <span> React + TypeScript + Vite e Redux Toolkit</span> no front-end,
          integrada a <span>API REST em Node.js/Express</span> com mock de 100
          HQs. O projeto conta com paginação, filtros, persistência no
          <span>LocalStorage</span>, validação com <span>Zod</span>, testes E2E
          com <span>Cypress</span>, deploy (Vercel/Render) e conteinerização com
          <span>Docker</span>.
        </p>
      </div>
      <a href="https://h-qs-marvel.vercel.app/">
        <h5>Clique na imagem para acessar</h5>
        <div className="update-csv-image">
          <img src={hq} alt="Marvel HQs" />
        </div>
      </a>
    </motion.div>
  );
};
