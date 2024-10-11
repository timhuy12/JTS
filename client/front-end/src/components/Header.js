import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img src="https://www.ametek.com/-/media/project/oneweb/oneweb/oneweb/logos/default-logo.png?h=33&w=216&revision=19c8369c-a1ce-43a0-9399-74476f6b8457&hash=FD110BFD930AC1F855B5552CAAF77354"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
          alt="" // Empty string for decorative images
        />
        <hr />
        <h1>Inventory Management System
        </h1>
      </div>
    );
  }
}

export default Header;