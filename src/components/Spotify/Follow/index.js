import React from 'react'

function Follow(props) {

    return (
        <iframe 
            src={props.src} 
            title='follow'
            width={props.width} 
            height={props.height} 
            scrolling="no" 
            frameborder="0"
            allowtransparency="false"
        >
        </iframe>
    )
}

export default Follow