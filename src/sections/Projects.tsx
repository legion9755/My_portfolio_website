import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import ycDirectoryImage from "@/assets/images/yc.png";
import yelpCampImage from "@/assets/images/yelpcamp.png";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "IIT (ISM) Dhanbad",
    year: "2025",
    title: "YC Directory",
    results: [
      { title: "Provided a platform for 100+ entrepreneurs to pitch ideas" },
      { title: "Enhanced user experience with a minimalistic design" },
      { title: "Built with the latest Next.js 15 and React 19 technologies" },
    ],
    link: "https://yc-directory-psi-orcin.vercel.app/",
    image: ycDirectoryImage,
  },
  {
    company: "Self",
    year: "2024",
    title: "YelpCamp",
    results: [
      { title: "Enabled users to discover & review 1000+ campgrounds" },
      { title: "Integrated interactive maps for seamless navigation" },
      { title: "Implemented strong security measures & authentication" },
    ],
    link: "https://yelpcamp-6h69.onrender.com",
    image: yelpCampImage,
  },
];


export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-large lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how i transformed concepts into engaging digital experiences.
        </p>

        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            
            <Card
              key={project.title}
              className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky " style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
             
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={project.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span> Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
            
          ))}
        </div>
      </div>
    </section>
  );
};
