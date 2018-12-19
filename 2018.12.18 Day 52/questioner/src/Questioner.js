import React, { Component } from 'react';
import Question from './Question';

class Questioner extends Component {
    constructor(props) {
        super(props);
        this.list = [
            {id:1,question:'If you could give one piece of advice to the whole world, what would it be?'},
            {id:2,question:'Would you rather be stuck in a house with someone you hate or be stuck in a house alone?'},
            {id:3,question:'Do you read reviews about a movie before deciding whether to watch it or not?'}
        ]
        this.state = {}
    }

    render() {
        const Qlist = this.list.map(q => {
            return (
                <Question question={q.question}></Question>
            )
        })

        return (
            <div>
                {Qlist}
            </div>
        )
    }
}

export default Questioner;