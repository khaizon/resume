import './SingleProject.css';
import { useLoaderData } from 'react-router-dom';

import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';

export const getProject = async ({ params }: any) => {
  const response = await fetch(`${import.meta.env.BASE_URL}/projects/${params.id}.json`);
  const project = await response.json();
  return { project };
};

export default function SingleProject() {
  const [swiper, setSwiper] = useState<any | null>();
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeThumb, setActiveThumb] = useState<any | null>();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  // get project from database
  const { project }: any = useLoaderData();

  return (
    <div className="project-grid">
      <div className="project-title">{project.title}</div>
      <div className="project-subtitle">{project.subtitle}</div>
      <div className="divider" />
      <div className="project-gallery">
        <div
          className={'nav-button ' + (slideIndex === 0 && 'disabled-button')}
          ref={(node) => setPrevEl(node)}
          onClick={() => {
            swiper?.slidePrev();
          }}
        >
          <svg id="a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17,23.5c.38,0,.77-.15,1.06-.44,.59-.59,.59-1.54,0-2.12L9.12,12,18.06,3.06c.59-.59,.59-1.54,0-2.12-.59-.59-1.54-.59-2.12,0L5.94,10.94c-.59,.59-.59,1.54,0,2.12l10,10c.29,.29,.68,.44,1.06,.44Z" />
          </svg>
        </div>
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setSlideIndex(swiper.activeIndex);
          }}
          spaceBetween={10}
          navigation={{ nextEl, prevEl }}
          modules={[Thumbs]}
          grabCursor={true}
          thumbs={{
            swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
          }}
        >
          {project.gallery.map((project: any, index: number) => (
            <SwiperSlide key={index}>
              <img src={import.meta.env.BASE_URL + `${project.image}`} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={'nav-button ' + (slideIndex === project.gallery.length - 1 && 'disabled-button')}
          ref={(node) => setNextEl(node)}
          onClick={() => {
            swiper?.slideNext();
          }}
        >
          <svg id="a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7,23.5c-.38,0-.77-.15-1.06-.44-.59-.59-.59-1.54,0-2.12L14.88,12,5.94,3.06c-.59-.59-.59-1.54,0-2.12,.59-.59,1.54-.59,2.12,0l10,10c.59,.59,.59,1.54,0,2.12l-10,10c-.29,.29-.68,.44-1.06,.44Z" />
          </svg>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          console.log('swiper:', swiper);
          setActiveThumb(swiper);
        }}
        spaceBetween={10}
        slidesPerView="auto"
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {project.gallery.map((project: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={import.meta.env.BASE_URL + `${project.image}`} key={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="project-description">{project.description}</div>
    </div>
  );
}
