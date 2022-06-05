import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from '../utils';
import AvatarImage from "../assets/avatarImage1.jpg";
import AvatarImage2 from "../assets/avatarImage2.jpg";
function Projects() {
    return (
        <YourProjects>
            <Project>
                <Avatar>
                    <img src={AvatarImage} alt="" />
                </Avatar>
                <Detail>
                    <Title>Calculator</Title>
                    <SubTitle>2 day remaining</SubTitle>
                </Detail>
            </Project>
            <Project>
                <Avatar>
                    <img src={AvatarImage2} alt="" />
                </Avatar>
                <Detail>
                    <Title>logo for Football team</Title>
                    <SubTitle>6 day remaining</SubTitle>
                </Detail>
            </Project>
            <AllProjects>See all projects</AllProjects>
        </YourProjects>
    );

}

const YourProjects = styled.div`
height: 83%;
background-color: white;
margin:0;
padding: 1rem;
border-radius:1rem;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    margin-top; 1rem;
    width: 70%;
}`;
const Project = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
}`;
const Detail = styled.div`
margin-left: 1rem;
`;
const Title = styled.h3`
font-weight: 500;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
}
`;
const SubTitle = styled.h3`
font-weight: 300;
`;
const AllProjects = styled.h5`
text-align: end;
color: ${themeColor};
cursor: pointer;
`;

export default Projects;