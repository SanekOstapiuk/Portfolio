import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { certificatesBlock } from '../../constants/data.js'
import MainTitle from '../MainTitle'

import styles from './Certificates.module.css'

const cx = classNames.bind(styles)

const Certificates = () => {
  const { label, id, certificates } = certificatesBlock

  return (
    <section className={cx('container', 'certificates')} id={id}>
      <div className={cx('certificates-wrapper')} data-aos='fade-up'>
        <MainTitle title={label} />
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          className="mySwiper"
          spaceBetween={16}
          slidesPerView={1}
          grabCursor={true}
        >
          {certificates?.map((item, key) => (
            <SwiperSlide key={key}>
              <div className={cx('course-title')}>
                <h4 className={cx('name')}>{item.name}</h4>
                <p className={cx('company')}>{item.company}</p>
              </div>
              <img className={cx('image')} src={item.src} alt={item.name}/>
              <ul className={cx('skills')}>
                {item?.skills.map((skill, index) => (
                  <li className={cx('skill')} key={index}>
                    {skill}
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Certificates
