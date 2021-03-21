import React from 'react'
import { BlockCard } from './styles'

function Block(props) {
    return (
        <BlockCard color = {props.color} />
    )
}

export default Block