import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Decorative Top Border Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Logo / Brand Mark */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white font-bold text-xs">PV</span>
            </div>
            <span className="text-white font-semibold tracking-wide">
              Sairam Saketh
            </span>
          </div>

          {/* Quick Links (Optional but looks professional) */}
          <nav className="flex gap-8 text-sm text-gray-500">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>    

        </div>
      </div>
    </footer>
  );
}