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


// Factory:
// export default class Menu {

//     constructor() {
 
//         this.isOpen = false;
//     }
 
//     close() {
 
//         this.isOpen = false;
//     }
 
//     open() {
 
//         this.isOpen = true;
//     }
 
//     toggle() {
 
//         this.isOpen = !this.isOpen;
//     }
 
//     steven(num = 0) {
 
//         return num + 1;
//     }
//  }


//  Test:
//  import Menu from './session-storage.class';

// describe('The menu class', () => {

//    it('should be closed by default', () => {

//        var menu = new Menu();
//        expect(menu.isOpen).toBe(false);
//    });

//    it('should open the menu', () => {

//        var menu = new Menu();
//        menu.open();

//        expect(menu.isOpen).toBe(true);
//    });

//    it('should close the menu', () => {

//        var menu = new Menu();
//        menu.close();

//        expect(menu.isOpen).toBe(false);
//    });

//    it('should toggle the menu', () => {

//        var menu = new Menu();

//        menu.toggle();
//        expect(menu.isOpen).toBe(true);

//        menu.toggle();
//        expect(menu.isOpen).toBe(false);

//        menu.toggle();
//        expect(menu.isOpen).toBe(true);

//        menu.toggle();
//        expect(menu.isOpen).toBe(false);

//        menu.toggle();
//        expect(menu.isOpen).toBe(true);

//        menu.toggle();
//        expect(menu.isOpen).toBe(false);
//    });

//    it('', () => {

//        var menu = new Menu();

//        expect(menu.steven()).toBe(1);
//        expect(menu.steven(2)).toBe(3);

//        expect(menu.steven('jellloooo')).toBe("whatever");
//    })
// });

