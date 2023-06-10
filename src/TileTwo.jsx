import React, { Component } from 'react'
import './TileTwo.css'

class TileTwo extends Component {

    static defaultProps = {

        color: ['orange', 'limegreen'], 
        title: [''],
        board: ['beige', '#242424']
    }

    constructor(props){
        super(props);
        this.state = { title: '', board: 'beige'};
        this.choose = this.choose.bind(this);
    }


    
    choose(){
        const piece = Math.floor(Math.random() * 2)
        this.setState( {title : this.props.title[piece]})
        this.setState( {color: this.props.color[piece]})
        this.setState( {color: this.props.board[piece]})
     
    }

    render(){
        return (

        <div onClick={this.choose}>
        <div style={{ color: this.state.color}} className='tile'>
        <div className='shape' style={{ backgroundColor: this.state.board }} >{this.state.title}</div>
        </div>
        </div>
        )
    }
}
export default TileTwo;