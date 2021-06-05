import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { connect } from 'react-redux'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#e8b400",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "#fce883"
            },
            "::placeholder": {
                color: "rgb(122, 122, 122)"
            }
        },
        invalid: {
            iconColor: "rgb(240, 96, 96)",
            color: "#000"
        }
    }
};

function PaymentForm(props) {
    const [success, setSuccess] = useState(false)
    const [billingDetails, setBillingDetails] = useState({
        email: "",
        phone: "",
        name: ""
    });
    const stripe = useStripe()
    const elements = useElements()
    if (success) {
        return <Redirect to="/thankYouPage" />
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: billingDetails
        })
        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: props.billingTotal,
                    id
                })
                if (response.data.success) {
                    console.log('success LOL');
                    setSuccess(true)
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log(error.message);
        }
    }

    return (
        <div className="paymentForm">
            <div className="paymentForm__content">
                <div className="userInformationForm">
                    <h2>Payment Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="billingInput">
                            <input
                                type="text"
                                label='Name'
                                placeholder='Full name'
                                required
                                value={billingDetails.name}
                                onChange={(e) => setBillingDetails({ ...billingDetails, name: e.target.value })}
                            />
                            <input
                                type="email"
                                label='Email'
                                placeholder='example@gmail.com'
                                required
                                value={billingDetails.email}
                                onChange={(e) => setBillingDetails({ ...billingDetails, email: e.target.value })}
                            />
                            <input
                                type="text"
                                label='phone'
                                placeholder='0601234567'
                                required
                                value={billingDetails.phone}
                                onChange={(e) => setBillingDetails({ ...billingDetails, phone: e.target.value })}
                            />
                        </div>
                        <div className="cardInput">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                        <div className="payment--action">
                            <button>{`PAY ${props.billingTotal}`}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        billingTotal: state.mainStore.billingTotal
    }
}

export default connect(mapStateToProps, null)(PaymentForm);








// <form onSubmit={handleSubmit}>
//                 <fieldset className="FormGroup">
//                     <Field
//                         label="Name"
//                         id="name"
//                         type="text"
//                         placeholder="Jane Doe"
//                         required
//                         autoComplete="name"
//                         value={billingDetails.name}
//                         onChange={(e) => {
//                             setBillingDetails({ ...billingDetails, name: e.target.value });
//                         }}
//                     />
//                     <Field
//                         label="Email"
//                         id="email"
//                         type="email"
//                         placeholder="janedoe@gmail.com"
//                         required
//                         autoComplete="email"
//                         value={billingDetails.email}
//                         onChange={(e) => {
//                             setBillingDetails({ ...billingDetails, email: e.target.value });
//                         }}
//                     />
//                     <Field
//                         label="Phone"
//                         id="phone"
//                         type="tel"
//                         placeholder="(941) 555-0123"
//                         required
//                         autoComplete="tel"
//                         value={billingDetails.phone}
//                         onChange={(e) => {
//                             setBillingDetails({ ...billingDetails, phone: e.target.value });
//                         }}
//                     />
//                 </fieldset>
//                 <fieldset className='FormGroup'>
//                     <div className="formRow">
//                         <CardElement options={CARD_OPTIONS} />
//                     </div>
//                 </fieldset>
//                 <button>Pay</button>
//             </form>




