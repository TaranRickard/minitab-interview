///////////////////////////////////////////////////////////////////////////////
//
// File: StatModal.js
//
// displays a modal with a table containing input values
//
// Author: Taran Rickard
// - tbr5094@psu.edu | taranrickard@gmail.com
// - 484-949-5540
//
// Created: 1/13/2021
//

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

class StatModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.hideModalFunc}>
                    <Modal.Header closeButton>
                        <Modal.Title>Values Entered</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <th>Sample size</th>
                                <th>Sample mean</th>
                                <th>Standard Deviation</th>
                                {this.props.hypTest &&
                                    <th> Hypothesized Mean</th>
                                }
                            </thead>
                            <tbody>
                                <td>{this.props.statVars.n}</td>
                                <td>{this.props.statVars.mu}</td>
                                <td>{this.props.statVars.sigma}</td>
                                {this.props.hypTest &&
                                    <td>{this.props.statVars.muPrime}</td>
                                }
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.hideModalFunc}>
                            Close
						</Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default StatModal;