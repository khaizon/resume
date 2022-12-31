import './Biography.css';
import PanelTitle from '../components/PanelTitle';
import Selectable from '../components/Selectable';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const EDUCATION_TEXT = `VJC, SUTD, SMU`;

const ABOUT_ME_TEXT = `I’m a writer, blogger, and a teacher. I’m a member of US Free Writers Assosiation since 2012. From time to time I teach students in the University I studied at. I constantly work on my books and as for now I have 6 books published. My seventh book will be called Morning Glory – a story about true love in big city.`;

const CAREER_TEXT = `Engineer`;

const tabMapper = ['About Me', 'Education', 'Career'];

export default function Biography() {
  const [currentTab, changeTab] = useState(0);

  return (
    <div className="biography">
      <div className="biography-grid">
        <div className="biography-number">
          <div
            className="panel-number image-text"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}/profilepic.jpeg)`,
            }}
          >
            01
          </div>
        </div>
        <div className="tab-selector">
          {tabMapper.map((tabName, index) => (
            <Selectable
              isSelected={currentTab === index}
              onClick={() => {
                changeTab(index);
              }}
              key={index}
            >
              {tabName}
            </Selectable>
          ))}
        </div>
        {/* <div className="tabs-view">
          <PanelTitle alignLeft subtitle={tabMapper[currentTab]} title="My Biography" />
          {currentTab === 0 && <div className="biography-text">{ABOUT_ME_TEXT}</div>}
          {currentTab === 1 && <div className="biography-text">{EDUCATION_TEXT}</div>}
          {currentTab === 2 && <div className="biography-text">{CAREER_TEXT}</div>}
        </div> */}
        <div className="tabs-view">
          <PanelTitle alignLeft subtitle={tabMapper[currentTab]} title="My Biography" />
          <Swiper
            onSlideChange={(e) => changeTab(e.activeIndex)}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="biography-text">{ABOUT_ME_TEXT}</div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
}
