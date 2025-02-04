import codesphere from "@/assets/images/codesphere-page.png";
import google_docs from "@/assets/images/googleDocs-page.png";
import getmeachai from "@/assets/images/getmeachai-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import LiveSiteBtn from "@/components/LiveSiteBtn";

const portfolioProjects = [
  {
    company: "Google Docs Clone",
    year: "2024",
    title: "Google Docs Clone",
    results: [
      { title: "Quill js - rich text editor" },
      { title: "Socket.io and MongoDB" },
    ],
    link: "https://gooogle-docs-clonee.vercel.app/",
    image: google_docs,
  },
  {
    company: "CodeSphere",
    year: "2024",
    title: "CodeSphere",
    results: [
      { title: "ReactJS, Socket.io, Express, MongoDB" },
      { title: "Code Editor & Code Compiler" },
      { title: "Real-Time Collaboration" },
    ],
    link: "https://code-sphere-editor.vercel.app/",
    image: codesphere,
  },
  {
    company: "GetMeAChai",
    year: "2025",
    title: "GetMeAChai - crowdfunding site",
    results: [
      { title: "NextJS, Next-Auth" },
      { title: "RazorPay Payment Gateway" },
      { title: "Crowdfunding site for creators" },
    ],
    link: "https://get-me-a-chaii.vercel.app/",
    image: getmeachai,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.link}
              className="bg-gray-800 rounded-3xl overflow-hidden border-2 border-white/20 pt-8 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${index*48}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="__blank">
                    <LiveSiteBtn />
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-1 lg:mt-0 rounded-lg lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
