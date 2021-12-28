import styled from 'styled-components'

export const PageRow = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 130px;
    height: 250px;
    display: flex;
    flex-direction: row;
`

export const Title = styled.div`
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 35px;
`

export const Card = styled.div`
    display: flex;
    height: 280px;
    width: 600px;
    margin: 24px;
    color: white;
    padding: 24px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;

    &:hover {
        transform: translateY(-20px);
        transition: 0.4s ease-out;
        position: relative;
        transition: 0.4s ease-out;
    }
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