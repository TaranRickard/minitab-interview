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

    resetInputs = (event) => {
        this.setState({
            n: '',
            mu: '',
            sigma: '',
            muPrime: '',
            Hypothesis: false
        })
    }

    handleCheck = (event) => {
        this.setState({
            Hypothesis: event.target.checked
        });
        if (!event.target.checked) {
            this.setState({
                muPrime: ''
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var n = Number(this.state.n);
        var mu = Number(this.state.mu);
        var sigma = Number(this.state.sigma);
        var muPrime = Number(this.state.muPrime);
        var formValid = true;

        var errorMessages = this.state.formErrorMessages;
        var errors = [false, false, false, false];

        //n must be whole number >= 2
        if (!Number.isInteger(n)) {
            //n is not an integer
            formValid = false;
            errorMessages[0] = 'Sample size needs to be a whole number';
            errors[0] = true;
        }
        else if (n < 2) {
            //n is not >=2
            formValid = false;
            errorMessages[0] = 'Sample size needs to be greater than 2';
            errors[0] = true;
        }

        //mu must be a number
        if (Number.isNaN(mu)) {
            //mu is not a number
            formValid = false;
            errorMessages[1] = 'Sample mean must be a number';
            errors[1] = true;
        }

        //sigma must be a number > 0
        if (Number.isNaN(sigma)) {
            //sigma is not a number
            formValid = false;
            errorMessages[2] = 'Standard Deviation must be a number';
            errors[2] = true;
        }
        else if (sigma <= 0) {
            //sigma is not > 0
            formValid = false;
            errorMessages[2] = 'Standard Deviation must be greater than 0';
            errors[2] = true;
        }

        //muPrime must be a number
        if (this.state.Hypothesis) {
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
