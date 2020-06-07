import React from 'react'


const ImageList = (props) => {
    console.log(props.images)
    let myList = props.images.map((img) => <div key={img.id}><img alt="" src={img.urls.small} width="200px"/> {img.alt_description} </div>)
    return (
        <div>{myList}</div>
    )
}

export default ImageList