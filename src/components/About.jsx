import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-white"
        >
          About Me
        </motion.h3>

        {/* Content Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Main Hook */}
          <p className="text-gray-400 leading-relaxed text-base md:text-lg text-left mb-6">
            Motivated Computer Vision and Data Science professional with hands-on experience in building 
            <span className="text-indigo-400 font-medium"> real-time, low-latency vision systems</span>. 
            I specialize in developing Ground Control Station (GCS) solutions, focusing on object detection pipelines 
            and high-performance edge deployment.
          </p>

          {/* Detailed Bio - Strictly Left Aligned */}
          <p className="text-gray-400 leading-relaxed text-base md:text-lg text-left">
            I focus on building high-performance computer vision systems, optimizing deep learning models using 
            <span className="text-indigo-400"> TensorRT</span>, and deploying real-time AI pipelines on 
            <span className="text-indigo-400"> NVIDIA Jetson platforms</span>. 
            My expertise includes working with <span className="text-indigo-400">DeepStream and GStreamer </span>, 
            converting PyTorch models to TensorRT engines using <span className="text-indigo-400">FP16 </span> precision 
            to ensure ultra-low latency inference in critical environments like the CALM project.
          </p>

          {/* Skill Tags / Passion Note */}
          <p className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg text-left border-l-2 border-indigo-500 pl-4">
            Passionate about leveraging AI/ML and Computer Vision to build scalable, high-performance systems 
            using Python, Open CV and YOLOv8.
          </p>
        </motion.div>
      </div>
    </section>
  );
}