import React from 'react'
import { IconsMenu } from './styles'

function Icon (props) {
    const source = props.imgsrc
    const alter = props.imgalt
    return (
        <React.Fragment>
            <IconsMenu>
                <img src = { source } alt = {alter} />
            </IconsMenu>
        </React.Fragment>
    )
}

export default Icon