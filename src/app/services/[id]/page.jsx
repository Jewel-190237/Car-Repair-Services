import { getServiceDetails } from '@/Services/getServices';
import React from 'react';

const page = async({params}) => {
    const serviceDetails = await getServiceDetails(params.id);
    // console.log(serviceDetails);
    const {img, price, title, description, facility} = serviceDetails.service
    return (
        <div>
            service details page
        </div>
    );
};


export default page;