import classNames from 'classnames/bind'

import {projectsBlock} from '../../constants/data.js'
import MainTitle from '../MainTitle'

import styles from './Projects.module.css'

const cx = classNames.bind(styles)

const Projects = () => {
  const {label, id, projects} = projectsBlock

  return (
    <section className={cx('container', 'projects')} id={id}>
      <div className={cx('wrapper')} data-aos='fade-up'>
        <MainTitle title={label}/>
        <ul className={cx('projects-list')}>
          {projects.map((project, index) => (
            <li className={cx('project')} key={index}>
              <h3 className={cx('project-title')}>{project.name}</h3>
              <div className={cx('split-container')}>
                <a
                  href={project.mainLink}
                  className={cx('link', `${project.secondImage ? 'main-link' : ''}`)}
                >
                  <img src={project.mainImage} alt={project.name}/>
                </a>
                {project?.secondImage && (
                  <a
                    href={project.secondLink}
                    className={cx('link', 'second-link')}
                  >
                    <img src={project.secondImage} alt={project.name}/>
                  </a>
                )}
              </div>
              <ul className={cx('skills')}>
                {project.skills.map((skill, i) => (
                  <li className={cx('skill')} key={i}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
