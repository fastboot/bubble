import React from 'react'
import { GradientAnimated, PageHeading } from './styles'
import Block from '../../components/Blocks'

function Geeky(props) {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading>
                Geeky
            </PageHeading>
            <Block variant = 'standard' color = 'white'>
                <h1> Hello </h1>
            </Block>
        </React.Fragment>
    )
}

export default Geeky