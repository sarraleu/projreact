import { useState } from "react";

function Compteur1() {
   // const[etat,setEtat]=useState(0)
   const[compteur,SetCompteur]=useState(0)
   const incrementer=()=>{ //SetCompteur(compteur+1);
  SetCompteur(comp=>comp+1)
   };
return (
    <div>
      <p>Compteur :{compteur} </p>
      <button onClick={incrementer}>incrementer</button>
    </div>
);
}
export default Compteur1
