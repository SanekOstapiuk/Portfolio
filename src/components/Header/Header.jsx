import React from 'react'
import classNames from 'classnames/bind'

import { logo } from '../../constants/data.js'
import Navbar from '../Navbar'
import Social from '../Social'

import styles from './Header.module.css'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className='container'>
        <div className={cx('header-wrapper')}>
          <div className={cx('logo-wrapper')}>
            <button
              type='button'
              className={cx('logo')}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {logo}
            </button>
          </div>
          <Navbar />
          <Social />
        </div>
      </div>
    </header>
  )
}

export default Header
