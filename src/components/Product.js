import React from 'react';
import Popup from 'reactjs-popup';
import Swal from 'sweetalert';

// Strategy pattern

class PaymentManager {
  constructor() {
    this._method= null;
  }

  set method(method) {
    this._method = method
  }

  makePayment(price) {
    this._method.pay(price);
  }
}

class PayPal_Method {
  pay(price) {
    Swal({
      title: "Done!",
      text: "$" + price + " has been charged with PAYPAL payment method",
      icon: "success",
    })
  }
}

class CreditCard_Method {
  pay(price) {
    Swal({
      title: "Done!",
      text: "$" + price + " has been charged with CREDIT-CARD payment method",
      icon: "success",
    })
  }
}


const payment = new PaymentManager();

const handlePayment = (method, price) => {
  payment.method = method;
  payment.makePayment(price);
  console.log(price)
}

// End of strategy pattern

const Product = ({id, name, description, img, price }) => {

  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
      <div className="tc">
        <img src={img} class="br-100 h4 w4 dib ba b--black-05 pa2" title={name} />
        <h1 className="f3 mb2">{name}</h1>
        <h2 className="f5 fw4 gray mt0">{description}</h2>
        <span>$ {price} </span>
        <Popup modal trigger={<button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn">Buy</button>}>
        <h2 className="f5 fw4 gray mt0">Select payment method</h2>
          <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn" onClick = {() => {handlePayment(new PayPal_Method(), price)}}>Paypal</button>
          <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn" onClick = {() => {handlePayment(new CreditCard_Method(), price)}}>Credit Card</button>
        </Popup>
      </div>
    </article>
  );
};

export default Product;
