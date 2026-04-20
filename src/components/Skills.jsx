export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        "Python",
        "Scikit-learn",
        "Deep Learning",
        "Neural Networks",
        "Model Evaluation",
      ],
    },
    {
      title: "Computer Vision",
      skills: [
        "OpenCV",
        "YOLOv8",
        "Image Processing",
        "Object Detection",
        "Image Classification",
      ],
    },
    {
      title: "Edge AI & Deployment",
      skills: [
        "TensorRT",
        "DeepStream",
        "GStreamer",
        "NVIDIA Jetson Orin Nano",
        "Model Optimization",
      ],
    },
    {
      title: "Data & Tools",
      skills: [
        "Pandas",
        "NumPy",
        "Power BI",
        "Git & GitHub",
        "Linux (Ubuntu)",
      ],
    },
  ];

  return (
    <section className="px-6 md:px-10 py-24 max-w-6xl mx-auto">

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Skills & Expertise
      </h3>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition duration-300"
          >
            {/* Category Title */}
            <h4 className="text-lg font-semibold text-white mb-4">
              {cat.title}
            </h4>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:border-indigo-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}