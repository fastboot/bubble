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
    width: ${ props => props.variant === 'standard'? '50%' : '30%' };
    border-radius: 30px;
    min-height: ${ props => props.variant === 'standard'? '680px' : '600px' };
    margin: 30px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(215deg, #43cea2 0%, #185a9d 100%);
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
    color: #202129;
    background-color: #f2f2f2;
    border-radius: 30px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 120px;
    height: 30px;

    &:hover {
        color: #202129;
        background-color: #e1e2e2;
        opacity: 1;
    }
    &:active {
        background-color: #d5d6d6;
        opacity: 1;
    }
`