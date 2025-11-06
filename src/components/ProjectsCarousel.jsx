import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A Beautiful Landing Page Built With React And Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description: "Interactive Analytics Dashboard With Data Visualization And Filters.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-Featured E-commerce Platform With Authentication And Payments.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A Personal Portfolio Website With Animations.",
    image: "/projects/project4.png",
    tags: ["React", "TailwindCSS"],
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A Fully Functional Blog Platform With CMS.",
    image: "/projects/project5.png",
    tags: ["Next.js", "Sanity"],
  },
  {
    id: 6,
    title: "Task Manager App",
    description: "Organize Tasks With Authentication And Realtime Updates.",
    image: "/projects/project6.png",
    tags: ["React", "Firebase"],
  },
];

export const ProjectsCarousel = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0b0c1a] text-white relative overflow-hidden"
    >
      <style>
        {`
          .swiper-bullet {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: rgba(139, 92, 246, 0.5);
            border-radius: 50%;
            margin: 0 6px;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background-color: #8b5cf6;
            transform: scale(1.3);
            box-shadow: 0 0 10px #8b5cf6;
          }
        `}
      </style>

      <div className="text-center mb-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-violet-400">Projects</span>
        </h2>

        <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Here Are Some Of My Recent Projects. Each Project Was Carefully Crafted
          With Attention To Detail, Performance, And User Experience.
        </p>
      </div>

      <div className="relative w-full flex justify-center px-4 md:px-8">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} swiper-bullet"></span>`,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            const container = swiper.el;

            container.addEventListener("mouseenter", () => {
              if (swiper.autoplay && swiper.autoplay.running) swiper.autoplay.stop();
            });
            container.addEventListener("mouseleave", () => {
              if (swiper.autoplay && !swiper.autoplay.running) swiper.autoplay.start();
            });
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="max-w-[400px] mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-6 hover:scale-[1.03] transition-all duration-300">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 blur-2xl scale-110"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.3,
                    }}
                  ></div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-72 object-contain rounded-xl z-10"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-violet-400 text-black px-3 py-1.5 text-xs rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 text-center">
                  {project.description}
                </p>

                <div className="flex gap-3 justify-center">
                  <a
                    href="https://github.com/DHARANI-0101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-violet-400 text-black px-6 py-2.5 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/DHARANI-0101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/70 hover:bg-gray-900/80 text-white text-sm rounded-full transition-all duration-300"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 text-violet-400 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 z-20 cursor-pointer">
          <ChevronLeft size={24} />
        </button>
        <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 text-violet-400 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 z-20 cursor-pointer">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="custom-pagination flex justify-center gap-3 mt-8"></div>
    </section>
  );
};
