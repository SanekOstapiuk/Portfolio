import classNames from 'classnames/bind'

import styles from './Button.module.css'

const cx = classNames.bind(styles)

const Button = ({type, className, children, onClick}) => {

  return (
    <button
      type={type}
      className={cx('button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
