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
    padding-right: 10px;
    padding-left: 20px;
    width: 45px;
    height: 45px;
`

export const ShowWrapper = styled.div`
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center; 
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
`

export const ShowCard = styled.div`
    width: 80%;
    height: 400px;
    margin: auto;
    display: flex;
    position: relative;
    border-radius: 10px;
    flex-direction: row;
`

export const ShowInfo = styled.div`
    width: ${ props => props.width };
    height: 300px;
    display: flex;
    color: white;
    margin-top: 50px;
    justify-content: center;
    align-items: center; 
    padding: 12px;
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
    box-shadow: ${props => props.noShadow === 'true' || props.theme.mode === 'dark' ? null : `-1rem 0 3rem ${ props.tocolor }` };
    border-radius: 10px;
    flex-direction: column;
`

export const ShowPromo = styled.div`
    width: ${ props => props.width };
    height: 90%;
    display: flex;
    flex-direction: column;
    line-height: 30%;
    padding: 24px;
    font-size: 30px;
    justify-content: center;
    align-items: center; 
    margin-left: 100px;
`

export const WhiteSpace = styled.div`
    width: 100vw;
    height: 100px;
    background: ${props => props.theme.mode === 'dark' ? 'black' : 'white' };
`