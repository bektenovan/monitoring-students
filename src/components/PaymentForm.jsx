import React from 'react';

class PaymentForm extends React.Component {


    render() {

        return (

            <div className='payback'>
                <div className="maincontainer">
                    <h2 style={{ textAlign: "center", marginTop: "50px" }}>Payment Form</h2>
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-lg-7 mx-auto">
                                <div class="bg-white rounded-lg shadow-sm p-5">

                                    <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                                        <li class="nav-item">
                                            <a data-toggle="pill" href="#nav-tab-card" class="nav-link active rounded-pill">
                                                <i class="fa fa-credit-card"></i>
                                                Credit Card
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a data-toggle="pill" href="#nav-tab-paypal" class="nav-link rounded-pill bg-dark">
                                                <i class="fa fa-paypal"></i>
                                                Paypal
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a data-toggle="pill" href="#nav-tab-bank" class="nav-link rounded-pill bg-dark">
                                                <i class="fa fa-university"></i>
                                                Bank Transfer
                                            </a>
                                        </li>
                                    </ul>

                                    <div class="tab-content">

                                        <div id="nav-tab-card" class="tab-pane fade show active">
                                            <p class="alert alert-success">Some text success or error</p>
                                            <form role="form">
                                                <div class="form-group">
                                                    <label for="username">Name</label>
                                                    <input type="text" name="username" placeholder="Jassa" required class="form-control" />
                                                    <label for="username">Phone Number</label>
                                                    <input type="text" name="phone" placeholder="0555555000" required class="form-control" />
                                                    <label for="username">Full name (on the card)</label>
                                                    <input type="text" name="username" placeholder="Jassa" required class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="cardNumber">Card number</label>
                                                    <div class="input-group">
                                                        <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required />
                                                        <div class="input-group-append">
                                                            <span class="input-group-text text-muted">
                                                                <i class="fa fa-cc-visa mx-1"></i>
                                                                <i class="fa fa-cc-amex mx-1"></i>
                                                                <i class="fa fa-cc-mastercard mx-1"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group">
                                                            <label><span class="hidden-xs">Expiration</span></label>
                                                            <div class="input-group">
                                                                <input type="number" placeholder="MM" name="" class="form-control" required />
                                                                <input type="number" placeholder="YY" name="" class="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="form-group mb-4">
                                                            <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                                                <i class="fa fa-question-circle"></i>
                                                            </label>
                                                            <input type="text" required class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/"> <button type="button" class="subscribe btn btn-primary btn-block  bg-dark rounded-pill shadow-sm"> Confirm  </button></a>
                                            </form>
                                        </div>


                                        <div id="nav-tab-paypal" class="tab-pane fade">
                                            <p>Paypal is easiest way to pay online</p>
                                            <p>
                                                <button type="button" class="btn btn-primary rounded-pill"><i class="fa fa-paypal mr-2"></i> Log into my Paypal</button>
                                            </p>
                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>

                                        <div id="nav-tab-bank" class="tab-pane fade">
                                            <h6>Bank account details</h6>
                                            <dl>
                                                <dt>Bank</dt>
                                                <dd> THE WORLD BANK</dd>
                                            </dl>
                                            <dl>
                                                <dt>Account number</dt>
                                                <dd>7775877975</dd>
                                            </dl>
                                            <dl>
                                                <dt>IBAN</dt>
                                                <dd>CZ7775877975656</dd>
                                            </dl>
                                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    };
}
export default PaymentForm;