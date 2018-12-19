import React, {Component} from 'react';

class Recipe extends Component {
    render () {
        return (
            <div className='card'>
            <img src='https://www.edamam.com/web-img/f04/f047c20ba9e3747390e428916bef5dba.jpg' className='card-img-top' alt='recipt'></img>
            <h3 className='card-title'>Spiced Lamb Ragu Shells</h3>
            <div className='card-header'>
                Instruction
            </div>
            <ol className="list-group list-group-flush">
                <li className="list-group-item">Heat large covered saucepot salted water to boiling on high. Cook pasta as label directs.</li>
                <li className="list-group-item">Meanwhile, in 12-inch skillet, heat oil on medium-high. Add onion, garlic, and 1/8 teaspoon salt. Cook 5 minutes or until tender, stirring. Stir in lamb, cumin, coriander, cinnamon, red pepper, and 1/2 teaspoon salt. Cook 3 minutes or until browned, stirring. Drain fat.</li>
            </ol>
        </div>
        )
    }
}

export default Recipe;