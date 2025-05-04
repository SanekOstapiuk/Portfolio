import classNames from 'classnames/bind'

import ScrollToSection from '../ScrollToSection/ScrollToSection'
import { menu } from '../../constants/data'

import styles from './Navbar.module.css'

const cx = classNames.bind(styles)

const Navbar = () => {
  return (
    <nav className={cx('wrapper')}>
      <ul className={cx('nav')}>
        {menu?.map((item) => (
          <li key={item.id} className={cx('nav-item')}>
            <ScrollToSection key={item.id} name={item.label} elementId={item.id}/>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
