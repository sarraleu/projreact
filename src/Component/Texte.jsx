import React,{ Component} from "react";
class Texte extends Component
{constructor()
    {
        super()
        this.state={text:''}
    }
    changer=(e)=>{
        this.setState({text:e.target.value})
    }
    render()
    { return(
        <div> <input type="text"
        value={this.state.value}
        onChange={this.changer} />
        <p> vous avez saisir : {this.state.text}</p></div>

    )}
}
export default Texte