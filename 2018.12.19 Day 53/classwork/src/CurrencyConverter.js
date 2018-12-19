import React from 'react';

class CurrencyConverter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hkd: null,
            usd: null
        }
        this.UsdHkdConversionRate = 7.75;
    }

    render () {
        return (
            <div className='ul card col-4 p-2 m-2'>
                <label>Enter HKD</label>
                <input type='text' name = 'hkd' value = {this.state.hkd} onChange={this.handleChange}></input>
                <label>Enter USD</label>
                <input type='text' name = 'usd' value = {this.state.usd} onChange={this.handleChange}></input>
            </div>
        )
    }

    handleChange = (e) => {
        if (e.target.name === 'hkd') {
            this.setState({hkd:e.target.value});
            this.setState({usd:e.target.value * this.UsdHkdConversionRate});
        } else if (e.target.name === 'usd') {
            this.setState({usd:e.target.value});
            this.setState({hkd:e.target.value / this.UsdHkdConversionRate});
        }
    }
}

export default CurrencyConverter;