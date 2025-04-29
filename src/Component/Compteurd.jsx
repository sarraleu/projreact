import React, {Component }from "react"
class Compteurd extends Component {

    constructor ()
    {
        super()
        this.state={compt:0}
    }
    incrementer=()=>
    {this.setState({compt:this.state.compt +1})}
    decrementer=()=>
        {this.setState({compt:this.state.compt -1})}
    reset=()=>
        {this.setState({compt:this.state.compt =0})}
    render()
    
{
return (<div>
    <p>la valeur du compteur est{this.state.compt}</p>
    <button onClick={this.incrementer}>incrementer</button>
    <button onClick={this.decrementer}>decrementer</button>
    <button onClick={this.reset}>restet</button>
    
</div>)
}
};
export default Compteurd 