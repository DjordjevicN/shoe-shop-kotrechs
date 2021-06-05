import React from 'react';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


const PUBLIC_KEY = 'pk_test_51IyzGiLaNfNrTc2c8wxKOkD3ojTjxq0p8uylgCMtwAN3VNx6aqMeEROOIWT2hiwq0CxwmAofgyZQwahjVS4x3xcT00wqWuSQD3'
const stripeTestPromise = loadStripe(PUBLIC_KEY)


function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise} >
            <PaymentForm />
        </Elements>
    );
}

export default StripeContainer;
