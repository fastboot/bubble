import styled from 'styled-components'

export const FooterDiv = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 200px;
    align-items: center;
    width: 100vw;
    background: black;
`;

export const FooterInfo = styled.div`
    color: white;
    display: flex;
`;

export const FooterIcons = styled.div`
    color: green;
    display: flex;
    flex-direction: row-reverse;
    flex-flow: flex-end;
    background: red;
    margin: 0px;
`;