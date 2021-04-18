import styled from 'styled-components'

export const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    overflow: scroll;
    margin-left: -40px;
    height: 750px;

    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
        flex-direction: row;
    }
`
export const StyledLi = styled.li`
    height: 250px;
    flex-grow: 1;

    &:last-child {
        flex-grow: 10;
    }

    @media (max-aspect-ratio: 1/1) {
        height: 30vh;
    }

    @media (max-height: 480px) {
        height: 80vh;
    }

    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
        height: auto;
        width: 100%;
    }
`
export const StyledImg = styled.img`
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;

    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
        width: 100%;
        max-height: 75vh;
        min-width: 0;
    }
`