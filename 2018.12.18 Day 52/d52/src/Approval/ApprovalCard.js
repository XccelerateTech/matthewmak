import React from 'react';

let ApprovalCard = (props) => {
    return (
        <div className='card col-3' id='approval'>
            {props.children}
            <div className='bottom-button'>
                <div className='btn btn-success btn-space col-5'>Accept</div>
                <div className='btn btn-danger btn-space col-5'>Reject</div>
            </div>
        </div>
    )
}

export default ApprovalCard;