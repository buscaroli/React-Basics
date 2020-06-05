import React from 'react'
import ReactDOM from 'react-dom'


function getButtonText () {
    return 'Please Click Me!!'
}

const App = () => {
    const secondBtnText = 'No, Click me Instead!'
    const secondBtnStyle = { backgroundColor: 'blue',
                             color: 'yellow',
                             padding: '5px',
                             borderRadius: '10px',
                             margin: '10px'
                            }
    return (
        <div>
            <label style={{ padding: '10px' }}htmlFor="name" className="label">Name</label>
            <input style={{ padding: '10px' }}type="text" id="name" placeholder="name here"/>
            <button style={{ backgroundColor: 'green', color: 'snow', padding: '10px' }}>{ getButtonText() }</button>
            <br />
            <label style={{ padding: '10px' }}htmlFor="name" className="label">Address</label>
            <input style={{ padding: '10px' }}type="text" id="address" placeholder="address here"/>
            <button style={ secondBtnStyle }>{ secondBtnText }</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)