import React, { Fragment } from 'react'
import { StyledLi, StyledUl, StyledImg } from './styles'
import p1 from '../../assets/clicks/p1.png'
import p2 from '../../assets/clicks/p2.png'
import p3 from '../../assets/clicks/p3.png'
import p4 from '../../assets/clicks/p4.png'
import p5 from '../../assets/clicks/p5.png'
import p7 from '../../assets/clicks/p7.png'
import p8 from '../../assets/clicks/p8.png'
import p9 from '../../assets/clicks/p9.png'

function Grid() {
    return (
        <Fragment>
            <StyledUl>
                <StyledLi>
                    <StyledImg src = { p1 } alt = 'p1' />
                </StyledLi>
                <StyledLi>
                    <StyledImg src = { p2 } alt = 'p2' />
                </StyledLi>
                <StyledLi>
                    <StyledImg src = { p3 } alt = 'p3' />
                </StyledLi>
                <StyledLi>
                    <StyledImg src = { p4 } alt = 'p4' />
                </StyledLi>
                <StyledLi>
                    <StyledImg src = { p5 } alt = 'p5' />
                </StyledLi>
                <StyledLi>
                    <StyledImg src = { p7 } alt = 'p7' />
                </StyledLi>
                <StyledLi>
                    <StyledImg src = { p8 } alt = 'p8' />
                </StyledLi>
                <StyledLi>
                    <StyledImg src = { p9 } alt = 'p9' />
                </StyledLi>
            </StyledUl>
        </Fragment>
    )
}

export default Grid