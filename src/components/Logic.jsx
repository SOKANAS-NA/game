/* eslint-disable react/prop-types */
//LOGIQUE DU JEUX
const Logic = ({ playerChoice }) => {
    const choices = ["Pierre", "Papier", "Ciseaux"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    const determineWinner = (player, computer) => {
      if (player === computer) return "Égalité !";
      if (
        (player === "Pierre" && computer === "Ciseaux") ||
        (player === "Papier" && computer === "Pierre") ||
        (player === "Ciseaux" && computer === "Papier")
      ) {
        return "T' as gagné ! 🎉";
      }
      return "Ton adversaire a gagné !";
    };
  
    const result = determineWinner(playerChoice, computerChoice);
  
    return (
      <div className="text-center mt-6 p-4 bg-gray-700 text-white rounded-lg shadow-md">
        <p> Vous : <span className="font-bold text-yellow-400">{playerChoice}</span></p>
        <p>adversaire : <span className="font-bold text-red-400">{computerChoice}</span></p>
        <p className="text-2xl font-bold mt-4">{result}</p>
      </div>
    );
  };
  
  export default Logic;
  