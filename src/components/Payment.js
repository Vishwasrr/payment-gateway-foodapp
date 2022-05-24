import GooglePayButton from "@google-pay/button-react";
import React, { useContext, useState } from "react";
import { FoodContext } from "../App";
import { Link } from "react-router-dom";

function PaymentGateway() {
     let context = useContext(FoodContext);
     let temp=0
    
     let content ='0'
     let temp_n = context.cart.map((e, i) => {
       console.log("hi");
       temp += Number(e.price);
       content=String(temp);
       return String(temp);
     });

                let price=content;
                
     
  return (
    <div className="gpaybutton">
      <h3 id="gheading">Payment Gateway</h3>

      <div className="paybutton">
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: price,
              currencyCode: "INR",
              countryCode: "US",
            },
            shippingAddressRequired: true,
            callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("Success", paymentRequest);
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log("Payment Authorised Success", paymentData);
            return { transactionState: "SUCCESS" };
          }}
          onPaymentDataChanged={(paymentData) => {
            console.log("On Payment Data Changed", paymentData);
            return {};
          }}
          existingPaymentMethodRequired="false"
          buttonColor="black"
          buttonType="Buy"
        />
      </div>
        <div className='placeholder-wrapper_new'>

                <Link to='/order'><button className='product-btn-placeholder'>Place Order</button></Link>
        
            </div>
    </div>
  );
}

export default PaymentGateway;
