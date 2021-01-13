import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class FormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Hypothesis: false
        };
    }

    handleCheck = (event) => {
        console.log(event.target.checked);
        this.setState({
            Hypothesis: event.target.checked
        });
    }

    render() {
        return (
            <div className="App">
                <div className="w-50 mx-auto pt-5 text-left">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label as="h5" >Sample size:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label as="h5">Sample mean:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label as="h5">Standard Deviation:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Perform hypothesis test" onChange={this.handleCheck} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label as="h5">Hypothesized mean:</Form.Label>
                            <Form.Control disabled={!this.state.Hypothesis} type="text" />

                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <div className="px-2 form-btn">
                                <Button block variant="primary" type="submit">
                                    OK
          				</Button>
                            </div>
                            <div className="px-2 form-btn">
                                <Button block variant="outline-secondary">
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
