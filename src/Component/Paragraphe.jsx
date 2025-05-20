import { useState } from "react";

function Paragraphe (){
    const [paragraphe, setParagraphe]=useState("");
    const copier =(e)=>{
        setParagraphe(e.target.value);
};
return (
    <div>
        <input type="text" name="paragraphe" placeholder="faites entrer un paragraphe"
       onDoubleClick={copier}/>
        
        <p>vous avez saisi: {paragraphe}</p>
    </div>
);
}
export default Paragraphe