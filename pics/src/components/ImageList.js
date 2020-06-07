import React from 'react'


const ImageList = (props) => {
    let myList = props.images.map((img) => <img key={img.id} alt={img.alt_description} src={img.urls.regular} />)
    return (
        <div>{myList}</div>
    )
}

export default ImageList