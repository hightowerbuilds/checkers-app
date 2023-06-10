import React, {Component} from 'react'
import WhitePiece from './WhitePiece'
import BlackPiece from './BlackPiece';
import './Tile.css'

class Tile extends Component {

    static defaultProps = {

        color: ['limegreen', 'gold'], 
        title:   [<WhitePiece />, <BlackPiece/>, ' ' ],
        width: '50px',
        board: ['beige', '#242424']
    }

    constructor(props){
        super(props);
        this.state = { title: '', board: 'navy'};
        this.choose = this.choose.bind(this);
    }

    choose(){
        
        const piece = Math.floor(Math.random() * 2)
        /*
         need a function that will flip through each entry 
         succinctly 
        */
        const piecePlus = Math.floor(Math.random() * 3)
        this.setState(  {title: this.props.title[piecePlus]})
        this.setState( {color: this.props.color[piecePlus]})
        this.setState( {backgroundColor: this.props.board[piece]})
    }

    render(){
        return (
        <div >
        <div style={{ color: this.state.color }} className='tile'>
              <div className='shape' style={{ backgroundColor: this.state.board }} onClick={this.choose}>
                {this.state.title}
               
                
                </div>
        </div>
        </div>
        )
    }


}

export default Tile;