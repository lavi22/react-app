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
            this.setState(() => ({ currentData: res.data }))
            console.log(this.state.currentData);
        });
      }
    
    render() {

        return (
            <div className="FeedBox">
                {
                    this.state.currentData ? this.state.currentData.map((currentData, i) => (
                        <p key= {i}>Name: {currentData.name}. Occupation: {currentData.occupation}!</p>    
                    )) : null
                } 
                {/* <h3>Name: {this.state.data ? this.state.data[1].name : null}. Occupation: {this.state.data ? this.state.data[1].occupation : null}</h3> */}
            </div>
        );
    }
}


export default Feed;