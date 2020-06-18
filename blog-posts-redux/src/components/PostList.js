import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import UserHeader from './UserHeader'


class PostList extends React.Component {
    renderList() {
        return this.props.posts.map((post) => {
            return (
                <div key="post.id" className="item">
                    <i className="large middle align icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            )
        })
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    render() {
        return(
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)