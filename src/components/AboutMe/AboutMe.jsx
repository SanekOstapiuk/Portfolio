import { aboutMeBlock } from '../../constants/data.js'
import classNames from 'classnames/bind'

import Icon from '../Icon'

import styles from './AboutMe.module.css'

const cx = classNames.bind(styles)

const AboutMe = () => {

  return (
    <section className={cx('container', 'about')} id={aboutMeBlock.id}>
      <div className={cx('about-wrapper')} data-aos='fade-up'>
        <h1 className={cx('title')}>{aboutMeBlock.label}</h1>
        <ul className={cx('about-icons')}>
          {aboutMeBlock.icons.map((icon, index) => (
            <Icon name={icon} key={index} color={aboutMeBlock.iconsColor} />
          ))}
        </ul>
        <p className={cx('about-text')}>
          {aboutMeBlock.education}
        </p>
        <p className={cx('about-text')}>
          {aboutMeBlock.text}
        </p>
      </div>
    </section>
  )
}

export default AboutMe
