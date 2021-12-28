import styled from 'styled-components'

export const BlockDiv = styled.div`
    width: ${ props => props.width };   
    display: flex;
    position: relative;
    height: ${ props => props.height };
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    flex-direction: ${ props => props.flexDirection };
`

export const CardDiv = styled.div`
    width: ${ props => props.width };
    border-radius: 10px;
    box-shadow: -5px 5px 5px ${props => props.shadow !== 'null' ? props.shadow : null};
    height: ${ props => props.height };
    margin: 7px;
    padding: 10px;
    display: flex;
    flex-direction: ${ props => props.flexDirection };
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