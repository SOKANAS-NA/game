/* eslint-disable react/prop-types */
//LOGIQUE DU JEUX
const Logic = ({ playerChoice }) => {
    const choices = ["Pierre", "Papier", "Ciseaux"]; //CHOIX AVEC LES 3 MOTS
    const computerChoice = choices[Math.floor(Math.random() * 3)]; //CHOIX ALEATOIRE DE  L ADVERSAIRE VIRTUEL QUI EST RANDOM*3 AFIN DE CHOISIR LES ELEMENTS DU TABLEAU ALEATOIREMENT DE 0 A 2 GRACE AU MATHFLOOR
  
    const determineWinner = (player, computer) => { {/*DETERMINATION DU GAGNANT*/}
      if (player === computer) return "Égalité !"; {/*SI LE JOUEUR A LE MEME CHOIX QUE LE MEME CHOIX QUE L ORDINATEUR ALORS EGALITE*/}
      if ( //SI LE JOUEUR A CHOISI LES TROIS BONS ALORS IL A GANE AUTREMENT C EST L ADVERSAIRE QUI A GAGNE
        (player === "Pierre" && computer === "Ciseaux") || 
        (player === "Papier" && computer === "Pierre") ||
        (player === "Ciseaux" && computer === "Papier") 
      ) {
        return "T' as gagné ! 🎉";
      }
      return "Ton adversaire a gagné !";
    };
  
    const result = determineWinner(playerChoice, computerChoice); //LE RESULTAT  EST DEFINI SELON LE CHOIX DES DEUX JOUEUR
  
    return (
      <div className="text-center mt-6 p-4 bg-gray-700 text-white rounded-lg shadow-md">
        <p> Vous : <span className="font-bold text-yellow-400">{playerChoice}</span></p>
        <p>adversaire : <span className="font-bold text-red-400">{computerChoice}</span></p>
        <p className="text-2xl font-bold mt-4">{result}</p>
      </div>
    );
  };
  
  export default Logic;
  