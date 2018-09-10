import React from 'react'
import '../App.css';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Lavi'   
        };
    }

    handleChange = (event) => {
        
        this.setState({name: event.target.value})

        // this.setState(() => ({ 
        //     name: event.value
        // }))
      }
    
    render() {

        return (
            <div>
                <h3>Hello {this.state.name}</h3>
                <input type="text" className="InputBox" onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default Input;