import React from 'react';

import Who_We_Are from '../../About/Who_We_Are';
import About_rrad from './About_rrad';
import Count from '../../About/Count';
import FeaturedBy from './FeaturedBy';
import Clients from './Clients';
import Our_Project from './Our_Project';
import Advisor from './Advisor';


const Home = () => {
    return (
        <div className=''>
            <About_rrad></About_rrad>

            <Who_We_Are subHeading={'A TEAM OF'} heading={'INNOVATIVE THINKER'} details={"At Robust Research And Development Limited, we value transparency and open communication. We strive to build strong relationships with our customers, partners, and employees by fostering an environment of collaboration and trust. If you're looking for a partner in innovation, look no further than Robust Research And Development Ltd. Join us in our mission to revolutionize the tech industry and make technology work for you."}></Who_We_Are>

            <Count></Count>
            <Our_Project></Our_Project>
            <Advisor></Advisor>

            <Clients></Clients>

            <FeaturedBy></FeaturedBy>







        </div>
    );
};

export default Home;