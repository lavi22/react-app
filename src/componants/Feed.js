import React from 'react'
import axios from 'axios'

class Feed extends React.Component {

    constructor(props){

        super(props)
        this.state = {
        }
      }

      componentDidMount(){

        axios.get('http://www.mocky.io/v2/5b967e723000006e000bd2f4')
        .then(res => {
            this.setState(() => ({ data: res.data }))
            console.log(this.state.data);
        });
      }
    
    render() {

        return (
            <div className="FeedBox">
                {
                    this.state.data.map((data, index) => (
                        <p key={index}>Hello, {data.name} occupation, {data.occupation}!</p>       
                    ))
                } 
                {/* <h3>Name: {this.state.data ? this.state.data[1].name : null}. Occupation: {this.state.data ? this.state.data[1].occupation : null}</h3> */}
            </div>
        );
    }
}

export default Feed;