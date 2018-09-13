import React from 'react';
import axios from 'axios';
import Product from './Product';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount () {

        axios.get('http://www.mocky.io/v2/5b9a80423000006900e7c153')
        .then(res => {
            this.setState(() => ({ movies: res.data }))
            console.log(this.state.movies);
        });
    }

    render() {
        return (
            <div className="container">
                {
                    
                    this.state.movies.map((movie, i) =>
                        // <div className="ProductLine" key ={i}>
                        //  <center><div className="ProductBox" >{movie.title}</div></center>
                        // </div>

                        <Product key={i} movie={movie} index={i} />
                    )
                }
            </div>
        );
    }
}

export default Products;