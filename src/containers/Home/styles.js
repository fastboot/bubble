import styled from 'styled-components'

export const GradientAnimated = styled.div`
    background: linear-gradient(45deg, #e92efb, #ff2079, #440bd4, #04005e);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    width: 100%;
    position: relative;
    height: 400px;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`
export const PageHeading = styled.h1`
    color: white;
    position: absolute;
    font-size: 150px;
    font-weight: bold;
    margin-left: 35%;
    margin-top: 100px;
`