import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NumericInput from "react-numeric-input";
import Options from "./Options";
import axios from "axios";
import { body_type_options } from "./options/body_type";
import { diet_modifier_options } from "./options/diet_modifier";
import { diet_type_options } from "./options/diet_type";
import { drinks_options } from "./options/drinks_type";
import { drugs_type_options } from "./options/drugs_type";
import { education_institution_status_options } from "./options/education_status_type";
import { education_institution_type_options } from "./options/education_institution_type";
import { ethnicities_type_options } from "./options/ethnicities_type";
import example from "./example.json";
import { income_type } from "./options/income_type";
import { job_type_options } from "./options/job_type";
import { offspring_future_type } from "./options/offspring_future_type";
import { offspring_status_type } from "./options/offspring_status_type";
import { pets_cats_type_options } from "./options/pets_cats_type";
import { pets_dogs_type_options } from "./options/pets_dogs_type";
import { religion_modifier_options } from "./options/religion_modifier";
import { religion_type_options } from "./options/religion_type";
import { sex_type_options } from "./options/sex_type";
import { sign_modifier_options } from "./options/sign_modifier";
import { sign_type_options } from "./options/sign_type";
import { smokes_type_options } from "./options/smokes_type";

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
    this.state = {
      age: 0,
      height: 0,
      dietModifier: "-",
      dietType: "-",
    };

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
  getDietModifierValue = (dietModifier) => {
    this.setState({ dietModifier: dietModifier });
  };
  getDietTypeValue = (dietType) => {
    this.setState({ dietTyp: dietType });
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
            <NumericInput
              min={18}
              max={110}
              onChange={(event) => this.setState({ age: event })}
            />
          </label>
          <label>
            Height
            <NumericInput
              min={100}
              max={230}
              onChange={(event) => this.setState({ height: event })}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.dietType}</h1>
        <div>{this.state.age}</div>
      </>
    );
  }
}
