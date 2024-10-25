import './style.scss';
import updatecsv from '../../../assets/updatecsv.png';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const UpdateCSVProject = () => {
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
        <h2>UpdateCSV</h2>
        <p>
          Lidero o desenvolvimento de um aplicativo crucial para importação de
          arquivos CSV e integração com APIs, contribuindo para a otimização do
          processo de gestão de dados no contexto do aplicativo e-bov. Utilizei
          ferramentas, como
          <span>React.js, Typescript, Vite, yup e papaparse</span>, oferecendo
          serviço de qualidade com minha experiência nessas tecnologias.
        </p>
      </div>
      <a href="https://update-csv.vercel.app/">
        <h5>Clique na imagem para acessar</h5>
        <div className="update-csv-image">
          <img src={updatecsv} alt="lopes advocacia" />
        </div>
      </a>
    </motion.div>
  );
};
