import React from 'react'
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './index.css';
import IngredientView from './IngredientView'
import IngredientCreate from './IngredientCreate'

const client = new ApolloClient({
  https://us1.prisma.sh/public-dawnduke-366/recipe/dev
});

const App = () => (
  <ApolloProvider client={client}>
      <div>
              <h2> Ingredients Page </h2>
              <h4>Create and Submit new Ingredients</h4>
              <IngredientCreate/>
              <hr/>
          <IngredientView/>
      </div>
    </ApolloProvider>
);

ReactDOM.render(<app />, document.getElementById('root'));
