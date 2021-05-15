import React from 'react'
import { 
    GradientAnimated, 
    PageHeading, 
    Wrapper, 
    StripLogo, 
    Heading,
    Backpack,
    EmptyBar,
    FilledBar,
    Card,
    Gadget,
    Title,
    Bar,
    Circle,
    FilledBarMacPro,
    FilledBarMacAir,
    FilledBarSamPro,
    FilledBarPixel,
    FilledBarIpod,
    FilledBarPS4
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
            <Wrapper>
                <Heading> 
                    <h1> Gadgets I Use</h1>
                    <StripLogo src = { gadgets } alt = 'gadgets' />
                </Heading>
            </Wrapper>
            <Block 
                color = 'white'
                width = '100%'
                height = '700px'
                flexDirection = 'row'
            >
            <Backpack>
                <Card>
                    <Title>MacBook Pro</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarMacPro />
                    </Bar>
                    <Gadget>
                        <img src = { macPro } style ={{ width: '150px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>MacBook Air</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarMacAir />
                    </Bar>
                    <Gadget>
                        <img src = { macAir } style ={{ width: '150px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>Chromebook Pro</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarSamPro />
                    </Bar>
                    <Gadget>
                        <img src = { samPro } style ={{ width: '150px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>Pixel 4a</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarPixel />
                    </Bar>
                    <Gadget>
                        <img src = { pixel } style ={{ width: '40px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>Ipod Shuffle</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarIpod />
                    </Bar>
                    <Gadget>
                        <img src = { ipod } style ={{ width: '80px', height: '70px' }}/>
                    </Gadget>
                </Card>
                <Card>
                    <Title>Playstation 4</Title>
                    <Bar>
                        <EmptyBar />
                        <FilledBarPS4 />
                    </Bar>
                    <Gadget>
                        <img src = { ps4 } style ={{ width: '150px', height: '100px', marginTop: '-10px' }}/>
                    </Gadget>
                </Card>
            </Backpack>
            </Block>
            

        </React.Fragment>
    )
}

export default Geeky

/*

  <div class="card">
    <h3 class="title">MacBook Air</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Card 2</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Card 3</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Card 4</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle class="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
</div>
</body>

*/