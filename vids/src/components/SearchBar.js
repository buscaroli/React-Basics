import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState ({ term: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onTermSubmit(this.state.term)
        // TODO: remember to call callback from parent component
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search-text">Search</label>
                        <input  type="text" 
                                name="search-text" 
                                id="search-text" 
                                placeholder="Search here..."
                                value={this.state.term}
                                onChange={this.onInputChange}/>
                    </div>

                </form>

            </div>
        )
    }
}

export default SearchBar