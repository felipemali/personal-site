import { LopesAdvocacia } from './LopesAdvocacia';
import { TodoList } from './ToDoList';
import { UpdateCSVProject } from './UpdateCSVProject';

type MyProjectsProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};
export const MyProjects = ({ projectsRef }: MyProjectsProps) => {
  return (
    <>
      <LopesAdvocacia projectsRef={projectsRef} />
      <UpdateCSVProject />
      <TodoList />
    </>
  );
};
