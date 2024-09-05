'use client'
import { getServiceDetails } from '@/Services/getServices';
import React, { useEffect, useState } from 'react';

const CheckoutPage = ({ params }) => {
    const [service, setService] = useState({});
    const loadService = async () => {
        const details = await getServiceDetails(params.id)
        setService(details.service)
    }
    console.log(service)
    // const { _id, img, price, description } = service || {};

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        loadService()

    }, [params])
    return (
        <div>

        </div>
    );
};


export default CheckoutPage;