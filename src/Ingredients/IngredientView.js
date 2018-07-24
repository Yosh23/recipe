import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from 'prop-types';

import IngredientUpdate from './IngredientUpdate'
import IngredientDelete from './IngredientDelete'

class SimpleCard extends Component {
  ingredientsQuery = gql`
    {
      ingredients {
        id
        name
        kind
        substitute
      }
    }
  `
    render()
    {
      const {classes} = this.props;
        return (
          <Query query={this.ingredientsQuery}>
            {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>

            return data.ingredients.map(({id, name, kind, substitute}) => (
              <div class="flex-container" key={id}>
                <h3>{`${name}`}</h3>
                  <p>{kind}</p>
                  <p>{substitute}</p>
                  <IngredientUpdate id={id}
                                    name={name}
                                    kind={kind}
                                    substitute={substitute}
                  />
                  <br/>
                  <IngredientDelete id={id}/>
              </div>
            ));
            }}
          </Query>
        )
    }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

