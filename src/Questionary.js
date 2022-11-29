import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NumericInput from "react-numeric-input";
import Options from "./Options";
import axios from "axios";
import { body_type_options } from "./options/body_type";
import { diet_modifier_options } from "./options/diet_modifier";
import { diet_type_options } from "./options/diet_type";
import { drinks_type_options } from "./options/drinks_type";
import { drugs_type_options } from "./options/drugs_type";
import { education_institution_type_options } from "./options/education_institution_type";
import { education_status_type_options } from "./options/education_status_type";
import { ethnicities_type_options } from "./options/ethnicities_type";
import example from "./example.json";
import { income_type_options } from "./options/income_type";
import { job_type_options } from "./options/job_type";
import { offspring_future_type } from "./options/offspring_future_type";
import { offspring_status_type } from "./options/offspring_status_type";
import { orientation_type_options } from "./options/orientation_type";
import { pets_cats_type_options } from "./options/pets_cats_type";
import { pets_dogs_type_options } from "./options/pets_dogs_type";
import { religion_modifier_options } from "./options/religion_modifier";
import { religion_type_options } from "./options/religion_type";
import { sex_type_options } from "./options/sex_type";
import { sign_modifier_options } from "./options/sign_modifier";
import { sign_type_options } from "./options/sign_type";
import { smokes_type_options } from "./options/smokes_type";
import { status_type_options } from "./options/status_type";

const getData = async () => {
  const response = await axios
    .post(`http://127.0.0.1:5000//api/dev/std/db`, example)
    .then((response) => {
      const persons = response.data;
      console.log(persons);
    });
};

export default class Questionary extends Component {
  createJson = () => {
    var obj = new Object();
    obj.age = this.state.age;
    obj.height = this.state.height;
    obj.dietModifier = this.state.dietModifier;
    obj.drinksType = this.state.drinksType;
    obj.drugType = this.state.drugType;
    obj.incomeType = this.state.incomeType;
    obj.jobType = this.state.jobType;
    obj.orientationType = this.state.orientationType;
    obj.sexType = this.state.sexType;
    obj.signtype = this.state.signType;
    obj.signModifier = this.state.signModifier;
    obj.smokesType = this.state.smokesType;
    obj.statusType = this.state.statusType;
    obj.educationStatusType = this.state.educationStatusType;
    obj.educationInstitutionType = this.state.educationInstitutionType;
    obj.offspringStatusType = this.state.offspringStatusType;
    obj.offspringFutureType = this.state.offspringFutureType;
    obj.petsCatsType = this.state.petsCatsType;
    obj.petsDogsType = this.state.petsDogsType;
    obj.religionType = this.state.religionType;
    obj.religionModifier = this.state.religionModifier;

    var jsonString = JSON.stringify(obj);
    console.log(jsonString);
  };
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      height: 0,

      bodyType: "",
      dietType: "",
      dietModifier: "",
      drinksType: "",
      drugType: "",
      incomeType: "",
      jobType: "",
      orientationType: "",
      sexType: "",
      signType: "",
      signModifier: "",
      smokesType: "",
      statusType: "",
      educationStatusType: "",
      educationInstitutionType: "",
      offspringStatusType: "",
      offspringFutureType: "",
      petsCatsType: "",
      petsDogsType: "",
      religionType: "",
      religionModifier: "",
      // speaks... :)
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
    this.createJson();
    //getData();
  }

  // callback functions
  getBodyTypeValue = (bodyType) => {
    this.setState({ bodyType: bodyType });
  };
  getDietTypeValue = (dietType) => {
    this.setState({ dietType: dietType });
  };
  getDietModifierValue = (dietModifier) => {
    this.setState({ dietModifier: dietModifier });
  };
  getDrinksType = (drinksType) => {
    this.setState({ drinksType: drinksType });
  };
  getDrugType = (drugType) => {
    this.setState({ drugType: drugType });
  };
  getIncomeType = (incomeType) => {
    this.setState({ incomeType: incomeType });
  };
  getJobType = (jobType) => {
    this.setState({ jobType: jobType });
  };
  getOrientationType = (orientationType) => {
    this.setState({ orientationType: orientationType });
  };
  getSexType = (sexType) => {
    this.setState({ sexType: sexType });
  };
  getSignType = (signType) => {
    this.setState({ signType: signType });
  };
  getSignModifier = (signModifier) => {
    this.setState({ signModifier: signModifier });
  };
  getSmokesType = (smokesType) => {
    this.setState({ smokesType: smokesType });
  };
  getStatusType = (statusType) => {
    this.setState({ statusType: statusType });
  };
  getEducationStatusType = (educationStatusType) => {
    this.setState({ educationStatusType: educationStatusType });
  };
  geteEducationInstitutionType = (educationInstitutionType) => {
    this.setState({ educationInstitutionType: educationInstitutionType });
  };
  getOffspringStatusType = (offspringStatusType) => {
    this.setState({ offspringStatusType: offspringStatusType });
  };
  getOffspringFutureType = (offspringFutureType) => {
    this.setState({ offspringFutureType: offspringFutureType });
  };
  getPetsCatsType = (petsCatsType) => {
    this.setState({ petsCatsType: petsCatsType });
  };
  getPetsDogsType = (petsDogsType) => {
    this.setState({ petsDogsType: petsDogsType });
  };
  getReligionType = (religionType) => {
    this.setState({ religionType: religionType });
  };
  getReligionModifier = (religionModifier) => {
    this.setState({ religionModifier: religionModifier });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Options
            options={body_type_options}
            parentCallback={this.getbodyTypeValue}
          ></Options>
          <Options
            options={diet_type_options}
            parentCallback={this.getDietTypeValue}
          ></Options>
          <Options
            options={diet_modifier_options}
            parentCallback={this.getDietModifierValue}
          ></Options>

          <Options
            options={drinks_type_options}
            parentCallback={this.getDrinksType}
          ></Options>
          <Options
            options={drugs_type_options}
            parentCallback={this.getDrugType}
          ></Options>
          <Options
            options={income_type_options}
            parentCallback={this.getIncomeType}
          ></Options>
          <Options
            options={job_type_options}
            parentCallback={this.getJobType}
          ></Options>
          <Options
            options={orientation_type_options}
            parentCallback={this.getOrientationType}
          ></Options>
          <Options
            options={sex_type_options}
            parentCallback={this.getSexType}
          ></Options>
          <Options
            options={sign_type_options}
            parentCallback={this.getSignType}
          ></Options>
          <Options
            options={sign_modifier_options}
            parentCallback={this.getSignModifier}
          ></Options>
          <Options
            options={smokes_type_options}
            parentCallback={this.getSmokesType}
          ></Options>
          <Options
            options={status_type_options}
            parentCallback={this.getStatusType}
          ></Options>
          <Options
            options={education_status_type_options}
            parentCallback={this.getEducationStatusType}
          ></Options>
          <Options
            options={education_institution_type_options}
            parentCallback={this.geteEducationInstitutionType}
          ></Options>
          <Options
            options={offspring_status_type}
            parentCallback={this.getOffspringStatusType}
          ></Options>
          <Options
            options={offspring_future_type}
            parentCallback={this.getOffspringFutureType}
          ></Options>
          <Options
            options={pets_cats_type_options}
            parentCallback={this.getPetsCatsType}
          ></Options>
          <Options
            options={pets_dogs_type_options}
            parentCallback={this.getPetsDogsType}
          ></Options>
          <Options
            options={religion_type_options}
            parentCallback={this.getReligionType}
          ></Options>
          <Options
            options={religion_modifier_options}
            parentCallback={this.getReligionModifier}
          ></Options>

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
