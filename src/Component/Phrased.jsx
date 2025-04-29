import React,{ Component} from "react";
class Phrased extends Component
{
    constructor()
    {
        super()
        this.state={text:'kjhuytr fddsee trreze'}
    }
    change1=()=>{ this.setState({text:this.state.text.toUpperCase()})
    //change2=()=>{ this.setState({text:''.toLowerCase})
    //}
    
    render()
    { //const{text}= this.state;
        
        return(
        <div>
            <p>{this.state.text}</p><button onClick={this.transformer}>transformer</button>
        <button onClick={this.reinitialiser}>reinitialiser</button>
        
        <p> le courage nest pas labsance de peur  : {this.state.text}</p></div>


    )}
}}
export default Phrased