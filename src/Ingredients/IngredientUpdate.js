import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export default class extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    kind: this.props.kind,
    substitute: this.props.substitute
  }
  updateIngredientMutation = gql`
    mutation updateIngredient($id: ID!, $name: String!, $kind: String!, $substitute: String) {
      updateIngredient (
        where: {id: $id},
        data: {name: $name, kind: $kind, substitute: $substitute}
      ){
        id
        name
      }
    }
  `

  updateList = () => {
    return (
      <div>
      <TextField type="text" value={this.state.name}
                 onchange={event => this.setState({name: event.target.value})}/>
      <br/>
      <TextField type="text" value={this.state.kind}
                 onchange={event => this.setState({kind: event.target.value})}/>
      <br/>
      <TextField type="text" value={this.state.substitute}
                 onchange={event => this.setState({substitute: event.target.value})}/>
      <br/>
      </div>
    )
  }

  render () {
    const update = this.updateList()
    return (
      <Mutation mutation={this.updateIngredientMutation}>
        {(updateIngred, {data}) => (
          <form onSubmit={event => {
            event.preventDefault()
            if(this.state.isUpdating){
              updateIngred({
                variable: {
                  id: this.state.id,
                  name: this.state.name,
                  substitute: this.state.substitute
              }
            })
              this.setState({buttonText: "update"})
              window.location.reload(true)
            } else {
              this.setState({buttonText: "Submit"})
            }
            this.setState({isUpdating: !this.state.isUpdating })
          }}>
            {this.setState.isUpdating ? update : null}
            <Button style={style} type="submit" size="medium" variant="contained">{this.state.buttonText}</Button>
          </form>
        )}
      </Mutation>
    )
  }
}
