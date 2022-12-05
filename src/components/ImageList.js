import React from 'react'

export default function ImageList( {images} ) {
    const imageOutput = images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="image" />
    })
    return (
        <div>
            {imageOutput}
        </div>
    )
}
