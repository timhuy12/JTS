import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewItemForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    location: "",
    shelf: "",
    amount: ""
  };

  componentDidMount() {
    if (this.props.item) {
      const { pk, name, location, shelf, amount } = this.props.student;
      this.setState({ pk, name, location, shelf, amount });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createItem = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editItem = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.item ? this.editItem : this.createItem}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location:</Label>
          <Input
            type="text"
            name="location"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.location)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="shelf">Shelf:</Label>
          <Input
            type="text"
            name="shelf"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.shelf)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount:</Label>
          <Input
            type="integer"
            name="amount"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.amount)}
          />
        </FormGroup>
        <Button>Create</Button>
      </Form>
    );
  }
}

export default NewItemForm;