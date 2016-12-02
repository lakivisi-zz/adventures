import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  Form,
  Link,
  Modal,
  Col,
  Nav,
  NavItem,
  Tab
} from 'react-bootstrap';
import EditItemForm from './edititemform.jsx';


class EditItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    return (
      <div>
        <Button onClick={this.open} role="edit_item" className={this.props.type}>
          {this.props.children}
        </Button>
        <Modal show={this.state.showModal} onHide={this.close} className="signin-modal">
          <Modal.Body>
            <h4 >Edit Item</h4>
            <Tab.Container id="edit_item" defaultActiveKey={this.props.active}>
              <EditItemForm bucketlist_id={this.props.bucketlist_id} 
              item_id={this.props.item_id} 
              name={this.props.name} 
              description={this.props.description} 
              completed={this.props.completed}/>
            </Tab.Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditItemModal;
