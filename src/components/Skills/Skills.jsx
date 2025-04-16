import { skillsBlock } from '../../constants/data.js';

import classNames from 'classnames/bind';

import styles from './Skills.module.css'

const cx = classNames.bind(styles)

const Skills = () => {

  return (
    <section className={cx('container', 'skills')} id={skillsBlock.id}>
      <div className={cx('skills-wrapper')}>
        <h2 className={cx('skills-title')}>{skillsBlock.label}</h2>
        <ul className={cx('skills-list')} data-aos='fade-up'>
          {skillsBlock.skills.map((skill, index) => (
            <li key={index} className={cx('skill')} data-aos='fade-up'>
              <h4 className={cx('skill-title')}>
                <skill.icon className={cx('skill-icon')} />
                <span className={cx('skill-label')}>{skill.label}</span>
              </h4>
              <p className={cx('skills-description')}>{skill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
