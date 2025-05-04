import classNames from 'classnames/bind'

import { contactsBlock } from '../../constants/data.js'
import MainTitle from '../MainTitle'
import Icon from '../Icon'

import styles from './Contacts.module.css'

const cx = classNames.bind(styles)

const Contacts = () => {
  const {
    label,
    id,
    telegram,
    linkedin,
    email,
    phone
  } = contactsBlock

  return (
    <section className={cx('container', 'contacts')} id={id}>
      <div className={cx('contacts-wrapper')} data-aos='fade-up'>
        <MainTitle title={label}/>
        <ul className={cx('contacts-list')} data-aos='fade-up'>
          <li className={cx('contact-item')} data-aos='fade-up'>
            <a href={telegram.link} className={cx('contact-link')} target="_blank">
              <h4 className={cx('contact-title')}>
                <Icon className={cx('contact-icon')} name={telegram.icon}/>
                <span>{telegram.label}</span>
              </h4>
              <span className={cx('contact-value')}>{telegram.value}</span>
            </a>
          </li>
          <li className={cx('contact-item')} data-aos='fade-up'>
            <a href={`mailto:${email.value}`} className={cx('contact-link')}>
              <h4 className={cx('contact-title')}>
                <Icon className={cx('contact-icon')} name={email.icon}/>
                <span>{email.label}</span>
              </h4>
              <span className={cx('contact-value')}>{email.value}</span>
            </a>
          </li>
          <li className={cx('contact-item')} data-aos='fade-up'>
            <a href={linkedin.link} className={cx('contact-link')} target="_blank">
              <h4 className={cx('contact-title')}>
                <Icon className={cx('contact-icon')} name={linkedin.icon}/>
                <span>{linkedin.label}</span>
              </h4>
              <span className={cx('contact-value')}>{linkedin.value}</span>
            </a>
          </li>
          <li className={cx('contact-item')} data-aos='fade-up'>
            <a href={`tel:${phone.value}`} className={cx('contact-link')}>
              <h4 className={cx('contact-title')}>
                <Icon className={cx('contact-icon')} name={phone.icon}/>
                <span>{phone.label}</span>
              </h4>
              <span className={cx('contact-value')}>{phone.value}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contacts
