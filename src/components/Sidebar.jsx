import React from 'react'
import styled from "styled-components"; 
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage.jpeg";
import {RiHome8Line, RiFileCopy2Line } from 'react-icons/ri';
import { FaWarehouse } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { darkThemeColor } from "../utils";

function Sidebar()
{
    return (
        <Container>
            <ProfileContainer>
                <Avatar src=  {AvatarImage}/>
                <Name>Akshay Kumar</Name>
                <Badge content ='Pro Level'/>
            </ProfileContainer>
            <LinksContainer>
            <Links>
            <Link>
            <RiHome8Line/>
            <h3>Dashboard</h3>
            </Link>
            <Link>
            <RiFileCopy2Line/>
            <h3>Projects</h3>
            </Link>
            <Link>
            <FaWarehouse/>
            <h3>Invoices</h3>
            </Link>
            <Link>
            <AiOutlinePieChart/>
            <h3>Reports</h3>
            </Link></Links>
            <ContactContainer>
                <span>Having troubles?</span>
                <a href="#">Contact us</a></ContactContainer></LinksContainer>
            
        </Container>
    );
}

const Container = styled.div`
width: 20%;
height: 100% !important;
border-radius: 2rem;
background-color: #11AF92;
display: flex;
flex-direction: column;
align-items; center;
gap:3rem;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    heigth: max-content !important;
}
`;

const ProfileContainer = styled.div`
display; flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Avatar = styled.img`
height: 7rem;
border-radius: 5rem;
margin-top: 15%;
margin-left: 34%;
`;

const Name = styled.h1`
color: white;
font: 1.6rem;
font-weight: 400;
margin: 1rem 0 0.5rem 2rem;
`;

const LinksContainer = styled.div` 
background-color: ${darkThemeColor};
height: 100%;
width: 100%;
border-radius: 2rem;
`; 

const Links = styled.ul`
list-style-type: none;
display: flex;
flex-direction: column;
padding-top: 2rem;
height: 60%;
`;

const Link = styled.li`
margin-left: 20%;
margin-bottom: 1rem;
display: flex;
gap: 1rem;
color: white;
cursor: pointer;
h3 {
    font-weight: 400;
}
svg {
    font-size: 1.5rem;
    margin-top:2%;
}
`;

const ContactContainer = styled.div`
width: 60%;
background-color: #091322;
color: #99AA22;
height: 15%;
margin: auto auto;
border-radius: 1rem;
display: flex;
flex-direction: column;
padding: 1rem;
a {
    color: white;
    text-decoration:none;
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
}`;
export default Sidebar