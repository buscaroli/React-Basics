import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Luke Skywalker" 
                    avatar={faker.image.avatar()} 
                    text="I am gonna write a rude comment now..."/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Matt" 
                    avatar={faker.image.avatar()} 
                    text="Nice post."/>
            </ApprovalCard>
            <CommentDetail author="Jane" avatar={faker.image.avatar()} text="Love it! Keep up the good work!"/>
            <CommentDetail author="Sue" avatar={faker.image.avatar()} text="John shut up!"/>
            <CommentDetail author="John" avatar={faker.image.avatar()} text="Not very impressed, Content was too shallow for me."/>
            <CommentDetail author="Mike" avatar={faker.image.avatar()} text="Amazing, will recommend to friends!"/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))