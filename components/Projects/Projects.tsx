import ProjectsHead from './ProjectsHead';
import ProjectsList from './ProjectsList';
import projectsData from './projects-data';
import scss from './Projects.module.scss';

const Projects = () => {
    return (
        <section id="projects" className={scss.section}>
            <ProjectsHead />
            <ProjectsList projects={projectsData} />
        </section>
    );
};

export default Projects;
