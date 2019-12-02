import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=> {    
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_eNHWu9tecYXLKczsCyFivoFv009WleBmiZ";

    const onToken = (token) => {
        console.log(token);
        alert('Payment sucessful');
    
    }
    
    return(

  
    <StripeCheckout
    label='Pay now'
    name= 'OBK Clothing.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is ${price}$.`}
    amount={priceForStripe}
    panelLabel='Pay now'
    token={onToken}
    stripeKey={publishableKey}
    />
)};

export default StripeCheckoutButton;