import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    Wrapper, 
    StripLogo, 
    Heading,
    GadgetWrapper,
    GadgetRow,
    Backpack,
} from './styles'
import HeatmapComponent from './components/github/Heatmap'
import Block from '../../components/Blocks'
import gadgets from '../../assets/icons/gadget.png'
import ipod from '../../assets/devices/ipodShuffle.png'
import macAir from '../../assets/devices/macAir.png'
import macPro from '../../assets/devices/macPro.png'
import samPro from '../../assets/devices/samPro.png'
import pixel from '../../assets/devices/pixel.png'
import ps4 from '../../assets/devices/ps4.png'

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
                                    CardTitle = 'Over 1000 problems solved'
                                    fromcolor = { props.currTheme.mode === 'light'? 'white': 'black' }
                                    tocolor = { props.currTheme.mode === 'light'? 'white': 'black' }
                                    width = '100%'
                                    flexDirection = 'column'
                                />
                            </Block>
                        </Block> 
                        <Block color = 'black' width = '60%' height = '100%'>
                            <Block 
                                isCard 
                                variant = 'nonstandard'
                                CardTitle = '#3 Address Code'
                                CardSection = 'Ranked 74 on onsite finals'
                                fromcolor = '#aa076b'
                                tocolor = '#61045f'
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
                            fromcolor = '#ffe259'
                            tocolor = '#ffa751'
                            width = '100%'
                            flexDirection = 'column'
                        />
                    </Block>
                    <Block color = 'black' width = '100%' height ='60%'>
                        <Block 
                            isCard 
                            variant = 'nonstandard'
                            CardTitle = 'Read a post I made for my experiences here'
                            fromcolor = { props.currTheme.mode === 'light'? 'white': 'black' }
                            tocolor = { props.currTheme.mode === 'light'? 'white': 'black' }
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
                        CardTitle = 'Follow me @fastboot'
                        fromcolor = { props.currTheme.mode === 'light'? 'white': 'black' }
                        tocolor = { props.currTheme.mode === 'light'? 'white': 'black' }
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
                        fromcolor = '#ff512f'
                        tocolor = '#dd2476'
                        width = '100%'
                        flexDirection = 'column'
                    />
                </Block>

            </Block>
            <Backpack>
            <Wrapper>
                <Heading> 
                    <h1> Gadgets I Use</h1>
                    <StripLogo src = { gadgets } alt = 'gadgets' />
                </Heading>
            </Wrapper>
            <GadgetWrapper>
                <GadgetRow>
                    <Block 
                        isCard
                        src = { macPro } 
                        width = '30%'
                        height = '300px'
                        imageWidth = '220px'
                        imageHeight = '130px'
                        CardTitle = 'MacBook Pro'
                        flexDirection = 'column'
                        noButton
                    />
                    <Block 
                        isCard
                        src = { macAir } 
                        width = '30%'
                        height = '300px'
                        imageWidth = '240px'
                        imageHeight = '130px'
                        CardTitle = 'MacBook Air'
                        flexDirection = 'column'
                        noButton
                    />
                    <Block 
                        isCard
                        src = { samPro } 
                        width = '30%'
                        height = '300px'
                        imageWidth = '150px'
                        imageHeight = '120px'
                        CardTitle = 'Samsung Chromebook Pro'
                        flexDirection = 'column'
                        noButton
                    />
                </GadgetRow>
                <GadgetRow>
                    <Block 
                        isCard
                        src = { pixel } 
                        width = '30%'
                        height = '300px'
                        imageWidth = '90px'
                        imageHeight = '130px'
                        CardTitle = 'Google Pixel 4a'
                        flexDirection = 'column'
                        noButton
                    />
                    <Block 
                        isCard
                        src = { ipod } 
                        width = '30%'
                        height = '300px'
                        imageWidth = '150px'
                        imageHeight = '150px'
                        CardTitle = 'Ipod Shuffle'
                        flexDirection = 'column'
                        noButton
                    />
                    <Block 
                        isCard
                        src = { ps4 } 
                        width = '30%'
                        height = '300px'
                        imageWidth = '200px'
                        imageHeight = '190px'
                        CardTitle = 'Playstation 4'
                        flexDirection = 'column'
                        noButton
                    />
                </GadgetRow>
            </GadgetWrapper>
            </Backpack>
            

        </React.Fragment>
    )
}

export default Geeky