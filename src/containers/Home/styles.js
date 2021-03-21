import styled from 'styled-components';
import Background from '../../assets/shapes/PeakBackground.png'

export const Card = styled.div`
  display: flex;
  width: 1000px;
  height: 100%;
  margin-top: 50px;
  margin-left: 200px;
  justify-content: space-around;
  font-size: 5em;
  align-items: center;
  flex-direction: column;
`;

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;


export const Workplace = styled.div`
  width: 640px;
  height: 100px;
  display: flex;
  font-size: 35px;
  padding-left: 130px;
  font-family: "Wotfard", "Futura", sans-serif;
  margin-top: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 120px; 
`;

export const GradientAnimated = styled.div`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    width: 100%;
    height: 10px;
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
`;

export const WorkplaceTime = styled.div`
  font-family: "Wotfard", "Futura", sans-serif;
  font-size: 25px;
  font-weight: normal;
  margin-top: 20px;
  padding-right: 20px;

`;

export const WorkplaceNameDiv = styled.div`
  background-image: url(${Background});
  background-size: contain;
  height: 90px;
  margin-top: 20px;
  margin-left: 20px;
  width: 173px;
  font-size: 35px;
  text-align: center;
  vertical-align: middle;
  line-height: 80px; 
`;

export const WorkplaceLogo = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 70px;
  padding-right: 30px;
`;

export const ProfilePicture = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  overflow: hidden;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
`;


export const Picture = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 50px;
  height: 50px;
`;