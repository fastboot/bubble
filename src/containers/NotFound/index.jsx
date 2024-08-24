import React from 'react'
import { StyledDiv, Message, Heading } from './styles'

function Notfound() {
    console.log("this is being rendered");
    return (
        <React.Fragment>
            <StyledDiv>
                <Heading> 404 </Heading>
                <Message> That page doesn't exist.</Message>
            </StyledDiv>
        </React.Fragment>
    )
}

export default Notfound