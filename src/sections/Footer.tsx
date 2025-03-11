import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/vaibhav-kotnala-2b1b0b157",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/_vaibhav_kotnala_",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background effect */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container relative z-10"> {/* Added z-10 to bring content forward */}
        <div className="border-t border-white/15 py-6 text-sm flex flex-col gap-8 items-center md:flex-row md:justify-between">
          <div className="text-white/40 ">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col gap-8 items-center md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:underline"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
