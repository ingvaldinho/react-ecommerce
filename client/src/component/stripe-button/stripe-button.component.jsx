import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price})=> {    
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_eNHWu9tecYXLKczsCyFivoFv009WleBmiZ";

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(reponse=>{
            alert('Payment sucessful')
        }).catch(error =>{
            console.log('Payment error : ' + JSON.parse(error));
            alert('There is an issue with your payment. Please make sure your use the provided credit card.')
        })
    
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