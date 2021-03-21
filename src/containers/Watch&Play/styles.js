import styled from 'styled-components'

export const BlockCard = styled.div`
    background-color: ${props => props.color};
    height: 500px;
    width: 100%;
    margin-top: 0px;
    position: absolute;
    .BlockCard:hover {
        display:block;
    }
`

export const FollowDiv = styled.div`
    margin-top: 350px;
    margin-left: 1000px;

`