import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-24 max-w-5xl mx-auto text-center"
    >
      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Let’s Connect
      </h3>

      {/* FIXED ALIGNMENT BLOCK */}
      <div className="max-w-2xl mx-auto mb-10">
        <p className="text-gray-400 text-base md:text-lg text-left">
          I’m actively looking for opportunities in Computer Vision, AI,
          and Edge AI systems. Feel free to reach out for collaborations or roles.
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-indigo-500/10 transition">

        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Email */}
          <a
            href="mailto:pvsairamsaketh@gmail.com"
            className="flex items-center gap-3 p-4 bg-black/40 border border-gray-800 rounded-xl hover:border-indigo-500 transition group"
          >
            <FaEnvelope className="text-indigo-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 truncate">
              pvsairamsaketh@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919359587816"
            className="flex items-center gap-3 p-4 bg-black/40 border border-gray-800 rounded-xl hover:border-indigo-500 transition group"
          >
            <FaPhone className="text-indigo-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300">+91 9359587816</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/PVSaketh2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-2xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/pvsaketh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="mailto:pvsairamsaketh@gmail.com"
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 transition inline-block shadow-lg hover:shadow-indigo-500/20"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}