import classNames from 'classnames/bind'

import styles from './MainTitle.module.css'

const cx = classNames.bind(styles)

const MainTitle = ({title}) => {

  return (
    <h2 className={cx('title')}>{title}</h2>
  );
};

export default MainTitle;
