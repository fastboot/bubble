import React from 'react'
import {  
    StripLogo, 
    Heading,
    BetweenDescription,
    ProWrapper,
    MiddleProWrapper,
    ProCard,
    Card,
    ProRow,
    Wrapper,
    MiddleCard,
    MiddleProRow,
} from './styles'
import trophy from '../../assets/icons/trophy.png'
import facebook from '../../assets/logos/facebook.png'
import google from '../../assets/logos/google.png'
import hash from '../../assets/logos/hash.png'
import infy from '../../assets/logos/infy.png'
import codechef from '../../assets/logos/codechef.png'
import spoj from '../../assets/logos/spoj.png'
import battle from '../../assets/logos/battle.png'

function CP(props) {
    return (
        <React.Fragment>
            <Wrapper>
            <Heading> 
                <h1> I Love Competing! </h1>
                <StripLogo src = { trophy } alt = 'trophy' />
            </Heading>
            <ProWrapper>
                <ProCard>
                    <ProRow>
                        <Card
                            fromcolor = '#11998e'
                            tocolor = '#38ef7d'
                        >
                            <img src = {facebook} alt = "facebook" style = {{ height: '40px', width: '40px' }}/>
                            <h1> Facebook Hacker Cup </h1>
                            <p> Ranked 934 in round 2 </p> 
                        </Card>
                        <Card
                            fromcolor = '#4776E6'
                            tocolor = '#8E54E9'
                        >
                            <img src = {google} alt = "google" style = {{ height: '40px', width: '40px' }}/>
                            <h1> Google Code Jam </h1>
                            <p> Ranked 1961 in round 1B </p> 
                        </Card>
                    </ProRow>
                </ProCard>
                <ProCard>
                    <ProRow>
                        <Card
                            fromcolor = '#e65c00'
                            tocolor = '#F9D423'
                        >
                            <img src = {hash} alt = "hash" style = {{ height: '40px', width: '40px' }}/>
                            <h1> 3 Address Code </h1>
                            <p> Ranked 74 at the finals </p> 
                        </Card>
                        <Card
                            fromcolor = {props.currTheme.mode === 'dark' ? 'black' : 'white'}
                            tocolor = {props.currTheme.mode === 'dark' ? 'black' : 'white'}
                        >
                            <BetweenDescription>
                                Over 1500+ problems solved across platforms
                            </BetweenDescription>
                        </Card>
                    </ProRow>
                </ProCard>
            </ProWrapper>
            <MiddleProWrapper>
                <ProCard>
                    <MiddleProRow>
                    <MiddleCard
                        fromcolor = '#FF512F'
                        tocolor = '#DD2476'
                    >
                        <img src = {codechef} alt = "codechef" style = {{ height: '40px', width: '40px' }}/> 
                        <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
                        <h1> SnackDown </h1> 
                        <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
                        <p>  Ranked 854 among 15500+ teams globally </p> 
                    </MiddleCard>
                    </MiddleProRow>
                </ProCard>
            </MiddleProWrapper>
            <ProWrapper>
                <ProCard>
                    <ProRow>
                        <Card
                            fromcolor = {props.currTheme.mode === 'dark' ? 'black' : 'white'}
                            tocolor = {props.currTheme.mode === 'dark' ? 'black' : 'white'}
                        >
                            <BetweenDescription>
                                Follow me @fastboot across all major platforms
                            </BetweenDescription>
                        </Card>
                        <Card
                            fromcolor = '#0575E6'
                            tocolor = '#021B79'
                        >
                            <img src = {spoj} alt = "spoj" style = {{ height: '40px', width: '40px' }}/>
                            <h1> SPOJ </h1>
                            <p> Ranked 8556 in the world currently </p> 
                        </Card>
                    </ProRow>
                </ProCard>
                <ProCard>
                    <ProRow>
                        <Card
                            fromcolor = '#B6B6B6'
                            tocolor = '#9B9B9B'
                        >
                            <img src = {infy} alt = "infy" style = {{ height: '40px', width: '80px' }}/>
                            <h1> HackWithInfy </h1>
                            <p> Ranked in top 200 </p> 
                        </Card>
                        <Card
                            fromcolor = '#990099'
                            tocolor = '#cc3399'
                        >
                            <img src = {battle} alt = "battle" style = {{ height: '40px', width: '40px' }}/>
                            <h1> Battle of Brains </h1>
                            <p> Ranked 7 at onsite finals </p> 
                        </Card>
                    </ProRow>
                </ProCard>
            </ProWrapper>
            </Wrapper>
        </React.Fragment>
    )
}

export default CP