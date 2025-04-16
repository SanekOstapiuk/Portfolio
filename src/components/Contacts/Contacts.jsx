import { contactsBlock } from '../../constants/data.js'

import classNames from 'classnames/bind'

import styles from './Contacts.module.css'

const cx = classNames.bind(styles)

const Contacts = () => {

  return (
    <section className={cx('container', 'contacts')} id={contactsBlock.id}>
      <div className={cx('contacts-wrapper')} data-aos='fade-up'>
        <h2 className={cx('contacts-title')}>{contactsBlock.label}</h2>
        <ul className={cx('contacts-list')} data-aos='fade-up'>
          <li className={cx('contact-item')} data-aos='fade-up'>
            <a href={`tel:${contactsBlock.telegram.value}`} className={cx('contact-link')}>
              <h4 className={cx('contact-title')}>
                <contactsBlock.telegram.icon className={cx('contact-icon')} />
                <span>{contactsBlock.telegram.label}</span>
              </h4>
              <span className={cx('contact-value')}>{contactsBlock.telegram.value}</span>
            </a>
          </li>
          <li className={cx('contact-item')} data-aos='fade-up'>
            <a href={`mailto:${contactsBlock.email.value}`} className={cx('contact-link')}>
              <h4 className={cx('contact-title')}>
                <contactsBlock.email.icon className={cx('contact-icon')} />
                <span>{contactsBlock.email.label}</span>
              </h4>
              <span className={cx('contact-value')}>{contactsBlock.email.value}</span>
            </a>
          </li>
          <li className={cx('contact-item')} data-aos='fade-up'>
            <a href={contactsBlock.linkedin.link} className={cx('contact-link')}>
              <h4 className={cx('contact-title')}>
                <contactsBlock.linkedin.icon className={cx('contact-icon')} />
                <span>{contactsBlock.linkedin.label}</span>
              </h4>
              <span className={cx('contact-value')}>{contactsBlock.linkedin.value}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contacts
