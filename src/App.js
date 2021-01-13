///////////////////////////////////////////////////////////////////////////////
//
// Project: Minitab Pre-Interview Assignment
//
// Author: Taran Rickard
// - tbr5094@psu.edu | taranrickard@gmail.com
// - 484-949-5540
//
// Created: 1/13/2021
//
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
	return (
		<div className="App">
			<div class="w-50 mx-auto pt-5 text-left">
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label as="h5" >Sample size:</Form.Label>
						<Form.Control type="email" />
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label as="h5">Sample mean:</Form.Label>
						<Form.Control type="email" />
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label as="h5">Standard Deviation:</Form.Label>
						<Form.Control type="email" />
					</Form.Group>

					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Form.Group controlId="formBasicEmail">
						<Form.Label as="h5">Hypothesized mean:</Form.Label>
						<Form.Control type="email" />

					</Form.Group>
					<div class="d-flex justify-content-end">
						<div class="px-2 form-btn">
							<Button block variant="primary" type="submit">
								OK
          				</Button>
						</div>
						<div class="px-2 form-btn">
							<Button block variant="outline-secondary">
								Reset
          				</Button>
						</div>

					</div>

				</Form>
			</div>

		</div>
	);
}

export default App;