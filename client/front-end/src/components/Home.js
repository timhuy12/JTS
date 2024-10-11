import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ItemList from "./ItemList";
import NewItemModal from "./NewItemModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.resetState();
  }

  getitems = () => {
    axios.get(API_URL).then(res => this.setState({ items: res.data }));
  };

  resetState = () => {
    this.getitems();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ItemList
              items={this.state.items}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewItemModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;