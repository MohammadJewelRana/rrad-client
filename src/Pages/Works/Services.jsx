import React from 'react';
import Provided_services from './Provided_services';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    return (
        <div>
            
            <Helmet>
                <title>Services | RRAD </title>
            </Helmet>


            <Provided_services></Provided_services>
        </div>
    );
};

export default Services;