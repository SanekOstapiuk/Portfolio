import classNames from 'classnames/bind';

import { heroBlock } from '../../constants/data.js';
import ScrollToSection from '../ScrollToSection/index.js';

import styles from './HeroSection.module.css'

const cx = classNames.bind(styles)

const HeroSection = () => {
  return (
    <section className={cx('hero')}>
      <div className={cx('hero-wrapper')}>
        <h1 className={cx('hero-title')}>{heroBlock.title}</h1>
        <span className={cx('hero-subtitle')}>{heroBlock.subtitle}</span>
        <span className={cx('hero-text')}>{heroBlock.description}</span>
        <ScrollToSection className={cx('scroll-button')} elementId={heroBlock.scrollToElement}>
          <div className={cx('circle')} />
        </ScrollToSection>
      </div>
    </section>
  );
};

export default HeroSection;
