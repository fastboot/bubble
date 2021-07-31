import styled from 'styled-components'

export const Bar = styled.div`
    width: 88vw;
    height: 10px;
    display: flex;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    marginLeft: 3%;
    overflow: hidden;
`
export const FirstDiv = styled.div`
    width: ${props => props.width}%;
    height: 10px;
    background: #f4e45c;
    display: flex;
`
export const SecondDiv = styled.div`
    width: ${props => props.width}%;
    height: 10px;
    background: #e44c24;
`
export const ThirdDiv = styled.div`
    width: ${props => props.width}%;
    height: 10px;
    background: #543c7c;
`
export const FourthDiv = styled.div`
    width: ${props => props.width}%;
    height: 10px;
    background: #8ce454;
`
export const FifthDiv = styled.div`
    width: ${props => props.width}%;
    height: 10px;
    background: #50a7fc;
`
export const ListDiv = styled.div`
    width: 90vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    flex-direction: row;
`
export const Dot = styled.div`
    width: 10px;
    position: relative;
    height: 10px;
    display: flex;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 50%;
    background: ${props => props.color};
`
export const Typography = styled.div`
    width: 200px;
    margin: 5px 5px;
    height: 20px;
    display: flex;
`