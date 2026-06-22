import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Yetunde<span className="text-orange-500">.dev</span>
          </h3>

          <p className="text-slate-400 mb-6">Full Stack Web Developer</p>

          {/* Social Icons */}
          <div className="flex gap-6 text-slate-400 mb-6">
            <a
              href="https://github.com/Oluremi37"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={24}
                className="hover:text-orange-500 cursor-pointer transition"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/solanke-yetunde-omolade-7a4476276?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="hover:text-orange-500 cursor-pointer transition"
              />
            </a>

            {/* Email Icon with Tooltip */}
            <div className="relative group">
              <FaEnvelope
                size={28}
                onClick={scrollToContact}
                className="hover:text-orange-500 cursor-pointer transition-all duration-300 hover:scale-110"
              />

              {/* Tooltip */}
              <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-50">
                Send me a message
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
              </div>
            </div>
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Yetunde Solanke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
