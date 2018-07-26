/* Adding in custom R (Query) resolvers*/
const { Cookbooks } = require('./Cookbooks')
const { Recipe } = require('./Recipe')
const { Ingredient } = require('./Ingredient')
const { ShoppingList } = require('./ShoppingList')
/* Adding in C,U,D (Mutation) resolvers */
const { cudCookbook } = require('./Mutation/cudCookbook')
const { cudIngred } = require('./Mutation/cudIngred')
const { recipe } = require('./Mutation/recipe')
const { shoppingList } = require('./Mutation/shoppingList')

const { post } = require('./Mutation/post')
const { AuthPayload } = require('./AuthPayload')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')

module.exports = {
  Query: {
    ...Cookbooks,
    ...Ingredient,
    ...ShoppingList,
    ...Recipe,
  },
  Mutation: {
    ...auth,
    ...cudCookbook,
    ...post,
    ...recipe,
    ...cudIngred,
    ...shoppingList,
  },
  Subscription,
  AuthPayload,
}
