import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 bg-[#07070a]">

      {/* ================= BACKGROUND (ULTRA PREMIUM) ================= */}
      <div className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-purple-600/15 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#ffffff1a_1px,transparent_1px),linear-gradient(90deg,#ffffff1a_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center max-w-4xl">

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
            <img
              src="/your-photo.jpg" 
              alt="profile"
              className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover border-4 border-black shadow-xl"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mt-6"
        >
          PV Sairam Saketh
        </motion.h2>

        {/* Role */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mt-3 leading-tight text-white"
        >
          Computer Vision Engineer
        </motion.h1>

        {/* ================= DESCRIPTION BLOCK (FIXED ALIGNMENT) ================= */}
        <div className="max-w-2xl mx-auto mt-8 text-left">
          
          {/* Highlighted Subtitle */}
          <p className="text-indigo-400 font-semibold text-base md:text-lg">
            Real-time AI Systems • Deep Learning • Edge Deployment
          </p>
          
          <br />

          {/* Bio Description - Left Aligned to match the subtitle above */}
          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            I specialize in building high-performance computer vision systems,
            optimizing deep learning models using{" "}
            <span className="text-indigo-400 font-semibold">TensorRT</span>, and
            deploying real-time AI pipelines on{" "}
            <span className="text-indigo-400 font-semibold">NVIDIA Jetson platforms</span>{" "}
            with ultra-low latency inference.
          </p>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 transition shadow-lg hover:shadow-indigo-500/30"
          >
            View Projects
          </a>

          <a
            href="https://github.com/PVSaketh2003"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-700 text-gray-300 font-medium rounded-xl hover:border-indigo-500 hover:text-white hover:bg-gray-900 transition"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-gray-700 text-gray-300 font-medium rounded-xl hover:border-indigo-500 hover:text-white hover:bg-gray-900 transition"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}