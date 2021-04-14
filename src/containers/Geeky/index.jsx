import React from 'react'
import { GradientAnimated, PageHeading } from './styles'
import HeatmapComponent from './components/github/Heatmap'
import Block from '../../components/Blocks'

function Geeky(props) {
    console.log('yesaj',props)
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading>
                Geeky
            </PageHeading>
                <HeatmapComponent currTheme = {props.currTheme} />
            <Block />
        </React.Fragment>
    )
}

export default Geeky