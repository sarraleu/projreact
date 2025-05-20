import { useState } from "react";

function Utilisateur (){
    const [user,SetUser]=useState(
        {
            nom:'',
            prenom:'',
            age:''
        }
    );
    const changer=(e)=>{
        const {name,value}=e.target
        SetUser({ ...user,[name]:value});
    }
    return(
        <div>
            <input type="text" name="nom" onChange={changer}/>
            <input type="text" name="prenom" onChange={changer}/>
            <input type="text" name="age" onDoubleClick={changer}/>
            <p>l'Utilisateur est :{user.nom},{user.prenom},{user.age} </p>
        </div>
    )
}
export default Utilisateur