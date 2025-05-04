import classNames from 'classnames/bind'

import { contactsBlock } from '../../constants/data.js'
import Icon from '../Icon'

import styles from './Social.module.css'

const cx = classNames.bind(styles)

const Social = () => {
  const {
    telegram,
    linkedin,
    email,
    phone
  } = contactsBlock

  return (
    <ul className={cx('social')}>
      <li style={{"--i": "#a955ff", "--j": "#ea51ff"}}>
        <a href={telegram.link} className={cx('contact-link')} target="_blank">
          <Icon className={cx('icon')} name={telegram.icon} size={25}/>
          <span className={cx('title')}>{telegram.label}</span>
        </a>
      </li>
      <li style={{"--i": "#56CCF2", "--j": "#2F80ED"}}>
        <a href={linkedin.link} className={cx('contact-link')} target="_blank">
          <Icon className={cx('icon')} name={linkedin.icon} size={25}/>
          <span className={cx('title')}>{linkedin.label}</span>
        </a>
      </li>
      <li style={{"--i": "#FF9966", "--j": "#FF5E62"}}>
        <a href={`tel:${phone.value}`} className={cx('contact-link')}>
          <Icon className={cx('icon')} name={phone.icon} size={25} color='#060816'/>
          <span className={cx('title')}>{phone.label}</span>
        </a>
      </li>
      <li style={{"--i": "#80FF72", "--j": "#7EE8FA"}}>
        <a href={`mailto:${email.value}`} className={cx('contact-link')}>
          <Icon className={cx('icon')} name={email.icon} size={25}/>
          <span className={cx('title')}>{email.label}</span>
        </a>
      </li>
    </ul>
  )
}

export default Social
