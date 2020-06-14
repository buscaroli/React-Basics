import React from 'react'
import Note from './Note'


const NoteList = (props) => {
    const listOfNotes = props.list.map(note => 
            <Note   title={note.title}
                    text={note.text}
                    colour={note.colour}/>)

    return (
        <div 
            className="ui container" 
            style={{marginTop: '10px'}}>
            {listOfNotes}
        </div>
    )
}

export default NoteList