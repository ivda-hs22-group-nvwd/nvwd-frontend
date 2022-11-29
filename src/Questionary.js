import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NumericInput from "react-numeric-input";
import Options from "./Options";
import axios from "axios";
import { body_type_options } from "./options/body_type";
import { diet_modifier_options } from "./options/diet_modifier";
import { diet_type_options } from "./options/diet_type";
import example from "./example.json";
import { sex_type_options } from "./options/sex_type";

const getData = async () => {
  const response = await axios
    .post(`http://127.0.0.1:5000//api/dev/std/db`, example)
    .then((response) => {
      const persons = response.data;
      console.log(persons);
    });
};

export default class Questionary extends Component {
  constructor(props) {
    super(props);
    this.state = { dietModifierData: "-", dietTypeData: "-" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target[1].value);

    getData();
  }

  // callback function
  getDietModifierValue = (dietModifierData) => {
    this.setState({ dietModifierData: dietModifierData });
  };
  getDietTypeValue = (dietTypeData) => {
    this.setState({ dietTypeData: dietTypeData });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Options
            options={diet_modifier_options}
            parentCallback={this.getDietModifierValue}
          ></Options>
          <Options
            options={diet_type_options}
            parentCallback={this.getDietTypeValue}
          ></Options>

          {/* TODO: state for numerical inputs */}

          <label>
            Age
            <NumericInput min={18} max={100} value={18} />
          </label>
          <label>
            Height
            <NumericInput min={100} max={230} value={150} />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.dietTypeData}</h1>
      </>
    );
  }
}
