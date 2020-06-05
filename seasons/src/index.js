import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
    // Init state without the constructor: short and tidy
    state = { lat: null, errMsg: '' }
   
    componentDidMount() {
        // componentDidMount is used for Data Loading.
        // It's called only once.

        // Getting the current location
        window.navigator.geolocation.getCurrentPosition(
            // setState() is the only way to update the State
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMsg: err.message })
        )
    }
    
renderContent() {
    if (this.state.errMsg && !this.state.lat) {
        return <div>Error: {this.state.errMsg}</div>
    }

    if (!this.state.errMsg && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Spinner message="Waiting for Location Request..."/>
}

    // The content that needs to be displayed has been refactored inside
    // the renderContent function. This make it much easier to work on 
    // it in case we wanted to change some of its properties (eg changing
    // its css to give it a border) otherwise we would have had to change
    // the properties in the three cases of the if statement.
    // LESSON: AVOID CONDITIONALS WITHIN RENDER()
    render() {
       return (
           <div>
               {this.renderContent()}
           </div>  
       )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)