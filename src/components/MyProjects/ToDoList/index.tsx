import './style.scss';
import to_do from '../../../assets/to_do.png';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const TodoList = () => {
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
    <div className="my-projects">
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
        <a href="https://to-do-list-nextjs-lfi3.vercel.app/">
          <h5>Clique na imagem para acessar</h5>
          <div className="my-projects-image">
            <img src={to_do} alt="to_do" />
          </div>
        </a>

        <div className="my-projects-text">
          <h2>Todo List</h2>
          <p>
            Desenvolvi uma aplicação web de lista de tarefas (Todo List) com
            foco em organização pessoal e colaboração entre usuários, utilizando
            Next.js e Firebase para estruturação do projeto e banco de dados em
            tempo real. A autenticação foi implementada com NextAuth, garantindo
            segurança e praticidade no login. O aplicativo permite que cada
            usuário crie contas pessoais com opção de tornar tarefas públicas ou
            privadas, além de possibilitar o compartilhamento de links para
            tarefas públicas. Também implementei um sistema de comentários nas
            tarefas públicas, promovendo a interação entre usuários. A aplicação
            foi hospedada na Vercel, assegurando performance e integração
            contínua com o ambiente de desenvolvimento. Ferramentas utilizadas:
            <span>Next.js, Typescript, Fireabse</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
