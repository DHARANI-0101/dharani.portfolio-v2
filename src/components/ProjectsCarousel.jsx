
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    title: "NetSpot - Movie Streaming Platform",
    description:
      "Developed a Netflix-style streaming platform featuring secure login, a PHP/MySQL backend, and seamless PayPal subscription integration.",
    image: "/dharani.portfolio-v2/projects/project1.png",
    tags: ["JavaScript", "PHP", "MySQL"],
    github: "https://github.com/DHARANI-0101/netspot",
  },
  {
    id: 2,
    title: "Secrets - Private Note Keeper",
    description:
      "Designed a secure secrets web app with OAuth authentication, encrypted sessions, and a PostgreSQL database.",
    image: "/dharani.portfolio-v2/projects/project2.png",
    tags: ["Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/DHARANI-0101/secret-keeper",
  },
  {
    id: 3,
    title: "Binance - MCP Server",
    description:
      "Developed a Binance MCP server with caching and retry logic to deliver real-time crypto prices and 24-hour changes to Claude.",
    image: "/dharani.portfolio-v2/projects/project3.png",
    tags: ["Python", "Claude", "MCP"],
    github: "https://github.com/DHARANI-0101/binance-MCP-server",
  },
  {
    id: 4,
    title: "Permalist - Todo Web App",
    description:
      "Todo app for managing daily tasks and notes. Users can easily add, edit, delete, and complete tasks using a simple interface.",
    image: "/dharani.portfolio-v2/projects/project4.png",
    tags: ["Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/DHARANI-0101/permalist",
  },

];

const getSlidesPerView = (count, max) => (count < max ? count : max);

export const ProjectsCarousel = () => {
  const showNavigation = projects.length > 3;

  return (
    <section
      id="projects"
      className="py-24 bg-[#0b0c1a] text-white relative overflow-hidden"
    >

      <style>
        {`
          .swiper-bullet {
            width: 10px;
            height: 10px;
            background-color: rgba(139, 92, 246, 0.5);
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background-color: #8b5cf6;
            transform: scale(1.3);
            box-shadow: 0 0 10px #8b5cf6;
          }
          .swiper-slide {
            transition-timing-function: ease-in-out;
          }
        `}
      </style>

      <div className="text-center mb-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-violet-400">Projects</span>
        </h2>
        <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-14">
          Here Are Some Of My Recent Projects. Each Project Was Carefully Crafted
          With Attention To Detail, Performance, And User Experience.
        </p>
      </div>

      <div className="relative w-full flex justify-center px-4 md:px-8">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          loop={projects.length > 3}
          grabCursor={true}
          centeredSlidesBounds={true}
          speed={800} 
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={showNavigation ? { nextEl: ".custom-next", prevEl: ".custom-prev" } : false}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (_, className) => `<span class="${className} swiper-bullet"></span>`,
          }}
          breakpoints={{
            320: { slidesPerView: getSlidesPerView(projects.length, 1) },
            768: { slidesPerView: getSlidesPerView(projects.length, 2) },
            1024: { slidesPerView: getSlidesPerView(projects.length, 3) },
          }}
          onInit={(swiper) => {
            const el = swiper.el;
            el.addEventListener("mouseenter", () => swiper.autoplay?.stop());
            el.addEventListener("mouseleave", () => swiper.autoplay?.start());
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="w-full max-w-sm mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-6 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 blur-2xl scale-110"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.25,
                    }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-64 object-contain rounded-xl z-10"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-violet-400 text-black px-3 py-1 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-center mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  {project.description}
                </p>

                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 rounded-full font-semibold transition-all hover:bg-violet-400 hover:text-black"
                  >
                    GitHub <Github size={18} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {showNavigation && (
          <>
            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 text-violet-400 p-3 rounded-full bg-white/10 hover:bg-violet-400 hover:text-black transition-all z-20">
              <ChevronLeft size={24} />
            </button>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 text-violet-400 p-3 rounded-full bg-white/10 hover:bg-violet-400 hover:text-black transition-all z-20">
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      <div className="custom-pagination flex justify-center gap-3 mt-8" />
    </section>
  );
};
