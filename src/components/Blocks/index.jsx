import { Fragment } from 'react'
import { BlockDiv, CardDiv } from './styles'

function Block(props) {
    return (
        <Fragment>
        { props.isCard &&
            <CardDiv 

            />
        }
        { !props.isCard &&   
            <BlockDiv 
                variant = {props.variant} 
                color = {props.color} 
                icon = {props.icon}
            />
        }
        </Fragment>
    )
}

export default Block