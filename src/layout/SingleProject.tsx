import './SingleProject.css';
import { useLoaderData, useParams } from 'react-router-dom';

import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

export const getProject = async ({ params }: any) => {
  const response = await fetch(`${import.meta.env.BASE_URL}/projects/${params.id}.json`);
  const project = await response.json();
  return { project };
};

export default function SingleProject() {
  // get project id from react router
  const { id } = useParams<{ id: string }>();

  // get project from database
  const { project }: any = useLoaderData();

  return (
    <div className="project-grid">
      <div className="project-title">{project.title}</div>
      <div className="project-subtitle">{project.subtitle}</div>
      <div className="divider" />
      <div className="project-gallery">
        <Swiper
          pagination={{
            el: '.my-custom-pagination-div',
            dynamicBullets: true,
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          }}
          modules={[Pagination]}
        >
          {project.gallery.map((project: any, index: number) => (
            <SwiperSlide key={index}>
              <img src={import.meta.env.BASE_URL + `${project.image}`} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="my-custom-pagination-div" />
      </div>
      <div className="project-description">{project.description}</div>
    </div>
  );
}
