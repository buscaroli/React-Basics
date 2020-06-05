import React from 'react'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const ApprovalCard = (props) => {

    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    {props.children}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic blue button">Approve</div>
                        <div className="ui basic orange button">Decline</div>
                    </div>
                </div>
            </div>
            
              
        </div>
    )
}

export default ApprovalCard