import React, { Component } from 'react';
import ApprovalCard from './ApprovalCard';
import CommentCard from './CommentCard';

class App extends Component {
    render() {
        return (
            <ApprovalCard>
                <CommentCard author='Superman' date='Judgement day' comment='Hire me!'></CommentCard>
            </ApprovalCard>
        )
    }
}

export default App;