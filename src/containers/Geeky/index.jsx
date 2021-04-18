import React from 'react'
import { GradientAnimated, PageHeading } from './styles'
import HeatmapComponent from './components/github/Heatmap'
import Block from '../../components/Blocks'
import facebookhackercup from '../../assets/logos/facebookhackercup.png'

function Geeky(props) {
    return (
        <React.Fragment>
            <GradientAnimated />
            <PageHeading>
                Geeky
            </PageHeading>
                <HeatmapComponent currTheme = {props.currTheme} />
            <Block 
                color = 'white'
                width = '100%'
                height = '700px'
                flexDirection = 'row'
            >
                <Block color = 'red' width = '75%' height = '100%' flexDirection = 'column'>
                    <Block color = 'blue' width = '100%' height = '80%' flexDirection = 'row' >
                        <Block color = 'red' width = '60%' height = '100%' flexDirection = 'column'>
                            <Block color = 'black' width = '100%' height = '60%' >
                                <Block 
                                    isCard 
                                    variant = 'nonstandard'
                                    CardTitle = 'Facebook HackerCup'
                                    CardSection = 'Ranked 934 globally in Round 2'
                                    fromcolor = '#36d1dc'
                                    tocolor = '#5b86e5'
                                    width = '100%'
                                    flexDirection = 'column'
                                />
                            </Block>
                            <Block color = 'black' width = '100%' height = '40%'>
                                <Block 
                                    isCard 
                                    variant = 'nonstandard'
                                    CardTitle = 'Google code jam'
                                    CardSection = 'Ranked 1931 globally in Round 1'
                                    fromcolor = 'black'
                                    tocolor = 'black'
                                    width = '100%'
                                    flexDirection = 'column'
                                />
                            </Block>
                        </Block> 
                        <Block color = 'black' width = '40%' height = '100%'>
                            <Block 
                                isCard 
                                variant = 'nonstandard'
                                CardTitle = '#3 Address Code'
                                CardSection = 'Ranked 74 on onsite finals'
                                fromcolor = '#4568dc'
                                tocolor = '#b06ab3'
                                width = '100%'
                                flexDirection = 'column'
                            />
                        </Block>
                    </Block>
                    <Block color = 'black' width = '100%' height = '20%'>
                        <Block 
                            isCard 
                            variant = 'nonstandard'
                            CardTitle = 'HackWithInfy'
                            CardSection = 'Ranked amongst top 200'
                            fromcolor = '#ff9966'
                            tocolor = '#ff5e62'
                            width = '100%'
                            flexDirection = 'row'
                        />
                    </Block>
                </Block>
                <Block color = 'orange' width = '25%' height = '100%' flexDirection = 'column'>
                    <Block color = 'black' width = '100%' height = '40%'>
                        <Block 
                            isCard 
                            variant = 'nonstandard'
                            CardTitle = '#3 Address Code'
                            CardSection = 'Ranked 74 on onsite finals'
                            fromcolor = '#56ab2f'
                            tocolor = '#a8e063'
                            width = '100%'
                            flexDirection = 'column'
                        />
                    </Block>
                    <Block color = 'black' width = '100%' height ='60%'>
                        <Block 
                            isCard 
                            variant = 'nonstandard'
                            CardTitle = 'Read a post I made for my experiences here'
                            fromcolor = 'black'
                            tocolor = 'black'
                            width = '100%'
                            flexDirection = 'column'
                        />
                    </Block>
                </Block>
                
            </Block>
            <Block
                color = 'black'
                width = '100%'
                height = '400px'
                flexDirection = 'row'
            > 
                <Block color = 'black' width = '33%' height ='100%'> 
                    <Block 
                        isCard 
                        variant = 'nonstandard'
                        CardTitle = '#3 Address Code'
                        CardSection = 'Ranked 74 on onsite finals'
                        fromcolor = '#56ab2f'
                        tocolor = '#a8e063'
                        width = '100%'
                        flexDirection = 'column'
                    />
                </Block>
                <Block color = 'black' width = '33%' height ='100%'> 
                    <Block 
                        isCard 
                        variant = 'nonstandard'
                        CardTitle = '#3 Address Code'
                        CardSection = 'Ranked 74 on onsite finals'
                        fromcolor = 'black'
                        tocolor = 'black'
                        width = '100%'
                        flexDirection = 'column'
                    />
                </Block>
                <Block color = 'black' width = '33%' height ='100%'> 
                    <Block 
                        isCard 
                        variant = 'nonstandard'
                        CardTitle = '#3 Address Code'
                        CardSection = 'Ranked 74 on onsite finals'
                        fromcolor = '#56ab2f'
                        tocolor = '#a8e063'
                        width = '100%'
                        flexDirection = 'column'
                    />
                </Block>

            </Block>
        </React.Fragment>
    )
}

export default Geeky