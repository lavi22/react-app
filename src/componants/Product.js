import React from 'react'
import '../App.css';

class Product extends React.Component {
  
  constructor(props) {
    super(props);
    location: [
      {
          id: 0,
          title: 'New York',
          selected: false,
          key: 'location'
      },
      {
        id: 1,
        title: 'Dublin',
        selected: false,
        key: 'location'
      },
      {
        id: 2,
        title: 'California',
        selected: false,
        key: 'location'
      },
    ]
  }



  handleChange = (event) => {
        
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {

    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div className="ProductSection" >
        <Dropdown
          title="Select location"
          list={this.state.location}
        />
      </div>
    );
  }
}

export default Product;


