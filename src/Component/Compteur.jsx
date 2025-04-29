import React, {Component }from "react"
class Compteur extends Component {

    constructor ()
    {
        super()
        this.state={compt:0}
    }
    incrementer=()=>
    {this.setState({compt:this.state.compt +1})}
    render()
{
return (<div>
    <p>la valeur du compteur est{this.state.compt}</p>
    <button onClick={this.incrementer}>ok</button>
</div>)
}
};
export default Compteur 