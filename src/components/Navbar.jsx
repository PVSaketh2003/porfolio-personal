import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glassmorphism Container */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl shadow-2xl">
          
          {/* Logo / Name with Gradient */}
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
          >
            PV Sairam Saketh
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-gray-400 hover:text-white transition-colors group"
              >
                {link.name}
                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            {/* Resume / CTA Style Link */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2 bg-indigo-600/20 border border-indigo-500/50 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all text-xs uppercase tracking-widest font-bold"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Icon (Simplified for logic) */}
          <div className="md:hidden text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}