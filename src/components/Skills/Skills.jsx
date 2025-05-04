import {useState} from 'react'
import classNames from 'classnames/bind'

import MainTitle from '../MainTitle'
import Icon from '../Icon'
import Button from '../Button'
import { skillsBlock } from '../../constants/data.js'

import styles from './Skills.module.css'

const cx = classNames.bind(styles)

const Skills = () => {
  const [showAll, setShowAll] = useState(false)
  const {label, id, skills} = skillsBlock
  const showSkills = showAll ? skills : skills.slice(0, 9)

  const handleShowClick = () => {
    if(showAll) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => {
        setShowAll(false)
      }, 600)
    } else {
      setShowAll(true)
    }
  }

  return (
    <section className={cx('container', 'skills')} id={id}>
      <div className={cx('skills-wrapper')} data-aos='fade-up'>
        <MainTitle title={label} />
        <ul className={cx('skills-list')}>
          {showSkills.map((skill, index) => (
            <li key={index} className={cx('skill')}>
              <h4 className={cx('skill-title')}>
                <Icon className={cx('skill-icon')} name={skill.icon}/>
                <span className={cx('skill-label')}>{skill.label}</span>
              </h4>
              <p className={cx('skills-description')}>{skill.description}</p>
            </li>
          ))}
        </ul>
        <Button onClick={handleShowClick}>
          {showAll ? 'Show less' : 'Show more'}
        </Button>
      </div>
    </section>
  )
}

export default Skills
