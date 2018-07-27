import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export default class extends Component {
  delelteIngredientMutation = gql`
    mutation deleteIngredient($id: ID!) {
      deleteIngredient (where: {id: $id}) {
        id
        name
      }
    }
  `

  // handleClickOpen = () => {
  //   this.setState({open: true});
  // };
  // handleClose = () => {
  //   this.setState({close: false});
  // };

  render() {
    return (
      <div>
        <Button>Delete</Button>

        <Mutation mutation={this.deleteIngredientMutation}>
          {(deleteIngred, {data}) => (
            <form onSubmit={event => {
              event.preventDefault()
              deleteIngred({
                variables: {
                  id: this.props.id,
                }
              })
              window.location.reload(true)
            }}>
            </form>
          )}
        </Mutation>
      </div>
    )
  }
}
