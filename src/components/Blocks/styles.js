import styled from 'styled-components'

export const BlockDiv = styled.div`
    width: 100%;
    height: ${props => props.variant === 'standard'? '500px': '1000px'};
    background-color: ${props => props.color};
`
export const IconDiv = styled.div`
    width: 100px;
    height: 20px;
`