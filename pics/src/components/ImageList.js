import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'


const ImageList = (props) => {
    const myList = props.images.map((img) => 
        <ImageCard key={img.id} image={img} />
    )
    return (
        <div className="image-list">
            {myList}
        </div>
    )
}

export default ImageList