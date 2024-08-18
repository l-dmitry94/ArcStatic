import { FC } from 'react';
import { IProjectList } from './Projects.types';
import ProjectsListItem from './ProjectsListItem';
import scss from './ProjectsList.module.scss';

const ProjectsList: FC<IProjectList> = ({ projects }) => {
    return (
        <ul className={scss.projectsList}>
            {projects.map((project) => (
                <ProjectsListItem key={project.id} {...project} />
            ))}
        </ul>
    );
};

export default ProjectsList;
