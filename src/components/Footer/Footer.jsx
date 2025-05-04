import classNames from 'classnames/bind'

import { location, copyright } from '../../constants/data.js'
import Icon from '../Icon'

import styles from './Footer.module.css'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className='container'>
        <div className={cx('footer-wrapper')}>
          <div className={cx('location-wrapper')}>
            <Icon className={cx('location-icon')} name={location.icon} size={20}/>
            <span className={cx('location-label')}>{location.label}</span>
            <span>{location.value}</span>
          </div>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
