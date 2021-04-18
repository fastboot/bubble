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
                variant = 'standard' 
                color = 'black'
            >
                <Block 
                    isCard 
                    variant = 'nonstandard'
                    CardTitle = 'Facebook HackerCup'
                    CardSection = 'Ranked 934 globally in Round 2'
                    marginR = '0px'
                    fromcolor = '#cc2b5e'
                    tocolor = '#753a88'
                />
                <Block 
                    isCard 
                    variant = 'nonstandard'
                    CardTitle = '3 Address Code'
                    CardSection = 'Ranked 74 on Onsite Finals'
                    marginR = '0px'
                    fromcolor = '#42275a'
                    tocolor = '#734b6d'
                />
                <Block 
                    isCard 
                    variant = 'nonstandard'
                    CardTitle = 'HackWithInfy'
                    CardSection = 'Ranked amongst top 200'
                    fromcolor = '#4568dc'
                    tocolor = '#b06ab3'
                />
            </Block>
        </React.Fragment>
    )
}

export default Geeky