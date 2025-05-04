import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import classNames from 'classnames/bind'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import StarsCanvas from '../components/StarsCanvas'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certificates from '../components/Certificates'
import Contacts from '../components/Contacts'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Homepage.module.css'

const cx = classNames.bind(styles)

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  return (
    <>
      <Header />
      <StarsCanvas />
      <HeroSection />
      <main className={cx('main')}>
        <AboutMe />
        <Skills />
        <Projects />
        <Certificates />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default Homepage
