export default function Experience() {
  const experiences = [
    {
      role: "Executive (Computer Vision Engineer)",
      company: "Solar Defence and Aerospace Limited",
      duration: "10 Months | Onsite | Nagpur",
      points: [
        "Worked as a Computer Vision Engineer in the UAV division on the CALM project, building systems for object detection, recognition, and identification.",
        "Designed and implemented an infrared (IR)-based object detection pipeline for tank detection in aerial imagery.",
        "Optimized deep learning models by converting PyTorch models to ONNX and further into TensorRT engines for efficient edge deployment.",
        "Deployed optimized models on NVIDIA Jetson Orin Nano for real-time inference in UAV systems.",
        "Built end-to-end video processing pipelines using DeepStream and GStreamer, including preprocessing, inference, post-processing, encoding, and streaming.",
        "Reduced end-to-end latency to near real-time performance (~40ms), improving system responsiveness in UAV applications.",
        "Integrated the pipeline with the Ground Control Station (GCS) for real-time video streaming, monitoring, and analysis."
      ]
    },

    {
      role: "Data & Python Intern",
      company: "Rise 11 Technologies",
      duration: "4 Months | Remote",
      points: [
        "Performed data analysis and backend development using Python.",
        "Built and tested backend functionalities using the Flask framework.",
        "Contributed to testing and debugging of web applications for the Zetaleap project.",
        "Created technical content focused on Python programming and data analytics.",
        "Gained hands-on experience in real-world debugging, testing workflows, and backend systems."
      ]
    },

    {
      role: "Web Developer Trainer Intern",
      company: "Coding Raja Technologies",
      duration: "3 Months | Remote",
      points: [
        "Conducted training sessions on Pandas and Power BI for students.",
        "Taught data cleaning, preprocessing, and exploratory data analysis (EDA) techniques.",
        "Mentored students on applying data analysis concepts to real-world datasets.",
        "Improved students' analytical thinking and problem-solving abilities.",
        "Provided practical exposure to industry-relevant tools and workflows."
      ]
    },

    {
      role: "Machine Learning Intern",
      company: "Prodigy Infotech",
      duration: "3 Months | Remote",
      points: [
        "Developed machine learning models including House Price Prediction (Linear Regression), Dogs vs Cats Classification (SVM), and Customer Purchase Prediction (KNN).",
        "Applied supervised learning techniques on structured datasets.",
        "Performed data preprocessing, feature engineering, and model evaluation.",
        "Built end-to-end ML pipelines from data preparation to prediction.",
        "Received a Letter of Recommendation for strong performance and project contributions."
      ]
    }
  ];

  return (
    <section id="experience" className="px-10 py-20 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-12 text-center">Experience</h3>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-md hover:scale-[1.01] transition"
          >
            <h4 className="text-xl font-semibold">
              {exp.role} |{" "}
              <span className="text-indigo-400">{exp.company}</span>
            </h4>

            <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>

            <ul className="mt-4 text-gray-400 list-disc ml-5 space-y-2 text-sm leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}