import React from 'react';

class Statement extends React.Component {

    render () {
        let statement = '';

        if (this.props.winLose === 'Win') {
            if (this.props.player === 0) {
                statement = `Player 2 (O) wins!!!`
            } else {
                statement = `Player 1 (X) wins!!!`
            }
        } else if (this.props.winLose === 'Draw') {
            statement = "It's a draw......"
        } else if (this.props.player === 1) {
            statement = "It's Player 2 (O) move"
        } else {
            statement = "It's Player 1 (X) move"
        }

        return (
            <div id='Statement'>
                <h2>Note:</h2>
                <p>{statement}</p>
            </div>
        )
    }
}

export default Statement;