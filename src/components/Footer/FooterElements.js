import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: flex;
    height: 5vh;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 10vh;
        margin-bottom: 5vh;
    }
`

export const FooterIcons = styled.div`
    display: flex;
    width: 5vw;
`