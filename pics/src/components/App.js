import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'

class App extends React.Component {
    state = {
        images: []
    }
    
    onSearchSubmit = async (term) => {
        // NOTE: ALL env var names need to start with 'REACT_APP_' !!!!
        try {
            const response = await unsplash.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term
                }
            })

            this.setState({ images: response.data.results })
            // console.log(response.data.results[0].urls.regular)
            }
        catch (e) {
            console.log(e)
        }
    }

    render() {
        // I'm passing the property onMySubmit (which contains a reference 
        // to the method onSearchSubmit) as a callback to the child component 
        // SearchBar in order to allow it to pass a message upstream from
        // child to parent.
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onMySubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length}
            </div>
        )
    }
}

export default App