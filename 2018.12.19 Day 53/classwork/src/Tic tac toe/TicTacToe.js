import React from 'react';
import SingleBox from './SingleBox';
import Statement from './Statement';

class TicTacToe extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            list:[
                {id:1,status:''},{id:2,status:''},{id:3,status:''},
                {id:4,status:''},{id:5,status:''},{id:6,status:''},
                {id:7,status:''},{id:8,status:''},{id:9,status:''}
            ]
        }
        this.turn = 1;
        this.player = 0;
        this.winLose = 'No';
    }

    clickbox = (id) => {
        if (this.winLose === 'No') {
            let newList = this.state.list;
            this.player = this.turn%2;
            if (this.player === 1) {
                if (newList[id-1].status === '') {
                    newList[id-1].status = 'X';
                    this.setState({list:newList})
                    this.turn++;
                }
            } else {
                if (newList[id-1].status === '') {
                    newList[id-1].status = 'O';
                    this.setState({list:newList})
                    this.turn++;
                }
            }
            if (this.determineWinLose()) {
                this.winLose = 'Win'
            } else if (this.turn === 10) {
                this.winLose = 'Draw'
            }
        }
    }

    determineWinLose = () => {
        let winTable = [
            [1,2,3],[4,5,6],[7,8,9],[1,4,7],
            [2,5,8],[3,6,9],[1,5,9],[3,5,7]
        ]

        for (let pattern in winTable) {
            if (this.state.list[winTable[pattern][0]-1].status === '') {
                continue;
            } else {
                if (this.state.list[winTable[pattern][0]-1].status === this.state.list[winTable[pattern][1]-1].status && 
                    this.state.list[winTable[pattern][1]-1].status === this.state.list[winTable[pattern][2]-1].status) {
                    return true;
                }
            }
        }
        return false;
    }

    render () {
        const table = this.state.list.map((b) => {
            return <SingleBox id={b.id} clickbox={this.clickbox} status={b.status}></SingleBox>
        })

        return (
            <div id='TicTacToe' className='col-4 m-4'>
                {table}
                <Statement winLose={this.winLose} player={this.player}></Statement>
            </div>
        )
    }
}

export default TicTacToe;