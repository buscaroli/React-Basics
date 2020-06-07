import React from 'react'


class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 }

        // With the Ref system we can get the handle of a specific
        // element. It's kind of similar to document.querySelector()
        // in the DOM.
        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)

        this.setState({ spans })
    }
    
    render() {
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref={this.imageRef}
                alt={this.props.image.description} 
                src={this.props.image.urls.regular}/>
            </div>
        )
    }
}

export default ImageCard