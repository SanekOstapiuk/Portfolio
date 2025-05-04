import classNames from 'classnames/bind'

import styles from './ScrollToSection.module.css'

const cx = classNames.bind(styles)

const ScrollToSection = ({name = '', elementId, children, className}) => {
  const handleScroll = () => {
    const element = document.getElementById(elementId)

    if(element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
  };

  return(
    <div className={cx(className)} onClick={handleScroll}>
      {name}
      {children}
    </div>
  )
}

export default ScrollToSection
