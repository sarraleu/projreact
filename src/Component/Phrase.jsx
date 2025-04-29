import React from 'react';
class Phrase extends Component {
    constructor (){
        super()
        this.state={phrase:''}
    }
    change1=()=>{this.setState({phrase:''})
    render() {
        const{phrase}= this.state;
        return(<p phrase={''} ></p>
    
           
        )
    }  
}
}}