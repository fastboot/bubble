import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: flex;
    height: 5vh;
    flex-direction: column;
    bottom: 0;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin-bottom: 5vh;
    }
`

export const FooterIcons = styled.div`
    display: flex;
    width: 5vw;
    @media (max-width: 768px) {
        margin-bottom: 1vh;
        margin-left: -150px;
    }
`