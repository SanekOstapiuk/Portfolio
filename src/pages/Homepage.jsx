import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StarsCanvas from '../components/StarsCanvas';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Contacts from '../components/Contacts';

import styles from './Homepage.module.css'

const cx = classNames.bind(styles)

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <>
      <Header />
      <StarsCanvas />
      <HeroSection />
      <main className={cx('main')}>
        <AboutMe />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default Homepage
