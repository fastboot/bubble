import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: flex;
    bottom: 0;
    margin: 0;
    height: 5vh;
    flex-direction: column;
    align-items: left;
    margin-top: 5vh;
    position: relative;
    @media (max-width: 768px) {
        margin-top: 10vh;
        margin-bottom: 5vh;
    }
`

export const FooterDiv = styled.div`
    display: flex;
    height: 5vh;
    padding-left: 5vw;
    align-items: left;
    @media (max-width: 768px) {
        align-items: center;
    }
`

export const FooterIcons = styled.div`
    display: flex;
    width: 5vw;
`