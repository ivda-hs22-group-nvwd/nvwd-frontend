import React from 'react';
import example from './example.json'

const json = JSON.stringify(example);

const getData = async () => {
	const response = await axios.post(`http://127.0.0.1:5000//api/dev/std/db`, example)
    .then(response => {
        const persons = response.data;
        console.log(persons)
    });
};

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    console.log('component did mount');
    const res = getData();
    console.log(res)
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}