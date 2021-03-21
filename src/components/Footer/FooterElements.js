import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: flex;
    bottom: 0;
    margin-top: 500px;
    flex-direction: column;
`;

export const FooterDiv = styled.div`
    display: flex;
    left: 0;
    height: 200px;
    align-items: center;
    width: 100%;
    justify-content: space-around;
`;


// make something out of the two options
export const GradientDiv = styled.div` 
    height: 10px;
    // background: linear-gradient(to right, #141414, #F52567, #F52567, #0F3294, #0F3294, #141414);
    background: linear-gradient(to right, #FEED07 0%, #FE6A50 5%, #ED00AA 15%, #2FE3FE 50%, #8900FF 100%);
    width: 100%;
    left: 0;
}
`;

export const FooterInfo = styled.div`
    display: flex;
`;

export const FooterIcons = styled.div`
    margin: 0px;
    display: flex;
    width: 250px;
`;