import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    // Stripe wants price in cents, so we must first convert
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_51HS9FBCQHLItbiUZyDTdYu5EuEyAeu0qNCZ4MHQFe7BWsuj0DwvdvRpAxSsOCNhHrg5yspaII2c7N8RT2cvya7WC00z7ZkerYl'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Supreme Loot'
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
}

export default StripeCheckoutButton;
