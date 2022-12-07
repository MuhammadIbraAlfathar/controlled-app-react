import React from "react";
import { createRoot } from "react-dom/client";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeHandler = this.onGenderChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onGenderChangeHandler(event) {
    this.setState((prevState) => {
      return {
        gender: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const message = `
    Terimakasih Sudah Registrasi
    Berikut Data Anda

    Name  : ${this.state.name}
    Email : ${this.state.email}
    Gender: ${this.state.gender}

    `;

    alert(message);
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <table>
            <tr>
              <td>
                <label for="name">Name:</label>
              </td>
              <td>
                <input
                  id="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onNameChangeEventHandler}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="email">Email :</label>
              </td>
              <td>
                <input
                  id="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onEmailChangeEventHandler}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="gender">Gender :</label>
              </td>
              <td>
                <select
                  id="gender"
                  value={this.state.gender}
                  onChange={this.onGenderChangeHandler}
                >
                  <option value="Man">Man</option>
                  <option value="Woman">Woman</option>
                </select>
              </td>
            </tr>

            <button type="submit">Submit</button>
          </table>
        </form>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<MyForm />);
