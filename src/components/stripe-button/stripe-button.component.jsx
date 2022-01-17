import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KJ1S3DJmCChcQpXZ1Pu1yo4i8IWXTfPVOWtuEiwlUYLCTSLjTM24oxQj1y52kFIU2AfwWeQGKopZI8IKa1Nb4CF00aJuNlpmV';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}    
        />
    );
};

export default StripeCheckoutButton;
