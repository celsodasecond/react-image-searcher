import React from 'react'

export default function ImageList( {images} ) {
    const imageOutput = images.map((image) => {
        return (
            <a  key={image.id} 
                href={image.largeImageURL} 
                class="ui medium image" 
                style={{
                    margin: '5px 5px 5px 5px', 
                    float: 'left',
                    width: '500px',
                    height: 'auto',
                    objectFit: 'cover', 
                    }}>
                <img src={image.webformatURL} />
            </a>
            
        )
    })
    return (
        <div>
            {imageOutput}
        </div>
    )
}
