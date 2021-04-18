import styled from 'styled-components'

export const BlockDiv = styled.div`
    width: 100%;
    display: flex;
    background: cyan;
    position: relative;
    height: ${props => props.variant === 'standard'? '680px': '1000px'};
    background-color: ${props => props.color};
`
export const IconDiv = styled.div`
    width: 100px;
    height: 20px;
`
export const CardDiv = styled.div`
    width: ${ props => props.variant === 'standard'? '50%' : '33%' };
    border-radius: 30px;
    min-height: ${ props => props.variant === 'standard'? '680px' : '600px' };
    margin: 30px;
    margin-right: ${ props => props.marginR };
    display: flex;
    flex-direction: column;
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    align-items: center;
`
export const CardDivSection = styled.div`
    display: flex;
    font-size: 20px; 
    padding: 20px
`

export const CardDivHeading = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: bold; 
    padding: 20px
`
export const CardButton = styled.div`
    display: inline-block;
    padding: 0.3em 1em;
    text-decoration: none;
    color: white;
    border: solid 2px white;
    border-radius: 3px;
    transition: .4s;
    border-radius: 30px;
  
    &:hover{
        background: black;
        color: white;
    }
`
export const StyledHyperlink = styled.a`
    text-decoration: none;
`