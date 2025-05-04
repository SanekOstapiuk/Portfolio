import classNames from 'classnames/bind'

import styles from './Icon.module.css'

const cx = classNames.bind(styles)

const Icon = ({ name, size = 40, color = 'currentColor', className }) => (
  <svg width={size} height={size} color={color} className={cx(className)}>
    <use xlinkHref={`/Portfolio/sprite.svg#${name}`} />
  </svg>
)

export default Icon
