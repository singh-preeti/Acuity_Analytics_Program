import React, { Component } from "react";

class BankRegistration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      accountType: "",
      submittedData: null
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submittedData: {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        accountType: this.state.accountType
      }
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Bank Registration Form</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div>
            <select name="accountType" onChange={this.handleChange}>
              <option value="">Select Account Type</option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>
          </div>
          <br />

          <button type="submit">Submit</button>
        </form>

        {/* Display Data After Submit */}
        {this.state.submittedData && (
          <div style={{ marginTop: "30px" }}>
            <h3>Submitted Details</h3>
            <p><b>Name:</b> {this.state.submittedData.name}</p>
            <p><b>Email:</b> {this.state.submittedData.email}</p>
            <p><b>Phone:</b> {this.state.submittedData.phone}</p>
            <p><b>Account Type:</b> {this.state.submittedData.accountType}</p>
          </div>
        )}
      </div>
    );
  }
}

export default BankRegistration;
