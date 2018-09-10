import React from 'react';
import '../App.css';

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: ['Product 1', 'Product 2', 'Product 3', 'Product 4']
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.names.map((item) =>
                        <div className="ProductLine" >
                         <center><div className="ProductBox" >{item}</div></center>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Product;


