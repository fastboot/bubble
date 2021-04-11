import React from 'react'
import { BlockDiv } from './styles'

function Block(props) {
    return (
        <BlockDiv 
            variant = {props.variant} 
            color = {props.color} 
            icon = {props.icon}
        />
    )
}

export default Block