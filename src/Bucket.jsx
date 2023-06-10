import React, { Component } from "react";
import './Bucket.css'
import Tile from './Tile';
import TileTwo from "./TileTwo";

class Bucket extends Component {

    static defaultProps = {
        tiles: 4,
    };

    constructor(props){
        super(props);
        this.state = { }
    }

    render(){
        const fullBoard = Array.from({ length: this.props.tiles }).map(() => (
        <>  
        <TileTwo />
        <Tile /> 
        <TileTwo />
        <Tile /> 
        <TileTwo />
        <Tile /> 
        <TileTwo />
        <Tile /> 

        <Tile /> 
        <TileTwo />
        <Tile /> 
        <TileTwo />
        <Tile /> 
        <TileTwo />
        <Tile /> 
        <TileTwo />
        </>
        ))
       

        return(<div className="bucket"> 
        { fullBoard }
        </div>)
        
    }
}

export default Bucket;