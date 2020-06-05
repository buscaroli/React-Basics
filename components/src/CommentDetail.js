import React from 'react'

const CommentDetail = (props) => {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img src={props.avatar} alt="avatar"/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
<span className="date">{hours +':' + minutes}</span> 
            </div>
            <div className="text">{props.text}</div>
        </div>
    </div>
    )
}

export default CommentDetail