import React, { Component } from "react";
import { Table } from "reactstrap";
import NewItemModal from "./NewItemModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ItemList extends Component {
  render() {
    const item = this.props.Item;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Shelf</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!item || item.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>no item here yet</b>
              </td>
            </tr>
          ) : (
            item.map(item => (
              <tr key={item.pk}>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.shelf}</td>
                <td>{item.amount}</td>
                <td align="center">
                  <NewItemModal
                    create={false}
                    item={item}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={item.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ItemList;