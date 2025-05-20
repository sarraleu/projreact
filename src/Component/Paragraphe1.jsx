import { useState } from "react";
import Paragraphe from "./Paragraphe";


function Paragraphe1 (){
    const[text,SetText]=useState(
    {
        couleur:'black',
        taille:'16px',
        police:'Arial'
    }
);
const changer1=()=>{
    SetText(prev=>({...prev,
        couleur:"red",
        taille:"20px"}));
    };
    const quitter =()=>{
        SetText(prev =>({
            ...prev,couleur:"black",taille:"16px"}
        ));
    };
    return(
        <div>
            <p style={{color:text.couleur,fontSize:text.taille,fontFamily:text.police}}
            onMouseEnter={changer1}
            onMouseLeave={quitter}>je change ma couleur et mon taille</p>
        </div>
    );

    
}
export default Paragraphe1