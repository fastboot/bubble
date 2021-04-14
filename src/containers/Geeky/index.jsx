import React from 'react'
import { GradientAnimated, PageHeading } from './styles'
import HeatmapComponent from './components/github/Heatmap'
import Block from '../../components/Blocks'

function Geeky(props) {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading>
                Geeky
            </PageHeading>
                <HeatmapComponent currTheme = {props.currTheme} />
            <Block 
                isCard 
                variant = 'standard'
                CardTitle = 'Facebook HackerCup'
                CardSection = 'Ranked 934 globally in Round 2'
            />
        </React.Fragment>
    )
}

export default Geeky