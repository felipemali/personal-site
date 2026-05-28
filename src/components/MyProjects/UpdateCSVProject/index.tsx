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
          Aplicação PWA (Progressive Web App) criada para a integração direta
          com balanças digitais permitindo a captura automática de dados (peso e
          identificação) de bovinos em tempo real. Desenvolvida com React.js,
          Vite e TypeScript no front-end, integrando-se a API REST. Utilizei Yup
          para validação de dados e csv-parser para o processamento de arquivos
          CSV. Contei com o suporte do GitHub Copilot para revisão de código e
          sugestões de boas práticas, o que elevou a qualidade do
          desenvolvimento e otimizou a gestão de dados no sistema e-Bov.
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
