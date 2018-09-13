import React from 'react';
// import img from '../../images/img1.PNG';

const Product = ({movie}) => (

    <div className="ProductLine" >
        <div className="ProductBox">
            <h4> {movie.title}  </h4>
            <p> {movie.subtitle}  </p>
            <p> Description: {movie.description}  </p>
            <p> Year: {movie.year}  </p>
            <p> Rating: {movie.rating}  </p>

            <img height="100" src={movie.imageUrl} />
        </div>
    </div>
)

export default Product;