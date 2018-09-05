import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Lavi'   
        };
    }

    handleChange = (event) => {
        this.setState({name: event.target.value})

       // this.setState(() => ({ name: event.target.value }))
      }
    
    render() {

        return (
            <div>
                <h3>Hello {this.state.name}</h3>
                <input type="text" onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default Input;