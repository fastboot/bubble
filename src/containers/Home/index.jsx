import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    StyledDiv, 
    StyledDiv2X, 
    Strip, 
    PageWrapper 
} from './styles'
import Typer from '../../components/Typer'

function HOME(props) {
    const msgs = ["Bonjour", "Hola", "Olá", "Asalaam alaikum", "Namaste", "Hello"];
    return (
        <PageWrapper>
            <GradientAnimated> 
                <PageHeading> <Typer heading={"Things I want to type:"} messages={msgs} /> </PageHeading>
            </GradientAnimated>
            <StyledDiv> <h1>StyledDiv</h1> </StyledDiv>
            <Strip stripcolor = "#1DB954" > A styled strip </Strip>
            <StyledDiv2X> <h1> Liar </h1> </StyledDiv2X>
            <Strip stripcolor = "#FF0000" > Another one! </Strip> 
        </PageWrapper>
    )
}

export default HOME