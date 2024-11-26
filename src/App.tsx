import React, { useState } from 'react';
import './App.css'; // Si quieres añadir estilos adicionales

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      title: 'Habilidades del Equipo',
      question: '¿Cómo describes el nivel de experiencia de tu equipo?',
      options: [
        { text: 'Expertos en JavaScript puro', score: -1 },
        { text: 'Familiarizados con frameworks', score: 1 },
      ],
    },
    {
      title: 'Tiempo de Desarrollo',
      question: '¿Cuál es el tiempo estimado del proyecto?',
      options: [
        { text: 'Corto (1-2 meses)', score: -1 },
        { text: 'Mediano/Largo (+2 meses)', score: 1 },
      ],
    },
    {
      title: 'Tipo de Proyecto',
      question: '¿Qué tipo de aplicación desarrollarás?',
      options: [
        { text: 'Sitio web simple/Landing page', score: -1 },
        { text: 'Aplicación compleja/Interactiva', score: 1 },
      ],
    },
    {
      title: 'Hosting/Servidor',
      question: '¿Qué tipo de hosting utilizarás?',
      options: [
        { text: 'Hosting básico/GitHub Pages', score: -1 },
        { text: 'Servidor dedicado/Cloud', score: 1 },
      ],
    },
  ];

  const handleAnswer = (score) => {
    setScore((prevScore) => prevScore + score);
    setStep((prevStep) => prevStep + 1);
  };

  const getResult = () => {
    if (score <= 0) {
      return {
        decision: 'JavaScript Vanilla',
        explanation:
          'Basado en tus respuestas, JavaScript Vanilla parece ser la mejor opción. Tu proyecto parece ser más simple y directo, donde la velocidad y ligereza son importantes.',
      };
    } else {
      return {
        decision: 'Framework JavaScript',
        explanation:
          'Basado en tus respuestas, un Framework sería más beneficioso. Tu proyecto parece ser más complejo y requiere las ventajas que un framework puede ofrecer.',
      };
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {step < questions.length ? (
        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            Pregunta {step + 1} de {questions.length}
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            {questions[step].title}
          </h2>
          <p className="text-gray-700">{questions[step].question}</p>
          <div className="space-y-2">
            {questions[step].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.score)}
                className="w-full p-3 text-left bg-white rounded-lg shadow hover:bg-blue-50 transition-colors duration-200"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Resultado: {getResult().decision}
          </h2>
          <p className="text-gray-700">{getResult().explanation}</p>
          <button
            onClick={() => {
              setStep(0);
              setScore(0);
            }}
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Comenzar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
