import React, { Component } from 'react'

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            xIsNext : true,
            stempNumber : 0,
            history: [
                { squares: Array(9).fill(null)}
            ]
        }
    }
    render() {
        return (
            <div className="game">
                <div className="game-board">

                </div>
                
            </div>
        )
    }
}
