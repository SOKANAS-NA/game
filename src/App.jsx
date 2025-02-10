
import { useState } from "react";

import Logic from "./components/Logic"; 

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null); //HOOK USESTATE AFIN DE METTRE A JOUR DYNAMIQUEMENT LE CHOIX DU PLAYER
 

  return ( //TAILWIND
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">⛰️ 📜 ✂️ Pierre - Papier - Ciseaux</h1>

      <div className="flex space-x-6">
        {["Pierre", "Papier", "Ciseaux"].map((choice) => ( //CREATION DES BTNS DE FACONS DYNAMIQUE GRACE A LA BOUCLE .MAP OU L INDEX EST CHOICE 
          <button
            key={choice}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            onClick={() => setPlayerChoice(choice)}
            //ENSUITE ON MET A JOURS LE CHOIX GRACE A SETPLAYERCHOICE OU LE CHOIX EST TOUT SIMPLEMENT UN DES 3 INDEX DU TABLEAU PIERRE PAPIER OU CISEAUX
          >
            {choice}
          </button>
          
        ))}
        
      </div>
      

      {playerChoice && <Logic playerChoice={playerChoice} />} {/*SI LE CHOIX DU PLAYER EST AUTRE QUE NULL ALORS ON ACTIVE LA LOGIQUE DU COMPONENT LOGIC PLAYERCHOICE EST ALORS TRANSMIS COMME PROPS A LOGIC AFIN DE PLACER LA LOGIQUE DU JEUX EN COURS*/}

      <button
        className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg"
        onClick={() => setPlayerChoice(null)}
      >
        🔄 Rejouer {/*BOUTTON REJOUER EN REINISITIALISANT LE SETLAYERCHOICE A NULL ET DONC ON CACHE LA PARTIE LOGIC AFIN DE REMETTRE LE TOUT A 0*/}
      </button>
    </div>
  );
};

export default App;
