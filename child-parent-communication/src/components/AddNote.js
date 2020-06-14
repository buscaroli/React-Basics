import React from 'react'


class AddNote extends React.Component {
    state = {
        title: '',
        text: '',
        colour: ''
    }

    componentDidMount(){
        this.setState({colour: 'yellow'})
    }

    onNoteSubmit = event => {
        event.preventDefault()
        this.props.onNoteCreation(this.state)
    }

    render() {
        return (
            <div>
                <form 
                    className="ui form" 
                    onSubmit={this.onNoteSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <textarea 
                            rows="1" 
                            type="text" 
                            name="title" 
                            placeholder="Title"
                            value={this.state.title}
                            onChange={e => {
                                                                 
                                    this.setState({ title: e.target.value })
                                    }
                                } 
                            required/>
                    </div>
                    <div className="field">
                        <label>Text</label>
                        <textarea 
                            rows="6" 
                            type="text" 
                            name="text" 
                            placeholder="Text"
                            value={this.state.text}
                            onChange={e => this.setState({ text: e.target.value })} 
                            required/>
                    </div>
                
                    <div className="inline fields">
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name="colour"
                                    onChange={e => this.setState({ colour: 'yellow' })} 
                                    defaultChecked/>
                                <label>Yellow</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    onChange={e => this.setState({ colour: 'pink' })} 
                                    name="colour" />
                                <label>Pink</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    onChange={e => this.setState({ colour: 'lightgreen' })} 
                                    name="colour" />
                                <label>Green</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                type="radio" 
                                onChange={e => this.setState({ colour: 'lightblue' })} 
                                name="colour" />
                                <label>Blue</label>
                            </div>
                        </div>

                    </div>
                
                    <button 
                        className="ui button"
                         
                        type="submit">
                            Submit
                        </button>
                </form>
            </div>  
        )
    }
}


export default AddNote