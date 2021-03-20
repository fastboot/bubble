import styled from 'styled-components';
import Background from '../../assets/shapes/PeakBackground.png'

export const Card = styled.div`
  display: flex;
  width: 1000px;
  height: 100%;
  border: 3px solid;
  margin-top: 50px;
  margin-left: 200px;
  justify-content: space-around;
  font-size: 5em;
  align-items: center;
  background: black;
  flex-direction: column;
`;

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: black;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;


export const Workplace = styled.div`
  width: 640px;
  height: 100px;
  display: flex;
  color: white;
  font-size: 50px;
  background: black;
  margin-top: 50px;
  text-align: center;
  vertical-align: middle;
  line-height: 120px; 
`;

export const WorkplaceLogo = styled.div`
  background-image: url(${Background});
  background-size: contain;
  background-image-color: white;
  height: 90px;
  margin-top: 20px;
  margin-left: 20px;
  width: 173px;
  font-size: 50px;
  text-align: center;
  vertical-align: middle;
  line-height: 80px; 
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