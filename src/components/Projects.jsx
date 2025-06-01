import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary sc" id="projects">
      <div className="md:container px-5  m flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>
        <div className="flex items-center md:justify-between md:flex-row flex-col-reverse     mb-10 ">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="h-[500px]  rounded-3xl object-cover   hidden lg:flex   "
            loading="lazy"
          />

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            loop={true}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            className="rounded-3xl pb-16  w-full sm:max-w-lg md:max-w-lg 2xl:max-w-xl mt-10 drop-shadow-primary "
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-4 border-b-8 border-[#FAF9FD] h-fit"
              >
                <a href={content.link} target="_blank">
                  <img src={content.image} alt="..." />
                </a>
                <div href={content.link} className="flex  flex-col gap-1 mt-2">
                  <div className="flex justify-between">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <a
                      href={content.link}
                      target="_blank"
                      className="font-bold text-gray self-end"
                    >
                      Visit
                    </a>
                  </div>
                  {/* <p className="my-5 text-slate-800 font-[500]">
                    {content?.desc}
                  </p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
