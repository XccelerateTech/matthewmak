import React from 'react';

class SingleBox extends React.Component {

    render () {
        let symbol = ''
        if (this.props.status === 'X') {
            symbol = <i class="fas fa-times"></i>
        } else if (this.props.status === 'O') {
            symbol = <i class="far fa-circle"></i>
        }
        
        return (
            <div className='box card p-3 m-2' onClick={()=>this.props.clickbox(this.props.id)} key={this.props.id}>
                {symbol}
            </div>
        )
    }
}

export default SingleBox;