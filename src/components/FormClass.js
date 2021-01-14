///////////////////////////////////////////////////////////////////////////////
//
// File: FormClass.js
//
// displays the form on the application, validates inputs and passes values
// back to the rest of the app
//
// Author: Taran Rickard
// - tbr5094@psu.edu | taranrickard@gmail.com
// - 484-949-5540
//
// Created: 1/13/2021
//

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class FormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Hypothesis: false,
            formErrorMessages: [
                'value must be a number',
                'value must be a number',
                'value must be a number',
                'value must be a number'
            ],
            formError: [
                false, false, false, false
            ],
            n: '',
            mu: '',
            sigma: '',
            muPrime: ''
        };
    }

    /////////////////////////////////////////
    // resets all form controls, disables
    // the hypothesized mean input and resets
    // all errors
    //
    resetInputs = (event) => {
        this.setState({
            n: '',
            mu: '',
            sigma: '',
            muPrime: '',
            Hypothesis: false,
            formError: [false, false, false, false]
        })
    }

    /////////////////////////////////////////
    // called whenever the checkbox is
    // clicked, resets the Hypothesized mean
    // form control
    //
    handleCheck = (event) => {
        this.setState({
            Hypothesis: event.target.checked
        });
        if (!event.target.checked) {
            var errors = this.state.formError;
            errors[3] = false;
            this.setState({
                muPrime: '',
                formError: errors
            });
        }
    }

    /////////////////////////////////////////
    // called whenever submit button is
    // clicked. validates data, if valid
    // passes data back to app to open
    // the modal
    //
    handleSubmit = (event) => {
        event.preventDefault();
        var formValid = true;
        var errorMessages = this.state.formErrorMessages;
        var errors = [false, false, false, false];

        //check for blank inputs
        if (this.state.n === '') {
            errors[0] = true;
            errorMessages[0] = 'Enter a Sample Size';
            formValid = false;
        }
        if (this.state.mu === '') {
            errors[1] = true;
            errorMessages[1] = 'Enter a Sample Mean';
            formValid = false;
        }
        if (this.state.sigma === '') {
            errors[2] = true;
            errorMessages[2] = 'Enter a Standard Deviation';
            formValid = false;
        }
        if (this.state.Hypothesis) {
            if (this.state.muPrime === '') {
                errors[3] = true;
                errorMessages[3] = 'Enter a Hypothesized Mean';
                formValid = false;
            }
        }


        var n = Number(this.state.n);
        var mu = Number(this.state.mu);
        var sigma = Number(this.state.sigma);
        var muPrime = Number(this.state.muPrime);


        //n must be whole number >= 2
        if (!Number.isInteger(n) && !errors[0]) {
            //n is not an integer
            formValid = false;
            errorMessages[0] = 'Sample size needs to be a whole number';
            errors[0] = true;
        }
        else if ((n < 2) && !errors[0]) {
            //n is not >=2
            formValid = false;
            errorMessages[0] = 'Sample size needs to be greater than or equal to 2';
            errors[0] = true;
        }

        //mu must be a number
        if (Number.isNaN(mu) && !errors[1]) {
            //mu is not a number
            formValid = false;
            errorMessages[1] = 'Sample mean must be a number';
            errors[1] = true;
        }

        //sigma must be a number > 0
        if (Number.isNaN(sigma) && !errors[2]) {
            //sigma is not a number
            formValid = false;
            errorMessages[2] = 'Standard Deviation must be a number';
            errors[2] = true;
        }
        else if ((sigma <= 0) && !errors[2]) {
            //sigma is not > 0
            formValid = false;
            errorMessages[2] = 'Standard Deviation must be greater than 0';
            errors[2] = true;
        }

        //muPrime must be a number
        if (this.state.Hypothesis && !errors[3]) {
            if (Number.isNaN(muPrime)) {
                //muPrime is not a number
                formValid = false;
                errorMessages[3] = 'Hypothesized mean must be a number';
                errors[3] = true;
            }
        }

        this.setState({
            formError: errors,
            formErrorMessages: errorMessages
        });

        if (formValid) {
            console.log('form is valid');
            this.props.showModalFunc({
                n: n,
                mu: mu,
                sigma: sigma,
                muPrime: muPrime
            }, this.state.Hypothesis);
        }
    }

    render() {
        return (
            <div className="App">
                <div className="w-50 mx-auto pt-5 text-left">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formSampleSize">
                            <Form.Label as="h5" >Sample size:</Form.Label>
                            <Form.Control type="text" value={this.state.n}
                                onChange={e => this.setState({ n: e.target.value })} />
                            <Form.Text className="text-danger" hidden={!this.state.formError[0]}>
                                {this.state.formErrorMessages[0]}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formSampleMean">
                            <Form.Label as="h5">Sample mean:</Form.Label>
                            <Form.Control type="text" value={this.state.mu}
                                onChange={e => this.setState({ mu: e.target.value })} />
                            <Form.Text className="text-danger" hidden={!this.state.formError[1]}>
                                {this.state.formErrorMessages[1]}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formStandardDeviation">
                            <Form.Label as="h5">Standard Deviation:</Form.Label>
                            <Form.Control type="text" value={this.state.sigma}
                                onChange={e => this.setState({ sigma: e.target.value })} />
                            <Form.Text className="text-danger" hidden={!this.state.formError[2]}>
                                {this.state.formErrorMessages[2]}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formHypothesis">
                            <Form.Check type="checkbox" label="Perform hypothesis test" checked={this.state.Hypothesis}
                                onChange={this.handleCheck} />
                        </Form.Group>
                        <Form.Group controlId="formHypothesizedMean">
                            <Form.Label as="h5">Hypothesized mean:</Form.Label>
                            <Form.Control disabled={!this.state.Hypothesis} type="text"
                                value={this.state.muPrime} onChange={e => this.setState({ muPrime: e.target.value })} />
                            <Form.Text className="text-danger" hidden={!this.state.formError[3]}>
                                {this.state.formErrorMessages[3]}
                            </Form.Text>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <div className="px-2 form-btn">
                                <Button block variant="primary" type="submit">
                                    OK
          				</Button>
                            </div>
                            <div className="px-2 form-btn">
                                <Button block variant="outline-secondary" onClick={this.resetInputs}>
                                    Reset
          				        </Button>
                            </div>

                        </div>

                    </Form>
                </div>

            </div>);
    }
}

export default FormClass;
