import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
import NoteList from './NoteList'


class App extends React.Component {
    state = {
        notes: []
    }

    onNoteCreation = (value) => {
        this.setState(prevState => ({
            notes: [...prevState.notes, value]
        }))

    }

    // TODO: to be removed, just for debugging
    componentDidUpdate(){
        console.log('from App didMount: ', this.state)
    }



    render() {
        return(
            <div className="ui container">
                <h1 
                    className="ui huge header" 
                    style={{textAlign: 'center', marginTop: '10px'}}>
                        Keep Your Notes
                </h1>
                <AddNote onNoteCreation={this.onNoteCreation} />
                <NoteList list={this.state.notes}/>
            </div>
        )
    }
}

export default App