import React from 'react';
import classNames from 'classnames/bind';
import { logo } from '../../constants/data.js';

import styles from './Header.module.css'

const cx = classNames.bind(styles)
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className='container'>
        <div className={cx('header-wrapper')}>
          <button
            type='button'
            className={cx('logo')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {logo}
          </button>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
