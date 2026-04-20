import { useState } from "react";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const projects = [
    // 🔴 Project 1
    {
      title:
        "Comparative Analysis of Machine Learning and Deep Learning Models for Heart Disease Prediction",
      short:
        "Built an end-to-end ML pipeline achieving up to 100% accuracy using KNN with model comparison and tuning.",
      link:
        "https://github.com/PVSaketh2003/Heart-Disease-Prediction-using-Machine-Learning-and-deep-Learning",

      details: (
        <>
          <h5 className="text-white font-semibold">Problem Statement</h5>
          <p>
            Heart disease is a leading cause of death globally. Early prediction is difficult due to complex relationships between multiple clinical parameters.
          </p>

          <h5 className="text-white font-semibold">Problem Identification</h5>
          <ul className="list-disc ml-5">
            <li>Different feature scales and distributions</li>
            <li>Non-linear relationships between variables</li>
            <li>Small dataset (~1000 records)</li>
            <li>Model selection uncertainty</li>
          </ul>

          <h5 className="text-white font-semibold">Approach & Methodology</h5>
          <ul className="list-disc ml-5">
            <li>Data preprocessing and feature scaling</li>
            <li>EDA for feature understanding</li>
            <li>Compared Logistic Regression, Decision Tree, Random Forest, Support Vector Machine, KNN, Naive Bayes</li>
            <li>Hyperparameter tuning using RandomizedSearchCV</li>
            <li>Built ANN using Keras</li>
          </ul>

          <h5 className="text-white font-semibold">Results</h5>
          <ul className="list-disc ml-5">
            <li>KNN: 100% accuracy</li>
            <li>Random Forest & Decision Tree: ~98.5%</li>
            <li>ANN: ~95.7%</li>
          </ul>

          <h5 className="text-white font-semibold">Key Insights</h5>
          <ul className="list-disc ml-5">
            <li>Traditional ML outperformed deep learning</li>
            <li>Preprocessing significantly impacts results</li>
            <li>Model comparison is essential</li>
          </ul>

          <h5 className="text-white font-semibold">My Contribution</h5>
          <ul className="list-disc ml-5">
            <li>Performed preprocessing and EDA</li>
            <li>Built and compared ML models</li>
            <li>Implemented hyperparameter tuning</li>
            <li>Developed ANN model</li>
          </ul>
        </>
      ),
    },

    // 🏦 Project 2
    {
      title:
        "Bank Loan Repayment Prediction using Machine Learning & Pattern Analysis",
      short:
        "Predicted loan repayment using Random Forest and extracted patterns using FPG-Vertical.",
      link:
        "https://colab.research.google.com/drive/1dxGHt_Ac995DIS8_atxVqtJz9GNsRnfJ",

      details: (
        <>
          <h5 className="text-white font-semibold">Problem Statement</h5>
          <p>
            Loan defaults cause major financial losses. The goal was to predict repayment behavior using customer financial data.
          </p>

          <h5 className="text-white font-semibold">Problem Identification</h5>
          <ul className="list-disc ml-5">
            <li>Missing and inconsistent data</li>
            <li>Mixed categorical and numerical features</li>
            <li>Complex repayment behavior</li>
            <li>Need for accurate and interpretable model</li>
          </ul>

          <h5 className="text-white font-semibold">Approach & Methodology</h5>
          <ul className="list-disc ml-5">
            <li>Data cleaning and preprocessing</li>
            <li>Feature encoding and normalization</li>
            <li>Data visualization and analysis</li>
            <li>Built Random Forest model</li>
            <li>Applied FPG-Vertical for pattern mining</li>
          </ul>

          <h5 className="text-white font-semibold">Results</h5>
          <ul className="list-disc ml-5">
            <li>Random Forest achieved strong prediction accuracy</li>
            <li>FPG-Vertical revealed hidden behavioral patterns</li>
          </ul>

          <h5 className="text-white font-semibold">Key Insights</h5>
          <ul className="list-disc ml-5">
            <li>Preprocessing is critical for performance</li>
            <li>Ensemble models perform well on financial data</li>
            <li>Pattern mining adds deeper insights</li>
          </ul>

          <h5 className="text-white font-semibold">My Contribution</h5>
          <ul className="list-disc ml-5">
            <li>Handled data preprocessing</li>
            <li>Performed data analysis and visualization</li>
            <li>Built ML model</li>
            <li>Compared RFC with FPG-Vertical</li>
          </ul>
        </>
      ),
    },

    // 🐶🐱 Project 3
    {
      title: "Dog vs Cat Classification using CNN (TensorFlow/Keras)",
      short:
        "Developed a CNN-based image classifier with preprocessing and evaluation pipeline.",
      link: "https://github.com/PVSaketh2003/Dog-vs-Cat-using-CNN",

      details: (
        <>
          <h5 className="text-white font-semibold">Problem Statement</h5>
          <p>
            The goal was to classify images as Dog or Cat using deep learning models with reliable preprocessing and prediction pipeline.
          </p>

          <h5 className="text-white font-semibold">Problem Identification</h5>
          <ul className="list-disc ml-5">
            <li>Need for preprocessing raw image data</li>
            <li>Ensuring consistent image size</li>
            <li>Overfitting risk</li>
            <li>Binary classification threshold handling</li>
          </ul>

          <h5 className="text-white font-semibold">Approach & Methodology</h5>
          <ul className="list-disc ml-5">
            <li>Used ImageDataGenerator for preprocessing</li>
            <li>Rescaled images (1/255) and resized to 224x224</li>
            <li>Built CNN using Conv2D, MaxPooling, Dense layers</li>
            <li>Used sigmoid activation</li>
            <li>Trained and evaluated model</li>
          </ul>

          <h5 className="text-white font-semibold">Results</h5>
          <ul className="list-disc ml-5">
            <li>Successfully classified dog vs cat images</li>
            <li>Built complete prediction pipeline</li>
          </ul>

          <h5 className="text-white font-semibold">Key Insights</h5>
          <ul className="list-disc ml-5">
            <li>CNNs are effective for image classification</li>
            <li>Preprocessing significantly impacts performance</li>
            <li>Simple models can perform well on binary tasks</li>
          </ul>

          <h5 className="text-white font-semibold">My Contribution</h5>
          <ul className="list-disc ml-5">
            <li>Built CNN model using TensorFlow/Keras</li>
            <li>Handled data pipeline</li>
            <li>Implemented prediction system</li>
            <li>Evaluated model performance</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section id="projects" className="px-10 py-20 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>

      <div className="space-y-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-indigo-500/10 transition duration-300"
            
          >
            
            <h4 className="text-xl font-semibold">{p.title}</h4>

            <p className="text-gray-400 mt-2">{p.short}</p>

            <div className="flex gap-4 mt-4">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                View Project →
              </a>

              <button
                onClick={() => toggle(i)}
                className="text-gray-300 hover:text-white"
              >
                {openIndex === i ? "Hide Details" : "View Details"}
              </button>
            </div>

            {openIndex === i && (
              <div className="mt-6 text-gray-400 space-y-4 border-t border-gray-700 pt-4 text-sm leading-relaxed">
                {p.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}