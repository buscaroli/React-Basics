import React from 'react'


class SearchBar extends React.Component {
    state = { term: ''}
      
    // NOTE Arrow Function required to bind this to the Class
    onFormSubmit = (event) => {
        event.preventDefault()
        
        this.props.onMySubmit(this.state.term)  // we need this.props as we are
                                                // in a class not a function
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label htmlFor="searchBar">Image Search</label>
                        <input name="searchBar" id="searchBar" 
                            type="text" placeholder="Search"
                            value={ this.state.term } 
                            onChange={ e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar