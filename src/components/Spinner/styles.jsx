import styled from 'styled-components'

export const SpinnerDiv = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${ props => props.theme.mode === 'dark' ? 'white': 'black' };
    border-color: ${ props => props.theme.mode === 'dark' ? 'white': 'black' } ${ props => props.theme.mode === 'dark' ? 'white': 'black' } transparent transparent;
    animation: dual-ring 0.7s linear infinite;
    @keyframes dual-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
  
`;