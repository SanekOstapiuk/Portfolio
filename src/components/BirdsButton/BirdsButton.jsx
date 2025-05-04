import classNames from 'classnames/bind'

import Icon from '../Icon'

import styles from './BirdsButton.module.css'

const cx = classNames.bind(styles)

const BirdsButton = () => {
  const birdsWakeup = [
    { wakeup: true },
    { wakeup: true },
    { wakeup: true }
  ];

  return (
    <div className={cx('container', 'wrapper')}>
      <a href='/Portfolio/OleksandrOstapiukCV.pdf' className={cx('button-birds')} download>
        <div className={cx('button-box')}>
          <span className={cx('button-text')}>My CV</span>
          <Icon name='cloud' className={cx('cloud-icon')} color='white'/>
        </div>
        <div className={cx('character-box')}>
          {birdsWakeup.map((bird, index) => (
            <div key={index} className={cx('character', bird.wakeup ? 'wakeup' : '')}>
              <div className={cx('face')} />
              <div className={cx('face2')} />
            </div>
          ))}
        </div>
      </a>

    </div>
  )
}

export default BirdsButton
