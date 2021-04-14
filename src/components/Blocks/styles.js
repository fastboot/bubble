import styled from 'styled-components'

export const BlockDiv = styled.div`
    width: 100%;
    display: flex;
    background: cyan;
    position: relative;
    height: ${props => props.variant === 'standard'? '500px': '1000px'};
    background-color: ${props => props.color};
`
export const IconDiv = styled.div`
    width: 100px;
    height: 20px;
`
export const CardDiv = styled.div`
    width: 50%;
    height: 400px;
    background: red;
`