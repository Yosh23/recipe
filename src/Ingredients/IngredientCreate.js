import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export default class extends Component {
  state = {
    name: "",
    kind: "",
    substitute: ""
  }
  createIngredientMutation = gql`
    mutation createIngredient ($name: String!, $kind: String!, $substitute: String) {
      createIngredient (data: {name: $name, kind: $kind, substitute: $substitute }) {
        id
        name
        kind
        substitute
      }
    }
  `;

  render () {
    return (
      <Mutation mutation={this.createIngredientMutation}>
        {(createIngred, {data}) => (
          <div>
            <form onSubmit={event => {
            event.preventDefault()
            createIngred ({variables: {
              name: this.state.name,
                kind: this.state.kind,
                substitute: this.state.substitute
              }})
            window.location.reload(true)
            }}>
              <imput type="text" placeholder="name" required onChange {event => this.setState({ name : event.target.value})}/>
              <imput type="text" placeholder="kind" required onChange {event => this.setState({ kind : event.target.value})}/>
              <imput type="text" placeholder="substitute" required onChange {event => this.setState({ substitute : event.target.value})}/>
              <input type="submit" />
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}
