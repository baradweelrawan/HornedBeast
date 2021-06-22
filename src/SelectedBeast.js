import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

        
 class SelectedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alert: props.alert,
            show: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    // alertMessage = (show, setShow) => {
    //     this.setState({ alert: this.props.alertMsg(this.state.alert) });

    // }
    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    
    
    render() {
        
        return (
            <div>

                {/* <Button variant="primary" onClick={handleShow}> Alert Me </Button> */}
                <Modal show={this.props.show} onHide={this.alertMessage}>
                    <Modal.Header closeButton>
                        <Modal.Title> Alert Message </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.title}</p>
                        <p>{this.props.description}</p>
                        <p>{this.state.likeNumber}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hideModal}> Close </Button>
                        <Button variant="primary" onClick={this.showModal}> Save Changes </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }}



export default SelectedBeast
