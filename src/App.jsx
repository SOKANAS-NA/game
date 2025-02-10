
import { useState } from "react";

import Logic from "./components/Logic"; 

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">⛰️ 📜 ✂️ Pierre - Papier - Ciseaux</h1>

      <div className="flex space-x-6">
        {["Pierre", "Papier", "Ciseaux"].map((choice) => (
          <button
            key={choice}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            onClick={() => setPlayerChoice(choice)}
          >
            {choice}
          </button>
        ))}
      </div>

      {playerChoice && <Logic playerChoice={playerChoice} />}

      <button
        className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg"
        onClick={() => setPlayerChoice(null)}
      >
        🔄 Rejouer
      </button>
    </div>
  );
};

export default App;
