import './SingleProject.css';
import { useLoaderData, useParams } from 'react-router-dom';

import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination, Thumbs } from 'swiper';
import { useState } from 'react';

export const getProject = async ({ params }: any) => {
  const response = await fetch(`${import.meta.env.BASE_URL}/projects/${params.id}.json`);
  const project = await response.json();
  return { project };
};

export default function SingleProject() {
  const [activeThumb, setActiveThumb] = useState<any | null>();

  // get project from database
  const { project }: any = useLoaderData();

  return (
    <div className="project-grid">
      <div className="project-title">{project.title}</div>
      <div className="project-subtitle">{project.subtitle}</div>
      <div className="divider" />
      <div className="project-gallery">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{
            swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
          }}
          className="product-images-slider"
        >
          {project.gallery.map((project: any, index: number) => (
            <SwiperSlide key={index}>
              <img src={import.meta.env.BASE_URL + `${project.image}`} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          console.log('swiper:', swiper);
          setActiveThumb(swiper);
        }}
        spaceBetween={10}
        slidesPerView={4}
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
