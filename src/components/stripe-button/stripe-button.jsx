import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_92GvpChNX5ZRFyxhPtBXJx0V00GnMu56QA';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothind Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is R$ ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;