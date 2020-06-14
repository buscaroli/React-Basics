import React from 'react'


class Note extends React.Component {
    state = {
        title: '',
        text: '',
        colour: ''
    }

    render() {    
        return(
            <div className="ui raised card">
                <div className="content" style={{background: this.props.colour}}>
                    <div className="header" >
                        {this.props.title}
                    </div>
                    <div className="description" >
                    <p>
                        {this.props.text}
                    </p>
                </div>
                </div>
    
            </div>
        )
    }
    
}

export default Note