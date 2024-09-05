import { getServiceDetails } from '@/Services/getServices';
import React, { useState } from 'react';

const CheckoutPage = ({params}) => {
    const [service, setService] = useState({});
    const loadService = async() => {
        const serviceDetails = await getServiceDetails(params.id)
        setService(serviceDetails)
    }
    return (
        <div>
            
        </div>
    );
};


export default CheckoutPage;