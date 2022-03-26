import React from 'react'
import {  
    StripLogo, 
    Heading,
    BetweenDescription,
    ProWrapper,
    Card,
    H,
    Hone,
    Pone,
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
                <H> Competing! </H>
                <StripLogo src = { trophy } alt = 'trophy' />
            </Heading>
            <ProWrapper>
                    <ProRow>
                        <Card
                            fromcolor = '#11998e'
                            tocolor = '#38ef7d'
                        >
                            <img src = {facebook} alt = "facebook" style = {{ height: '40px', width: '40px' }}/>
                            <Hone> Facebook Hacker Cup </Hone>
                            <Pone> Ranked 934 in round 2 </Pone> 
                        </Card>
                        <Card
                            fromcolor = '#4776E6'
                            tocolor = '#8E54E9'
                        >
                            <img src = {google} alt = "google" style = {{ height: '40px', width: '40px' }}/>
                            <Hone> Google Code Jam </Hone>
                            <Pone> Ranked 1961 in round 1B </Pone> 
                        </Card>
                    </ProRow>
                    <ProRow>
                        <Card
                            fromcolor = '#e65c00'
                            tocolor = '#F9D423'
                        >
                            <img src = {hash} alt = "hash" style = {{ height: '40px', width: '40px' }}/>
                            <Hone> 3 Address Code </Hone>
                            <Pone> Ranked 74 at the finals </Pone> 
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
            </ProWrapper>
            <MiddleProRow>
                    <MiddleCard
                        fromcolor = '#FF512F'
                        tocolor = '#DD2476'
                    >
                        <img src = {codechef} alt = "codechef" style = {{ height: '40px', width: '40px' }}/> 
                        <Hone> SnackDown </Hone>
                        <Pone>  Ranked 854 among 15500+ teams globally </Pone> 
                    </MiddleCard>
            </MiddleProRow>
            <ProWrapper>
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
                            <Hone> SPOJ </Hone>
                            <Pone> Ranked 8556 in the world currently </Pone> 
                        </Card>
                    </ProRow>
                    <ProRow>
                        <Card
                            fromcolor = '#B6B6B6'
                            tocolor = '#9B9B9B'
                        >
                            <img src = {infy} alt = "infy" style = {{ height: '40px', width: '80px' }}/>
                            <Hone> HackWithInfy </Hone>
                            <Pone> Ranked in top 200 </Pone> 
                        </Card>
                        <Card
                            fromcolor = '#990099'
                            tocolor = '#cc3399'
                        >
                            <img src = {battle} alt = "battle" style = {{ height: '40px', width: '40px' }}/>
                            <Hone> Battle of Brains </Hone>
                            <Pone> Ranked 7 at onsite finals </Pone> 
                        </Card>
                    </ProRow>
            </ProWrapper>
            </Wrapper>
        </React.Fragment>
    )
}

export default CP