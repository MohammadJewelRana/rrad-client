import React from 'react';
import MissionVision from './MissionVision';
import TeamImage from '../../assets/TeamMember/team.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';
import Team from './Team';
import ShowCase from './ShowCase';
import Who_We_Are from './Who_We_Are';
import Count from './Count';

const About = () => {
    return (
        <div>
            <Who_We_Are subHeading={'WHO WE ARE'} heading={'  WE ARE AN INTERACTIVE TECHNOLOGY COMPANY'} details={' based in Dhaka, Bangladesh specializing in AR, VR, Games, Simulation, cross-platform mobile apps, and business solutions. The company values transparency, open communication and has a goal to make technology accessible and easy to use.'} ></Who_We_Are>
<ShowCase></ShowCase>

 <Count></Count>


            <MissionVision></MissionVision>
            <Team></Team>


        </div>
    );
};

export default About;