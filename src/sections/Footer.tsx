import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/sarbajit-chaki/',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/sarbajit.chaki',
  },
  {
    title: 'Github',
    href: 'https://github.com/Sarbajit-Chaki',
  },
]

export const Footer = () => {
  return (
    <div className="relative overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-20"></div>
    <footer className="relative ">
      <div className="container relative z-10">
        <div className="border-t border-white/20 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 ">
            {footerLinks.map((link) => (
              <a key={link.title} href={link.href} target="__blank" className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors duration-300 ease-in-out">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
    </div>
  );
};
