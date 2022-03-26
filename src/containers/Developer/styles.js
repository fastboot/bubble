import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100vw;
    line-height: 10px;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`

export const SubHeading = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100vw;
    line-height: 10px;
    justify-content: center;
    align-items: center;
`
export const StripLogo = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 3vw;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

export const ShowWrapper = styled.div`
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center; 
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    @media (max-width: 768px) {
        height: 30vh;
    }
`

export const ShowInfo = styled.div`
    width: ${ props => props.width };
    height: 40vh;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center; 
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    box-shadow: ${props => props.noShadow === 'true' || props.theme.mode === 'dark' ? null : `-1rem 0 3rem ${ props.tocolor }` };
    border-radius: 10px;
    flex-direction: column;
    @media (max-width: 768px) {
        height: 20vh;
    }
`

export const ShowPromo = styled.div`
    width: ${ props => props.width };
    display: flex;
    flex-direction: column;
    line-height: 30%;
    padding: 24px;
    justify-content: center;
    align-items: center; 
`

export const WhiteSpace = styled.div`
    width: 100vw;
    height: 100px;
    background: ${props => props.theme.mode === 'dark' ? 'black' : 'white' };
`

export const GithubImg = styled.img`
    width: 40px;
    height: 40px;
    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`

export const ProjectImg = styled.img`
    width: 100px;
    height: 100px;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`

export const H = styled.h1`
    font-size: 6vmin;
    line-height: 4vh;
    @media (max-width: 768px) {
        font-size: 4vmax;
    }
`

export const Hone = styled.h1`
    font-size: 4vmin;
    @media (max-width: 768px) {
        font-size: 2vmax;
    }
`

export const Pone = styled.p`
    font-size: 2.5vmin;
    @media (max-width: 768px) {
        font-size: 1.5vmax
        line-height: 1vmax;
    }
`

export const Pthree = styled.p`
    font-size: 2vmin;
    @media (max-width: 768px) {
        font-size: 1vmax
    }
`


/*
@media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
*/