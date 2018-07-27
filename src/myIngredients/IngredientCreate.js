import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  });

class ControlledOpenSelect extends React.Component {
  state = {
    ingredient: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

  return (
      <form autoComplete="off">
        <Button className={classes.button} onClick={this.handleOpen}>
          Open for Ingredient List
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Ingredient</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.ingredient}
            onChange={this.handleChange}
            inputProps={{
              name: 'ingredient',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value="spice">Spice</MenuItem>
            <MenuItem value="meat">Meat</MenuItem>
            <MenuItem value="Vegetable">Vegetable</MenuItem>
            <MenuItem value="fruit">Fruit</MenuItem>
            <MenuItem value="grains">Grains</MenuItem>
            <MenuItem value="dairy">Dairy</MenuItem>
            <MenuItem value="beans">Beans</MenuItem>
            <MenuItem value="pasta">Pasta</MenuItem>
           </Select>
         </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const CustomSelect = withStyles(styles)(ControlledOpenSelect);

export default class extends Component {
  state = {
    name: '',
    kind: '',
    substitute: ''
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
              <imput type="text" placeholder="name" required onChange={event => this.setState({ name : event.target.value})}/>
              <CustomSelect/>
              <imput type="text" placeholder="substitute" required onChange={event => this.setState({ substitute : event.target.value})}/>
              <input type="submit" />
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}
