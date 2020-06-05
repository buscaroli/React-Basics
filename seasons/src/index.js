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
    
    render() {
        if (this.state.errMsg && !this.state.lat) {
            return <div>Error: {this.state.errMsg}</div>
        }

        if (!this.state.errMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner />
       
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)