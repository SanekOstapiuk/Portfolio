import {
  FaCode,
  FaDesktop,
  FaMobileAlt,
} from 'react-icons/fa'
import { aboutMeBlock } from '../../constants/data.js'

import classNames from 'classnames/bind'

import styles from './AboutMe.module.css'

const cx = classNames.bind(styles)

const AboutMe = () => {

  return (
    <section className={cx('container', 'about')} id={aboutMeBlock.id}>
      <div className={cx('about-wrapper')} data-aos='fade-up'>
        <h1 className={cx('title')}>{aboutMeBlock.label}</h1>
        <div className={cx('about-icons')}>
          <FaCode />
          <FaDesktop />
          <FaMobileAlt />
        </div>
        <p className={cx('about-text')}>
          {aboutMeBlock.text}
        </p>
      </div>
    </section>
  )
}

export default AboutMe
